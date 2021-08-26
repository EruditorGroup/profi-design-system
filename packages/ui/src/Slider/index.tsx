import React, {
  useLayoutEffect,
  useState,
  useCallback,
  forwardRef,
  useRef,
} from 'react';

import SliderArrow from './SliderArrow';

import {useMouseWheel} from '@eruditorgroup/profi-toolkit';
import {
  checkScrollOnBorder,
  calcShiftContainer,
  reduceChildrenSizes,
} from './utils';

import type {HTMLAttributes} from 'react';
import type {ChildrenSize} from './utils';

import styles from './Slider.module.scss';

export interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  centeredSlides?: boolean;
  moveMouseWheel?: boolean;
  arrowBackground?: string;
}

const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      children,
      moveMouseWheel = true,
      centeredSlides = true,
      arrowBackground,
      ...props
    },
    ref,
  ) => {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const childrenSizes = useRef<Array<ChildrenSize>>([]);

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
        if (!moveMouseWheel) return;

        e.preventDefault();
        const {current: el} = containerRef;
        const {deltaX, deltaY} = e;

        el.scrollLeft += Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
      },
      [moveMouseWheel],
    );

    useLayoutEffect(() => {
      if (!containerRef) return;
      const {current: container} = containerRef;

      childrenSizes.current = reduceChildrenSizes(container);
      checkArrows();
    }, [children]);

    useMouseWheel(containerRef, onWheel);

    return (
      <div ref={ref} className={styles['slider']} {...props}>
        <SliderArrow
          direction="left"
          visible={showLeftArrow}
          onClick={onClickLeft}
          background={arrowBackground}
        />

        <div
          className={styles['container']}
          ref={containerRef}
          onScroll={onScroll}
        >
          {children}
        </div>

        <SliderArrow
          direction="right"
          visible={showRightArrow}
          onClick={onClickRight}
          background={arrowBackground}
        />
      </div>
    );
  },
);

Slider.displayName = 'Slider';
export default Slider;
