import React, {forwardRef} from 'react';
import cx from 'classnames';

import BaseText, {BaseTextProps} from '../BaseText';

import {theme} from '@eruditorgroup/profi-toolkit';

import type {ForwardingComponent} from '@eruditorgroup/profi-toolkit';

import styles from './Title.module.scss';

/**
 * @deprecated У компонента существует аналог из @mono-front/uikit-web. Стоит использовать его
 *
 * Типографика используется через классы вида .uikit-font-{имя шрифта}. Подробнее можно прочитать в документации
 * http://uikit-web-playground.x340.org/master/?path=/story/%D0%BF%D1%80%D0%B8%D0%BC%D0%B8%D1%82%D0%B8%D0%B2%D1%8B-%D1%86%D0%B2%D0%B5%D1%82%D0%B0--default
 */
export interface TitleProps extends Omit<BaseTextProps, 'as'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'l' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl'; // l, xl, xxl, ..., 5xl is available in <Title /> component
}

/**
 * @deprecated У компонента существует аналог из @mono-front/uikit-web. Стоит использовать его
 *
 * Типографика используется через классы вида .uikit-font-{имя шрифта}. Подробнее можно прочитать в документации
 * http://uikit-web-playground.x340.org/master/?path=/story/%D0%BF%D1%80%D0%B8%D0%BC%D0%B8%D1%82%D0%B8%D0%B2%D1%8B-%D1%86%D0%B2%D0%B5%D1%82%D0%B0--default
 */
const Title: ForwardingComponent<'h3', TitleProps> = forwardRef(function Title(
  {size = 'xxl', bold = true, level = 3, className, ...props},
  ref,
) {
  return (
    <BaseText
      as={`h${level}` as keyof JSX.IntrinsicElements}
      bold={bold}
      className={cx(
        theme.common[`size-${size}`] || styles[`size-${size}`],
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});

export default Title;
