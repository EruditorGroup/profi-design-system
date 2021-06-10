# @eruditorgroup/profi-icons
## Добавление пакета
```
yarn add @eruditorgroup/profi-icons
```

## Процесс разработки
1. При добавлении новой иконки по умолчанию устанавливаем `fill="currentColor"` и `forwardRef`.
2. Добавляем реэкспорт в `index.ts`.
```javascript
export {default as AppleIcon} from './Apple';
```
