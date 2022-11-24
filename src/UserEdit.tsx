import * as React from 'react';
import {
    Edit,
    ImageField,
    ImageInput,
    SimpleForm,
} from 'react-admin';
import { ImageInput as ImageInputOld } from './StableInputs/ImageInput';

export const UserEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <ImageInput label="Avatars (current)" source="avatars1" multiple>
                    <ImageField source="url"/>
                </ImageInput>
                <ImageInputOld label="Avatars (old)" source="avatars2" multiple>
                    <ImageField source="url"/>
                </ImageInputOld>
            </SimpleForm>
        </Edit>
    );
};
