// @flow
import type {ButtonHTMLAttributes, RefAttributes} from 'react';

export interface IconPropsType
  extends ButtonHTMLAttributes<SVGSVGElement>,
    RefAttributes<SVGSVGElement> {
  width?: string;
  height?: string;
  color?: string;
}
