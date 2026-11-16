<!-- 小鲸鱼挂载到 body，避免主题布局的 transform 改变固定定位。 -->
<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, watch } from "vue";
import { useData, useRoute, withBase } from "vitepress";
import { mountGardenCompanion, type GardenCompanionController } from "./garden-companion.js";
import "../style/garden-companion.css";

const route = useRoute();
const { frontmatter } = useData();
let companion: GardenCompanionController | undefined;
let overlayObserver: MutationObserver | undefined;
let overlayFrame = 0;
let stopRouteWatch: (() => void) | undefined;

const overlaySelector = '.DocSearch-Container, .VPLocalSearchBox, .VPNavScreen.open, .VPBackdrop, .tk-image-viewer, [role="dialog"][aria-modal="true"], .transition-mask';
function syncOverlays() {
  overlayFrame = 0;
  const open = Array.from(document.querySelectorAll<HTMLElement>(overlaySelector)).some(element => {
    const style = getComputedStyle(element);
    return !element.hidden && element.getAttribute("aria-hidden") !== "true"
      && style.display !== "none" && style.visibility !== "hidden" && element.getClientRects().length > 0;
  });
  companion?.setObscured(open);
}
function queueOverlayCheck() {
  if (!overlayFrame) overlayFrame = requestAnimationFrame(syncOverlays);
}

onMounted(() => {
  companion = mountGardenCompanion(withBase("/img/garden-whale.webp"), {
    getPage: () => ({
      path: route.path,
      kind: frontmatter.value.layout === "home" ? "home" : route.data.isNotFound ? "other" : "article",
    }),
  });
  overlayObserver = new MutationObserver(mutations => {
    // The whale changes its own classes and styles frequently; ignore those.
    if (mutations.some(mutation => !(mutation.target instanceof Element)
      || !mutation.target.closest("#gardenCompanion"))) queueOverlayCheck();
  });
  overlayObserver.observe(document.body, {
    childList: true, subtree: true, attributes: true,
    attributeFilter: ["class", "style", "hidden", "aria-hidden", "open"],
  });
  syncOverlays();
  stopRouteWatch = watch(() => route.path, async () => {
    await nextTick();
    companion?.onRouteChange();
    queueOverlayCheck();
  }, { flush: "post" });
});

onBeforeUnmount(() => {
  stopRouteWatch?.();
  overlayObserver?.disconnect();
  cancelAnimationFrame(overlayFrame);
  companion?.destroy();
  companion = undefined;
});
</script>

<template></template>
