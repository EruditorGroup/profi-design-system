import * as React from 'react';
import canUseDom from '../utils/canUseDom';

/**
 * Данный хук позволяет безопасно вызывать `useLayoutEffect` на клиенте
 * с учетом возможности вызова этого хука на сервере.
 *
 * Сейчас React кидает предупреждение, когда пытаешься использовать useLayoutEffect на сервере.
 * Чтобы обойти это ограничение мы используем useEffect на сервере и useLayoutEffect в браузере.
 *
 * @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 */
const useSafeLayoutEffect = canUseDom()
  ? React.useLayoutEffect
  : React.useEffect;

export default useSafeLayoutEffect;