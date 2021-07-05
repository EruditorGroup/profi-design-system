// yarn test src/client/ui/select/custom/__tests__/index.js
import * as React from 'react';
import CustomSelect from 'client/ui/select/custom';
import {shallow} from 'enzyme';
import {mockedComponent} from 'utilities/jest/mocks';

jest.unmock('client/ui/select/custom');
jest.unmock('client/ui/select/custom/components/option');
jest.unmock('client/ui/utils/useVisibilityToggler');

jest.mock('client/ui/renderToBodyDiv', () =>
  mockedComponent('RenderToBodyDiv'),
);
jest.mock('client/ui/relativeToElementPosition', () =>
  mockedComponent('RelativeToElementPosition'),
);

describe('CustomSelect', () => {
  let data;

  beforeEach(() => {
    data = {
      shmid: 'TEST-shmid',
      className: 'TEST-className',
      disabled: false,
      value: 'TEST-value',
      placeholder: 'TEST-placeholder',
      prefix: 'test-prefix',
      onChange: () => {},
      options: [
        {
          label: 'TEST-label-1',
          value: 'TEST-value-1',
          disabled: false,
        },
        {
          label: 'TEST-label-2',
          value: 'TEST-value-2',
          disabled: true,
        },
        {
          label: 'TEST-label-3',
          value: 'TEST-value-3',
          disabled: true,
        },
      ],
    };
  });

  it('render CustomSelect', () => {
    React.useState = jest.fn(() => [true, jest.fn()]);
    expect(
      shallow(
        <CustomSelect {...data} setIsOpen={jest.fn()} setValue={jest.fn()} />,
      ),
    ).toMatchSnapshot();
  });

  it('Открыли select list', () => {
    React.useState = jest.fn(() => [true, jest.fn()]);
    const component = shallow(
      <CustomSelect {...data} setIsOpen={jest.fn()} setValue={jest.fn()} />,
    );
    component.find('.ui-custom-select__input').simulate('click');
    expect(component).toMatchSnapshot();
  });

  it('Открыли select list и выбрали первое значение', () => {
    const onChange = jest.fn();
    const component = shallow(
      <CustomSelect {...data} setIsOpen={jest.fn()} onChange={onChange} />,
    );
    component.find('.ui-custom-select__input').simulate('click');
    component
      .find('.ui-custom-select__option')
      .first()
      .prop('onClick')('TEST-value-1');
    expect(onChange).toBeCalledWith('TEST-value-1');
  });

  it('Открыли select list и закрыли', () => {
    React.useState = jest.fn(() => [true, jest.fn()]);
    const component = shallow(
      <CustomSelect {...data} setIsOpen={jest.fn()} setValue={jest.fn()} />,
    );
    component.find('.ui-custom-select__input').simulate('click');
    component.find('.ui-custom-select__input').simulate('click');
    expect(component).toMatchSnapshot();
  });
});
