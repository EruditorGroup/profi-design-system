import { SetStateAction, Dispatch } from 'react';
declare type RefType = {
    current: HTMLElement | null;
};
declare type VisibilityTogglerProps = {
    defaultState?: boolean;
    refs: Array<HTMLElement | RefType>;
};
export default function useVisibilityToggler({ defaultState, refs, }: VisibilityTogglerProps): [boolean, Dispatch<SetStateAction<boolean>>];
export {};
//# sourceMappingURL=useVisibilityToggler.d.ts.map