import { ForwardingComponent, IColor, ISize } from 'uitype';
export interface TextBaseProps {
    as: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    size?: ISize;
    color?: IColor | 'muted';
    bold?: boolean;
}
declare const TextBase: ForwardingComponent<'p', TextBaseProps>;
export default TextBase;
//# sourceMappingURL=TextBase.d.ts.map