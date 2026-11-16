export interface CompanionPage {
  kind: "home" | "article" | "other";
  path: string;
}
export interface GardenCompanionController {
  onRouteChange(): void;
  setObscured(open: boolean): void;
  destroy(): void;
}
export function mountGardenCompanion(
  spriteUrl: string,
  options: { getPage: () => CompanionPage }
): GardenCompanionController | undefined;
