// @flow

export interface IconPropsType
  extends React.ButtonHTMLAttributes<SVGSVGElement>,
    React.RefAttributes<SVGSVGElement> {
  width?: string;
  height?: string;
  color?: string;
}
