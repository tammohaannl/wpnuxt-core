import type { WPNuxtAuthPublicConfig } from '../runtime/types'

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    wpNuxtAuth: WPNuxtAuthPublicConfig
  }
}

export {}
