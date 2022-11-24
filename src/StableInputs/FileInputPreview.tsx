import * as React from 'react';
import { ReactNode, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';
import { useTranslate } from 'ra-core';

const PREFIX = 'RaFileInputPreview';

const FileInputPreviewClasses = {
  removeButton: `${PREFIX}-removeButton`,
  removeIcon: `${PREFIX}-removeIcon`,
};

export interface FileInputPreviewProps {
  children: ReactNode;
  className?: string;
  onRemove: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  file: any;
}

const Root = styled('div', {
  name: PREFIX,
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  [`& .${FileInputPreviewClasses.removeButton}`]: {},

  [`& .${FileInputPreviewClasses.removeIcon}`]: {
    color: theme.palette.error.main,
  },
}));

export const FileInputPreview = (props: FileInputPreviewProps) => {
    const { children, className, onRemove, file, ...rest } = props;

    const translate = useTranslate();

    useEffect(() => {
        return () => {
            const preview = file.rawFile ? file.rawFile.preview : file.preview;

            if (preview) {
                window.URL.revokeObjectURL(preview);
            }
        };
    }, [file]);

    return (
        <Root className={className} {...rest}>
            <IconButton
              className={FileInputPreviewClasses.removeButton}
              onClick={onRemove}
              aria-label={translate('ra.action.delete')}
              title={translate('ra.action.delete')}
              size="large"
            >
                <RemoveCircle className={FileInputPreviewClasses.removeIcon} />
            </IconButton>
            {children}
        </Root>
    );
};

FileInputPreview.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  file: PropTypes.object,
  onRemove: PropTypes.func.isRequired,
};

FileInputPreview.defaultProps = {
  file: undefined,
};
