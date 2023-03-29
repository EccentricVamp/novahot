import { autoDarkColor, defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'
import presetTailwindForms from '@twind/preset-tailwind-forms'

export const config = defineConfig({
  presets: [presetAutoprefix(), presetTailwind(), presetTailwindForms()],
  darkColor: autoDarkColor,
})