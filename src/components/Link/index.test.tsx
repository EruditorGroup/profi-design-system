import React from 'react';
import {mount} from 'enzyme';
import Link from '.';

test('renders learn react link', () => {
  const component = mount(
    <Link href="test/path" title="mockedTitle">
      learn react
    </Link>,
  );
  const text = component.find('[title="mockedTitle"]');
  expect(text).not.toBeNull();
});
