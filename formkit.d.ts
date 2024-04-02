import { type FormKitInputs } from "@formkit/inputs"

declare module '@formkit/inputs' {
  interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    'my-input': {
      type: 'my-input',
      fantasy: boolean
      mySize: 'small' | 'large'
      value?: string | number
    }
  }
}