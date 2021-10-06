export type TWithoutAddons<
  T extends {leading?: React.ReactNode; trailing?: React.ReactNode}
> = Omit<T, 'leading' | 'trailing'>;
export type TIconPosition = 'leading' | 'trailing' | 'none';
