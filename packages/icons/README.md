# @eruditorgroup/profi-icons
## Добавление пакета
```
yarn add @eruditorgroup/profi-icons
```

## Иконки в Figma
 https://www.figma.com/file/0MmCyCZ4hdmcAokX6aZk6R/Profi-Front-Design-System?node-id=970%3A4777

## Процесс разработки
1. При добавлении новой иконки по умолчанию устанавливаем `fill="currentColor"` и `forwardRef`.
2. Добавляем реэкспорт в `index.ts`.
```javascript
export {default as AppleIcon} from './Apple';
```