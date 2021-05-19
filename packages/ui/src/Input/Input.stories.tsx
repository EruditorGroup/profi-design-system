import React, {useRef} from 'react';
import {Story, Meta} from '@storybook/react';

import Input, {InputProps} from './index';
import {LocationIcon} from '@eruditorgroup/profi-icons';

export default {
  title: 'Form/Input',
  component: Input,
} as Meta;

type InputStoryMeta = {
  name: string;
  sizes: InputProps['size'][];
  biggerGuides?: boolean;
  rows: {
    label: string;
    props: Partial<InputProps>;
  }[];
};

const TextFieldStoryMeta: InputStoryMeta = {
  name: 'Text field',
  sizes: ['l', 'm', 's', 'xl'],
  rows: [
    {
      label: 'Normal',
      props: {},
    },
    {
      label: 'Disabled',
      props: {disabled: true},
    },
    {
      label: 'Empty',
      props: {defaultValue: ''},
    },
    {
      label: 'Error',
      props: {invalid: true},
    },
    {
      label: 'Error (empty)',
      props: {invalid: true, defaultValue: ''},
    },
  ],
};
const FloatingLabelStoryMeta: InputStoryMeta = {
  name: 'Floating Label Text field',
  sizes: ['l', 'm'],
  biggerGuides: true,
  rows: [
    {
      label: 'Normal',
      props: {defaultValue: 'Text Field'},
    },
    {
      label: 'Disabled',
      props: {disabled: true},
    },
    {
      label: 'Empty',
      props: {defaultValue: ''},
    },
    {
      label: 'Error',
      props: {defaultValue: 'Text Field', invalid: true},
    },
    {
      label: 'Error (empty)',
      props: {defaultValue: '', invalid: true},
    },
  ],
};

const templateFactory: (meta: InputStoryMeta) => Story<InputProps> = (
  meta,
) => ({defaultValue = 'Text', placeholder = 'Label', ...args}) => (
  <div>
    <StoryStyles />
    <table className="story-table">
      <thead>
        <tr>
          <th className="story-guide"></th>
          {meta.sizes.map((s) => (
            <th key={s} className={s === 'xl' ? 'size_xl' : undefined}>
              {s}
              <div className="story-size-guide"></div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {meta.rows.map((row, ri) => (
          <tr key={ri}>
            <td
              className={[
                'story-variant-guide',
                meta.biggerGuides && 'story-variant-guide_l',
              ].join(' ')}
            >
              {row.label && <div>{row.label}</div>}
            </td>
            {meta.sizes.map((s) => (
              <td key={s}>
                <Input
                  defaultValue={defaultValue}
                  placeholder={placeholder}
                  {...args}
                  {...row.props}
                  size={s}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const TextFieldStory = templateFactory(TextFieldStoryMeta).bind({});
TextFieldStory.storyName = TextFieldStoryMeta.name;

export const WithLabels = templateFactory(FloatingLabelStoryMeta).bind({});
WithLabels.storyName = FloatingLabelStoryMeta.name;
WithLabels.args = {withFloatLabel: true};

const PreviewTemplate: Story<InputProps> = ({
  placeholder = 'Label',
  ...args
}) => (
  <div className="preview">
    <StoryStyles />
    <Input
      {...args}
      className="preview-item"
      placeholder="Ваш адрес"
      trailing={<LocationIcon />}
    />
    <Input
      {...args}
      className="preview-item preview-item_short"
      mask="+7 999 999-99-99"
      placeholder="+7 961 903-00-59"
      leading={
        // Russian flag
        <div
          style={{
            height: '14px',
            width: '17px',
            borderRadius: '2px',
            background:
              'linear-gradient(-180deg, #fff 33.3%, #1653EF 33.3%, #1653EF 66.6%, #EE1B39 66.6%)',
          }}
        />
      }
    />
    <Input {...args} className="preview-item" placeholder="Оставьте отзыв..." />
    <Input
      {...args}
      className="preview-item"
      placeholder="Ваше имя и фамилия"
    />
    <Input
      {...args}
      className="preview-item"
      placeholder="Поле заблокировано"
      disabled
    />
    <Input {...args} className="preview-item" placeholder="Эл. почта" invalid />
  </div>
);
export const Preview = PreviewTemplate.bind({});

const StoryStyles = () => (
  <style>{`
  .story-table {
    width: 1px;
    table-layout: fixed;
    border-collapse: collapse;
  }
  .story-table th {
    box-sizing: border-box;

    width: 200px;
    padding: 0 20px;

    border: 0;
    
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    text-transform: uppercase;
  }
  .story-table th.story-guide {
    width: 110px;
  }
  .story-table th.size_xl {
    width: 240px;
  }
  .story-table td {
    padding: 15px 20px;
    border: 0;
    vertical-align: top;
  }

  .story-size-guide {
    box-sizing: border-box;

    position: relative;
    
    width: 100%;
    height: 9px;
    margin-top: 10px;

    border: 1px solid #C8C8C8;
    border-bottom: 0;
    border-radius: 2px;

    clip-path: polygon(0 -5px, 100% -5px, 100% 50%, 0 50%);
  }

  .story-size-guide::before {
    content: '';
    
    position: absolute;
    top: -5px;
    left: 50%;

    width: 1px;
    height: 5px;
    background: #C8C8C8;
    transform: translateX(-50%);
  }

  td.story-variant-guide {
    padding: 15px 0;
  }
  .story-variant-guide div {
    position: relative;
    
    display: flex;
    justify-content: flex-end;
    align-items: center;

    height: 50px;
    padding-right: 17px;

    font-size: 15px;
    line-height: 20px;
    text-align: right;

    overflow: hidden;
  }
  .story-variant-guide_l div {
    height: 60px;
  }
  .story-variant-guide div::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 4px;

    width: 5px;
    height: 1px;

    background: #C8C8C8;
  }
  .story-variant-guide div::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: -3px;

    width: 7px;

    border: 1px solid #C8C8C8;
    border-right: 0;
    border-radius: 2px;
    vertical-align: middle;
  }

  .preview {
    width: 320px;
  }
  .preview-item {
    margin-bottom: 30px;
  }
  .preview-item_short {
    width: 220px;
  }
`}</style>
);
