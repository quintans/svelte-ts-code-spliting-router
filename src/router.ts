import { writable, Writable } from 'svelte/store'
import router from 'page' 

interface View {
  component: any,
  props?: any
}

export const page: Writable<View> = writable({
  component: null,
  props: {}
})

router('/', () =>
  import('./views/Index.svelte').then(module =>
    page.set({ component: module.default })
  )
)

router('/something', () =>
  import('./views/Something.svelte').then(
    module => page.set({ component: module.default })
  )
)

router('/hello/:name', ctx =>
  import('./views/Hello.svelte').then(module =>
    page.set({ component: module.default, props: ctx.params })
  )
)

export default router
