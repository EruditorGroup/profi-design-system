import TestRenderer from "react-test-renderer";

import ContentInner from "..";

const testRenderer = TestRenderer.create(
  <ContentInner>тестовые данные</ContentInner>
);

console.log(testRenderer.toJSON());
