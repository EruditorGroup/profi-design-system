import React from 'react';
import {mount} from 'enzyme';
import Button from '.';

test('renders learn react link', () => {
  const component = mount(<Button>learn react</Button>);
  const text = component.find(/learn react/i);
  expect(text).not.toBeNull();
});
