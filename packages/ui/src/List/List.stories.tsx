import {Meta, Story} from '@storybook/react';
import List, {ListProps} from './index';
import TableGuides, {
  TableGuidesProps,
} from '../../../../.storybook/TableGuides';
import React, {PropsWithChildren} from 'react';
import {
  ChevronRightIcon,
  DotIcon,
  HistoryIcon,
} from '@eruditorgroup/profi-icons';
import Text from '../Typography/Text';

const LIST_DESIGNS: NonNullable<ListProps['design']>[] = ['high', 'low'];
const LIST_SIZES: NonNullable<ListProps['size']>[] = ['l', 'm'];

const noop = () => {};

export default {
  title: 'List',
  component: List,
} as Meta;

type ListStoryMeta = Omit<TableGuidesProps<ListProps>, 'Component'> & {
  name: string;
};

const createMeta = (
  sizes: NonNullable<ListProps['size']>[],
  designs: NonNullable<ListProps['design']>[],
): ListStoryMeta => ({
  name: '',
  cols: sizes.map((size) => ({
    key: size,
    props: {size},
  })),
  rows: designs.map((design) => ({
    key: design,
    props: {design},
  })),
});

const TemplateFactory = (
  meta: ListStoryMeta,
): Story<PropsWithChildren<ListProps>> => (args) => {
  return (
    <TableGuides
      cols={meta.cols}
      rows={meta.rows}
      forceCollWidth="400px"
      Component={(props) => <List {...args} {...props} />}
    />
  );
};

export const ListStory = TemplateFactory(
  createMeta(LIST_SIZES, LIST_DESIGNS),
).bind({});
ListStory.storyName = 'List';
ListStory.args = {
  children: (
    <>
      <List.Item>Тестовый тест</List.Item>
      <List.Item>Тестовый тест</List.Item>
    </>
  ),
};

export const BorderedList = TemplateFactory(
  createMeta(LIST_SIZES, ['high']),
).bind({});
BorderedList.args = {
  bordered: true,
  children: (
    <>
      <List.Item>Тестовый тест</List.Item>
      <List.Item>Тестовый тест</List.Item>
      <List.Item>Тестовый тест</List.Item>
      <List.Item>Тестовый тест</List.Item>
    </>
  ),
};

export const BorderedModeList = TemplateFactory(
  createMeta(LIST_SIZES, ['high']),
).bind({});
BorderedModeList.args = {
  bordered: true,
  borderedMode: 'header-borderless',
  children: (
    <>
      <List.Item>
        <Text bold>Заголовок</Text>
      </List.Item>
      <List.Item>Тестовый тест</List.Item>
      <List.Item>Тестовый тест</List.Item>
      <List.Item>Тестовый тест</List.Item>
    </>
  ),
};

export const ListWithCaptionBelowAndLeading = TemplateFactory(
  createMeta(LIST_SIZES, ['high']),
).bind({});
ListWithCaptionBelowAndLeading.args = {
  bordered: true,
  children: (
    <>
      <List.Item leading={<HistoryIcon />}>
        <List.Item.MainText>Микрорайон Хлебниково</List.Item.MainText>
        <List.Item.Caption>Московская область, Россия</List.Item.Caption>
      </List.Item>
      <List.Item leading={<HistoryIcon />}>
        <List.Item.MainText>
          Микрорайон Хлебниково, Фестивальная улица
        </List.Item.MainText>
        <List.Item.Caption>Московская область, Россия</List.Item.Caption>
      </List.Item>
      <List.Item leading={<HistoryIcon />}>
        <List.Item.MainText>
          Микрорайон Хлебниково, Московская улица, 2А
        </List.Item.MainText>
        <List.Item.Caption>Московская область, Россия</List.Item.Caption>
      </List.Item>
      <List.Item leading={<HistoryIcon />}>
        <List.Item.MainText>Москва, Фрязевская улица, 9к4</List.Item.MainText>
        <List.Item.Caption>Россия</List.Item.Caption>
      </List.Item>
    </>
  ),
};

export const WithLeading = TemplateFactory(
  createMeta(LIST_SIZES, ['low']),
).bind({});
WithLeading.args = {
  children: (
    <>
      <List.Item leading={<DotIcon color="#BAD45E" />}>
        Кожуховская{' '}
        <Text as="span" size="l" color="muted">
          метро
        </Text>
      </List.Item>
      <List.Item leading={<DotIcon color="#83513A" />}>
        Комсомольская{' '}
        <Text as="span" size="l" color="muted">
          метро
        </Text>
      </List.Item>
      <List.Item leading={<DotIcon color="#E68845" />}>
        Коньково{' '}
        <Text as="span" size="l" color="muted">
          метро
        </Text>
      </List.Item>
      <List.Item leading={<DotIcon color="#854A98" />}>
        Косино{' '}
        <Text size="l" as="span" color="muted">
          метро
        </Text>
      </List.Item>
    </>
  ),
};

export const WithTrailing = TemplateFactory(
  createMeta(LIST_SIZES, ['high']),
).bind({});
WithTrailing.storyName = 'Item with trailing and being focusable';
WithTrailing.args = {
  bordered: true,
  children: (
    <>
      <List.Item trailing={<ChevronRightIcon />} onClick={noop}>
        <List.Item.Caption>Когда нужна услуга?</List.Item.Caption>
        <List.Item.MainText>28 ноября (сб) — 29 ноября (вс)</List.Item.MainText>
      </List.Item>
      <List.Item trailing={<ChevronRightIcon />} onClick={noop}>
        <List.Item.Caption>Ваш адрес</List.Item.Caption>
        <List.Item.MainText>
          Ул. Фрязевская, 9к3, кв. 25, Москва
        </List.Item.MainText>
      </List.Item>
      <List.Item trailing={<ChevronRightIcon />} onClick={noop} disabled>
        <List.Item.Caption>Остались пожелания к заказу?</List.Item.Caption>
        <List.Item.MainText>Не указано</List.Item.MainText>
      </List.Item>
      <List.Item trailing={<ChevronRightIcon />} disableHover>
        <List.Item.Caption>Остались пожелания к заказу?</List.Item.Caption>
        <List.Item.MainText>Не указано</List.Item.MainText>
      </List.Item>
    </>
  ),
};

export const ActiveDisabledItems = TemplateFactory(
  createMeta(['l'], ['high']),
).bind({});
ActiveDisabledItems.storyName = 'Active item background color';
ActiveDisabledItems.args = {
  bordered: true,
  boldItemMainText: true,
  children: (
    <>
      <List.Item onClick={noop} active>
        Заказ
      </List.Item>
      <List.Item onClick={noop}>Поддержка</List.Item>
      <List.Item onClick={noop} disabled>
        <List.Item.MainText bold={false}>Специалисты</List.Item.MainText>
      </List.Item>
    </>
  ),
};

export const ListSkeletonStory = TemplateFactory(
  createMeta(LIST_SIZES, LIST_DESIGNS),
).bind({});
ListSkeletonStory.storyName = 'Skeleton';
ListSkeletonStory.args = {
  skeleton: true,
  children: (
    <>
      <List.Item>Тестовый тест</List.Item>
      <List.Item>Тестовый тест</List.Item>
    </>
  ),
};
