# Profi design system

## Документация

- [Readme @eruditorgroup/profi-icons](https://github.com/EruditorGroup/profi-design-system/blob/master/packages/icons/README.md)
- [Readme @eruditorgroup/profi-toolkit](https://github.com/EruditorGroup/profi-design-system/blob/master/packages/toolkit/README.md)
- [Readme @eruditorgroup/profi-ui](https://github.com/EruditorGroup/profi-design-system/blob/master/packages/ui/README.md)

## Правила разработки

1. Именование коммитов строго по https://www.conventionalcommits.org/. Необходимо для корректного бампа версий при публикации пакетов.
2. Если необходимы `flow` тайпинги - пишем их на стороне потребителя библиотеки.
3. Используем `css-modules` для написания стилей. Запрещены вложенные стили.

## Процесс разработки

1. Качаем монорепу `git clone git@github.com:EruditorGroup/profi-design-system.git`
2. Устанавливаем зависимости `yarn install`
3. В корне проекта запускаем сборку `yarn build`
4. Запускаем Storybook `yarn start`

## Процесс релиза

0. Обновляем скринштоные тесты, если они падают после изменений. (https://github.com/EruditorGroup/profi-design-system/actions/workflows/storyshots.yaml)
1. Мержим в `master` необходимые для релиза изменения.
2. Публикуем новый `release` либо `pre-release` с новой версией тега. (https://github.com/EruditorGroup/profi-design-system/releases)
3. После публикации релиза запускаются джобы для публикации `npm пакетов` и сборки `storybook`. (https://github.com/EruditorGroup/profi-design-system/actions)
4. Сборка упадет с `Bad credentials` (это известный факт, фиксить не будем до переезда в mono-front)
5. Создаем PR из ветки новой версии в master, собираем галку на PR и мерджим

## Conventional commits

- `fix`: исправление бага (соответствует PATCH)
- `feat`: добавление нового функционала/фичи/компонента (соответствует MINOR)
- `BREAKING CHANGE` либо `!`: нарушение обратной совместимости. (соответствует MAJOR). Могут быть добавлены в коммит либого типа.
- `build, chore, ci, docs, style, refactor, perf, test`: также можем использовать

### Примеры

Простой фикс:

`fix: Поправлен баг`

Фикс со `scope`:

`fix(Avatar): Поправлен баг с аватаркой`

Добавление нового компонента:

`feat(Grid): Добавлен компонент Сетка`

Внесение критичных изменений с обновлением мажорной версии пакета:

`refactor!: Убираем поддержку IE11`

## Миграция с UI WARP

### Component refactoring

**Loader**

- `size="large"` заменить на `size="extraLarge"`

**Иконки**

- Заменить на импорты из пакета `@eruditorgroup/profi-icons`

```javascript
import {ArrowLeftIcon} from '@eruditorgroup/profi-icons';
```

- По умолчанию теперь иконки используют `currentColor`.

## TODO:

1. Ссылка на storybook
