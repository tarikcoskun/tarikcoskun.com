/// <reference types="vite/client" />

declare module "vue-animejs"
declare module "*.vue" {
  import type { defineComponent } from "vue"
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
