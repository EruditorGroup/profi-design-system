import Link from '../Link';
import { ForwardingComponent } from 'uitype';
import { TextBaseProps } from './components/TextBase';
export interface TextProps extends Omit<TextBaseProps, 'size' | 'as' | 'fontWeight'> {
    as?: 'p' | 'span' | 'div' | typeof Link;
    size?: 'xs' | 's' | 'm' | 'l';
    bold?: boolean;
}
declare const Text: ForwardingComponent<'p', TextProps>;
export default Text;
//# sourceMappingURL=Text.d.ts.map