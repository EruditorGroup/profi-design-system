import React from 'react';
import {Button, Text} from '@eruditorgroup/profi-ui';
import {Story, Meta} from '@storybook/react';

import FileList, {FileListProps} from './index';

export default {
  title: 'FileList',
} as Meta;

const Template: Story<FileListProps> = ({...args}) => {
  return (
    <div className="preview" style={{width: '500px'}}>
      <h3>Area design</h3>
      <FileList design="area" {...args}>
        <Button design="light" style={{marginTop: '30px'}}>
          Загрузите фотографии или документы
        </Button>
      </FileList>
      <h3>Button design</h3>
      <FileList design="button" {...args}>
        <Text size="l">Добавить фото или файл</Text>
      </FileList>
      <h3>Minimal design</h3>
      <FileList design="minimal" {...args} />
    </div>
  );
};
export const Without_files = Template.bind({});

export const With_files = Template.bind({});
With_files.args = {
  files: [
    {
      id: 1,
      url: 'https://place-hold.it/50',
      size: 50,
      name: 'placeholder.png',
      type: 'Image',
      fileId: 1,
    },
    {
      id: 1,
      url: 'https://place-hold.it/100',
      size: 100,
      name: 'placeholder2.png',
      type: 'Image',
      fileId: 1,
    },
    {
      id: 1,
      url: 'https://place-hold.it/100',
      size: 100,
      name: 'document.png',
      type: 'Document',
      fileId: 1,
    },
  ],
};
