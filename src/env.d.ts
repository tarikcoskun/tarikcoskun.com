/// <reference types="vite-svg-loader" />
/// <reference types="vite/client" />

declare module "*.svg?component"
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}