# @eruditorgroup/profi-ui

## Добавление пакета

```
yarn add @eruditorgroup/profi-ui
```

## Процесс разработки

1. Добавляем новый компонент.
2. Пишем на него тесты `(TODO: понять какие тесты мы пишем)`.
3. Пишем для компонента `stories`.
4. Добавляем реэкспорт компонента и тайпингов в `index.ts`.

```javascript
export {default as Input} from './Input';
export type {InputProps} from './Input';
```
