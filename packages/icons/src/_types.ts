import type {HTMLAttributes, RefAttributes} from 'react';
import {IColor} from '@eruditorgroup/profi-toolkit';

export interface IconPropsType
  extends HTMLAttributes<SVGSVGElement>,
    RefAttributes<SVGSVGElement> {
  color?: IColor | string;
}
