import type {HTMLAttributes, RefAttributes} from 'react';

export interface IconPropsType
  extends HTMLAttributes<SVGSVGElement>,
    RefAttributes<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  color?: string;
}
