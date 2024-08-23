export interface ToastOptions {
  /** Проп позволяет тосту не исчезать по таймауту */
  permanent?: boolean;

  /** Управление цветом фона тоста */
  design?: 'default' | 'danger';

  /** Длительность показа */
  duration?: number;

  /** Иконка закрытия тоста */
  withCloseIcon?: boolean;
}

export interface ToastType extends ToastOptions {
  child: React.ReactNode;
  visible: boolean;
}
