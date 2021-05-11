# @eruditorgroup/profi-ui
## Добавление пакета
```
yarn add @eruditorgroup/profi-ui
```

## Компоненты в Figma
https://www.figma.com/file/0MmCyCZ4hdmcAokX6aZk6R/Profi-Front-Design-System?node-id=560%3A13695

## Процесс разработки
1. Добавляем новый компонент.
2. Пишем на него тесты `(TODO: понять какие тесты мы пишем)`.
3. Пишем для компонента `stories`.
4. Добавляем реэкспорт компонента и тайпингов в `index.ts`.

```javascript
export {default as Input} from './Input';
export type {InputProps} from './Input';
```