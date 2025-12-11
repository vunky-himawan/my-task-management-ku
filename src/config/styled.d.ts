import "styled-components";
import type { ThemeTokens } from "../app/theme/tokens";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeTokens {}
}
