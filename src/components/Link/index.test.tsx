import React from 'react';
import {mount} from 'enzyme';
import Link from '.';

describe('Link', () => {
  it('renders learn react link', () => {
    const component = mount(
      <Link href="/123/456">
        <span>learn react</span>
      </Link>,
    );
    const text = component.find('span');
    expect(text).not.toBeNull();
  });
});
