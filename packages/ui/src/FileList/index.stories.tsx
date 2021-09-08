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
      <FileList design="area">
        <Button design="light" style={{marginTop: '30px'}}>
          Загрузите фотографии или документы
        </Button>
      </FileList>
      <h3>Button design</h3>
      <FileList design="button">
        <Text size="l">Добавить фото или файл</Text>
      </FileList>
      <h3>Minimal design</h3>
      <FileList design="minimal" />
    </div>
  );
};
export const Preview = Template.bind({});
