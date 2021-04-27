import React from 'react';
import {mount} from 'enzyme';
import Button from '.';

describe('Button', () => {
  it('should renders childrens', () => {
    const component = mount(
      <Button className="testbtn">
        <h1>heading</h1>
      </Button>,
    );
    const text = component.find('h1');
    expect(text).not.toBeNull();
  });

  it('should set type="button" by default', () => {
    const component = mount(<Button>some text</Button>);
    const btn = component.find('[type="button"]');
    expect(btn).not.toBeNull();
  });

  it('should render primary design by default', () => {
    const component = mount(<Button>some text</Button>);
    const btn = component.find('[type="button"]');
    expect(btn).not.toBeNull();
  });
});
