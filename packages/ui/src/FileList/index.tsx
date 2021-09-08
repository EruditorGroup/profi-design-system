import React, {useCallback, useEffect, useRef, useState} from 'react';
import Dropzone, {DropzoneRef} from 'react-dropzone';
import cx from 'classnames';

import {Text, Button, Spinner, Space} from '../';
import {CloseIcon} from '@eruditorgroup/profi-icons';

import AddFilesLabel from './AddFilesLabel';
import StartUploadingFiles from './StartUploadingFiles';
import FilePreview from './FilePreview';

import styles from './FileList.module.css';

export type IDropzoneDesign = 'button' | 'minimal' | 'area';

export type DropzoneFile = {
  id: number | string;
  url?: string;
  size?: number;
  name?: string;
  rawFile?: File;
  type?: 'Image' | 'Document';
  fileId?: number;
};

export type FileListProps = {
  className?: string;
  maxFiles?: number;
  files?: DropzoneFile[];
  accept?: string[];
  onDrop?: (files: File[]) => void | Promise<void>;
  design?: IDropzoneDesign;
  disabled?: boolean;
  onDelete?: (file: DropzoneFile) => void;
  children?: React.ReactNode;
};

const FileList = ({
  maxFiles = Infinity,
  design,
  onDelete,
  onDrop,
  className,
  files = [],
  disabled = false,
  accept = ['image/png', 'image/jpg', 'image/jpeg'],
  children,
}: FileListProps): React.ReactElement => {
  const [isShowDropzone, setDropzoneShowed] = useState(false);
  const dropzoneRef = useRef<DropzoneRef | null>(null);

  const hasFiles = !!files.length;
  const canAddFiles = files.length < maxFiles && !disabled;

  const openDropzone = useCallback(() => dropzoneRef.current?.open(), [
    dropzoneRef,
  ]);

  const handleDrop = useCallback(
    (acceptedFiles: Array<File>) => {
      setDropzoneShowed(false);
      onDrop(acceptedFiles);
    },
    [onDrop],
  );

  useEffect(() => {
    const {body} = document;
    if (body) {
      const show = () => setDropzoneShowed(true);
      const hide = (e: DragEvent) => setDropzoneShowed(!!e.relatedTarget);
      body.addEventListener('dragenter', show);
      body.addEventListener('dragleave', hide);
      return () => {
        body.removeEventListener('dragenter', show);
        body.removeEventListener('dragleave', hide);
      };
    }
  }, []);

  return (
    <div className={className}>
      {!hasFiles && !disabled && (
        <StartUploadingFiles design={design} onClick={openDropzone}>
          {children}
        </StartUploadingFiles>
      )}
      <div className={styles['wrapper']}>
        {files.map((file) => (
          <div data-shmid="file-item" key={file.id} className={styles['col']}>
            <div className={styles['item']}>
              {onDelete && (
                <Button
                  rounded
                  design="secondary"
                  size="custom"
                  className={styles['remove-btn']}
                  onClick={() => onDelete(file)}
                >
                  <CloseIcon />
                </Button>
              )}
              <div
                className={styles['item-wrapper']}
                key={file.id || file.name}
              >
                <Space
                  align="center"
                  justify="center"
                  bg="light"
                  radius="s"
                  className={styles['spinner']}
                >
                  <Spinner size="xl" />
                </Space>
                {file.type === 'Document' ? (
                  <FilePreview fileName={file.name} />
                ) : (
                  <div
                    className={cx(styles['image'])}
                    style={{
                      backgroundImage: `url(${file.url || ''})`,
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
        {hasFiles && (
          <AddFilesLabel
            canAddFiles={canAddFiles}
            onClick={() => dropzoneRef.current?.open()}
          />
        )}
        {onDrop && (
          <Dropzone
            ref={dropzoneRef}
            onDrop={handleDrop}
            multiple={maxFiles > 1}
            accept={accept}
          >
            {({getRootProps, getInputProps}) => (
              <div
                className={cx(
                  styles['dropzone'],
                  !disabled &&
                    isShowDropzone &&
                    canAddFiles &&
                    styles['dropzone_active'],
                )}
                {...getRootProps()}
              >
                {isShowDropzone && (
                  <Text className={styles['holder']}>
                    Отпустите,
                    <br />
                    чтобы прикрепить фото
                  </Text>
                )}
                <input className={styles['input']} {...getInputProps()} />
              </div>
            )}
          </Dropzone>
        )}
      </div>
    </div>
  );
};

export default FileList;
