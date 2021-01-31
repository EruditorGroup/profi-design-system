import React from 'react';
import {mount} from 'enzyme';
import Button from '.';

describe('Button', () => {
  it('renders childrens', () => {
    const component = mount(
      <Button className="testbtn">
        <h1>heading</h1>
      </Button>,
    );
    const text = component.find('h1');
    expect(text).not.toBeNull();
  });
});
