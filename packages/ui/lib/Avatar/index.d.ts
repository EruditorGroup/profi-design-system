import React from 'react';
import { ISize } from 'uitype';
export interface AvatarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    design?: 'circle' | 'rect';
    size?: ISize;
    isOnline?: boolean;
    src?: string;
    username?: string;
}
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;
export default Avatar;
//# sourceMappingURL=index.d.ts.map