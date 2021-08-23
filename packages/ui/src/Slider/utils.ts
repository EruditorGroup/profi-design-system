export type ChildrenSize = {
  position: number;
  width: number;
  offsetLeft: number;
};

// Смещаем элементы так, чтобы новый слайд начинался с края карточки
export function calcShiftContainer(
  container: HTMLDivElement,
  childrenSizes: Array<ChildrenSize>,
): {shift: number; slideElements: number} {
  const {offsetWidth: containerWidth} = container;

  let shift = 0;
  let slideElements = 0;

  // Ищем сколько элементов помещается в контейнер
  for (let i = 0; i < childrenSizes.length; i++) {
    const {width: elWidth, offsetLeft} = childrenSizes[i];
    if (shift + elWidth <= containerWidth) {
      shift = shift + elWidth + offsetLeft;
    } else {
      slideElements = i;
      break;
    }
  }

  // Добавляем offset от неполного элемента (либо невидимого)
  if (childrenSizes[slideElements + 1]) {
    const {offsetLeft} = childrenSizes[slideElements + 1];
    shift = shift + offsetLeft;
  }

  return {shift, slideElements};
}

// Проверяем что скролл сейчас либо в начале, либо в конце
export function checkScrollOnBorder(container: HTMLDivElement): boolean {
  const {scrollLeft, scrollWidth, offsetWidth: containerWidth} = container;
  return scrollLeft === 0 || scrollWidth - scrollLeft === containerWidth;
}

// Высчитываем размеры children и расстояние между этими элементами
export function reduceChildrenSizes(
  container: HTMLDivElement,
): Array<ChildrenSize> {
  return Array.from(container.children).reduce((acc, el, index) => {
    const {x: position, width} = el.getBoundingClientRect();
    const prevElement = acc[index - 1];
    const offsetLeft = prevElement
      ? position - prevElement.width - prevElement.position
      : 0;

    acc.push({position, width, offsetLeft});
    return acc;
  }, []);
}
