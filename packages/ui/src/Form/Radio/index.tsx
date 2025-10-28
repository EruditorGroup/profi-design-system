import React, {forwardRef} from 'react';
import Checkbox from '../Checkbox';

import type {CheckboxProps} from '../Checkbox';

/**
 * @deprecated У компонента существует аналог из @mono-front/uikit-web. Стоит использовать его
 *
 * `import {Checkbox, ToggleLabel} from '@mono-front/uikit-web';`
 */
export interface RadioProps extends CheckboxProps {
  name: string;
}

/**
 * @deprecated У компонента существует аналог из @mono-front/uikit-web. Стоит использовать его
 *
 * `import {Checkbox, ToggleLabel} from '@mono-front/uikit-web';`
 */
const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  props,
  ref,
) {
  return <Checkbox {...props} type="radio" ref={ref} />;
});

export default Radio;
