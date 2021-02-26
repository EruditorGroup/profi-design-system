import type {ButtonHTMLAttributes, RefAttributes} from 'react';

export interface IconPropsType
  extends ButtonHTMLAttributes<SVGSVGElement>,
    RefAttributes<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  color?: string;
}
