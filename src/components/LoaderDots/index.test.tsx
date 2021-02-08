import React from 'react';
import {mount} from 'enzyme';
import LoaderDots from '.';

describe('LoaderDots', () => {
  it('renders LoaderDots', () => {
    const component = mount(<LoaderDots />);
    const div = component.find('[title="loader"]');
    expect(div).not.toBeNull();
  });
});
