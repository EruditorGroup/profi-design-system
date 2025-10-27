import React, {forwardRef} from 'react';
import cx from 'classnames';
import {theme} from '@eruditorgroup/profi-toolkit';

import Link from '../../Link';
import BaseText, {BaseTextProps} from '../BaseText';

import type {ISize, ForwardingComponent} from '@eruditorgroup/profi-toolkit';

/**
 * @deprecated У компонента существует аналог из @mono-front/uikit-web. Стоит использовать его
 *
 * Типографика используется через классы вида .uikit-font-{имя шрифта}. Подробнее можно прочитать в документации
 * http://uikit-web-playground.x340.org/master/?path=/story/%D0%BF%D1%80%D0%B8%D0%BC%D0%B8%D1%82%D0%B8%D0%B2%D1%8B-%D1%86%D0%B2%D0%B5%D1%82%D0%B0--default
 */
export interface TextProps extends Omit<BaseTextProps, 'as'> {
  as?: 'p' | 'span' | 'div' | typeof Link;
  size?: ISize;
}

/**
 * @deprecated У компонента существует аналог из @mono-front/uikit-web. Стоит использовать его
 *
 * Типографика используется через классы вида .uikit-font-{имя шрифта}. Подробнее можно прочитать в документации
 * http://uikit-web-playground.x340.org/master/?path=/story/%D0%BF%D1%80%D0%B8%D0%BC%D0%B8%D1%82%D0%B8%D0%B2%D1%8B-%D1%86%D0%B2%D0%B5%D1%82%D0%B0--default
 */
const Text: ForwardingComponent<'p', TextProps> = forwardRef(function Text(
  {as: Component = 'p', size = 'm', className, ...props},
  ref,
) {
  return (
    <BaseText
      as={Component}
      className={cx(theme.common[`size-${size}`], className)}
      {...props}
      ref={ref}
    />
  );
});

export default Text;
