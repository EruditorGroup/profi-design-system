import React, {
  useLayoutEffect,
  useState,
  useCallback,
  forwardRef,
  useRef,
  createContext,
  useMemo,
} from 'react';
import cx from 'classnames';

import SliderArrow from './SliderArrow';
import SliderItem from './SliderItem';

import {useMouseWheel} from '@eruditorgroup/profi-toolkit';
import {
  checkScrollOnBorder,
  calcShiftContainer,
  reduceChildrenSizes,
} from './utils';

import type {ForwardRefExoticComponent, HTMLAttributes} from 'react';
import type {ChildrenSize} from './utils';

import styles from './Slider.module.scss';

type ISliderContext = {
  flex?: boolean;
  offset?: number;
};

export const SliderContext = createContext<ISliderContext | null>(null);

export interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  areaClassName?: string;
  centeredSlides?: boolean;
  scrollable?: boolean;
  arrowBackground?: string;
  flex?: boolean;
  offset?: number;
  children?: Array<React.ReactElement>;
}

interface SliderComponent extends ForwardRefExoticComponent<SliderProps> {
  Item: typeof SliderItem;
}

const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      children,
      scrollable = false,
      centeredSlides = true,
      arrowBackground,
      flex,
      areaClassName,
      className,
      offset = 10,
      ...props
    },
    ref,
  ) => {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const childrenSizes = useRef<Array<ChildrenSize>>([]);
    const context = useMemo(
      () => ({
        flex,
        offset,
      }),
      [flex, offset],
    );

    const slide = useCallback((offset: number) => {
      const {current: el} = containerRef;
      el.scrollTo({
        left: el.scrollLeft + offset,
        behavior: 'smooth',
      });
    }, []);

    const calcShift = useCallback(() => {
      const {current: container} = containerRef;
      const {offsetWidth: containerWidth} = container;
      const {current: sizes} = childrenSizes;

      const isBorder = checkScrollOnBorder(container);
      const {shift, slideElements} = calcShiftContainer(container, sizes);
      if (!centeredSlides || !isBorder) return shift;

      // Смещаем элементы так, чтобы по краям торчало по половине элемента
      const trimmedElementSize = sizes[slideElements];
      const trimmedElementWidth = containerWidth - shift;
      const centeredShift =
        shift - trimmedElementWidth / 2 - trimmedElementSize.offsetLeft / 2;

      return centeredShift;
    }, [centeredSlides]);

    const checkArrows = () => {
      const {current: el} = containerRef;

      if (el.scrollLeft > 0) {
        setShowLeftArrow(true);
      } else {
        setShowLeftArrow(false);
      }

      if (el.scrollWidth - el.scrollLeft <= el.offsetWidth) {
        setShowRightArrow(false);
      } else {
        setShowRightArrow(true);
      }
    };

    const onScroll = () => {
      checkArrows();
    };

    const onClickLeft = () => {
      const shift = calcShift();
      slide(-shift);
    };

    const onClickRight = () => {
      const shift = calcShift();
      slide(shift);
    };

    const onWheel = useCallback(
      (e: WheelEvent) => {
        if (!scrollable) return;

        e.preventDefault();
        const {current: el} = containerRef;
        const {deltaX, deltaY} = e;

        el.scrollLeft += Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
      },
      [scrollable],
    );

    useLayoutEffect(() => {
      if (!containerRef) return;
      const {current: container} = containerRef;

      childrenSizes.current = reduceChildrenSizes(container);
      checkArrows();
    }, [children]);

    useMouseWheel(containerRef, onWheel);

    return (
      <SliderContext.Provider value={context}>
        <div ref={ref} className={cx(styles['slider'], className)} {...props}>
          <SliderArrow
            direction="left"
            visible={showLeftArrow}
            onClick={onClickLeft}
            background={arrowBackground}
          />

          <div
            className={cx(
              styles['container'],
              flex && styles['container_flex'],
              areaClassName,
            )}
            ref={containerRef}
            onScroll={onScroll}
          >
            {React.Children.map(children, (child, index) =>
              React.cloneElement(child, {index}),
            )}
          </div>

          <SliderArrow
            direction="right"
            visible={showRightArrow}
            onClick={onClickRight}
            background={arrowBackground}
          />
        </div>
      </SliderContext.Provider>
    );
  },
) as SliderComponent;

Slider.Item = SliderItem;
Slider.displayName = 'Slider';
export default Slider;
