FROM node:14.15.0-alpine AS service-template-build
WORKDIR /app
RUN apk add --no-cache tzdata && ln -fs /usr/share/zoneinfo/Europe/Moscow /etc/localtime && apk del tzdata
RUN apk --no-cache  update \
  && apk add --no-cache --virtual .build-deps \
  gifsicle pngquant optipng libjpeg-turbo-utils \
  udev ttf-opensans chromium \
  && rm -rf /var/cache/apk/* /tmp/*
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ADD package.json yarn.lock babel.config.js .eslintrc.js .eslintignore .prettierrc .npmrc processSass.js storyshots.config.js storyshots.test.ts tsconfig.json .config.js ./
ADD .storybook .storybook
ADD scripts scripts
ADD __image_snapshots__ __image_snapshots__
ADD src src
RUN yarn install --frozen-lockfile --ignore-engines && yarn cache clean && yarn build

