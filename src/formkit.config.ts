import '@formkit/themes/genesis'
import { genesisIcons } from '@formkit/icons'
import { en, de } from '@formkit/i18n'
import { defaultConfig } from '@formkit/vue'

import { createInput } from '@formkit/vue'
import CustomInput from './components/CustomInput.vue';
import { pincode } from "./fields/pincode";

const myInput = createInput(CustomInput, {
  props: ['name']
})

export default defaultConfig({
  locales: { en, de },
  locale: 'en',
  icons: {
    ...genesisIcons
  },
  inputs: {
    myInput,
    pincode
  }
})