import { type FormKitTypeDefinition } from '@formkit/core';
import { $for, help, inner, label, message, messages, outer, textInput, wrapper } from '@formkit/inputs';

export const pincode: FormKitTypeDefinition = {
  type: 'input',
  props: ['digits'],
  schema: outer(
    wrapper(
      label('$label'),
      $for('item', '$digits', inner(
        textInput()
      )),
      help('$help'),
      messages(message('$message.value'))
    )
  )
}