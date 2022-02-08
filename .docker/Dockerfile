FROM node:14.18-alpine
WORKDIR /app
RUN apk add --no-cache tzdata && ln -fs /usr/share/zoneinfo/Europe/Moscow /etc/localtime && apk del tzdata
RUN apk --no-cache update \
  && apk add --virtual .build-deps \
  gifsicle pngquant optipng libjpeg-turbo-utils \
  udev ttf-opensans chromium \
  && rm -rf /var/cache/apk/* /tmp/*
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ADD package.json yarn.lock ./
RUN apk add --update --no-cache make gcc g++ python2
ADD .storybook .storybook
ADD packages packages
ADD scripts scripts

ADD lerna.json babel.config.js .eslintrc.js .eslintignore .prettierrc processSass.js storyshots.config.js storyshots.test.ts tsconfig.json .config.js scripts/jest/setupTests.js ./
