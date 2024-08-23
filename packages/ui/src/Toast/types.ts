export interface ToastOptions {
  /** Проп позволяет тосту не исчезать по таймауту */
  permanent?: boolean;

  /** Управление цветом фона тоста */
  design?: 'default' | 'danger';

  /** Длительность показа */
  duration?: number;
}

export interface ToastType extends ToastOptions {
  child: React.ReactNode;
  visible: boolean;
}
