import { TextField } from '@material-ui/core'
import React, {useState} from 'react'
import useForm from '../../hooks/useForm'
import { AddRecipeFormContainer, InputsContainer } from './styled'

const AddImageForm = () => {
    const [form, onChange, clear] = useForm({ subtitle: "", file: "", tagsIds: "", collectionId: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        createImage(form, clear)
    }
    
    return (
        <form onSubmit={onSubmitForm}>
            <AddRecipeFormContainer>
                <InputsContainer>
                    <TextField
                        name={"subtitle"}
                        value={form.subtitle}
                        label={"Título"}
                        onChange={onChange}
                        margin={"normal"}
                        fullWidth
                        required
                        autoFocus
                    />
                    <TextField
                        name={"file"}
                        value={form.file}
                        label={"URL da Imagem"}
                        onChange={onChange}
                        margin={"normal"}
                        fullWidth
                        required
                        autoFocus
                    />
                    <TextField
                        name={"tagsId"}
                        value={form.tagsIds}
                        label={"Tags"}
                        onChange={onChange}
                        margin={"normal"}
                        fullWidth
                        required
                        autoFocus
                    />
                    <TextField
                        name={"tagsId"}
                        value={form.tagsIds}
                        label={"Tags"}
                        onChange={onChange}
                        margin={"normal"}
                        fullWidth
                        required
                        autoFocus
                    />
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        type={'submit'}
                        fullWidth
                    ></Button>                    
                </InputsContainer>
            </AddRecipeFormContainer>
        </form>
    )
}

