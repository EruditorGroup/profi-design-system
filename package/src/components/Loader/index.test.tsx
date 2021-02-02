import React from 'react';
import {mount} from 'enzyme';
import Loader from '.';

describe('Loader', () => {
  it('renders loader', () => {
    const component = mount(<Loader />);
    const div = component.find('[title="loader"]');
    expect(div).not.toBeNull();
  });
});
