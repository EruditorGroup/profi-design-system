import React, { CSSProperties } from 'react';
import type { ReactNode } from 'react';
import type { BareInputProps } from '../BareInput';
export declare type BareInputUnitProps = BareInputProps & {
    withFloatLabel?: boolean;
    unit: ReactNode;
    unitClassName?: string;
    unitStyle?: CSSProperties;
};
declare const BareInputUnit: React.FC<BareInputUnitProps>;
export default BareInputUnit;
//# sourceMappingURL=index.d.ts.map