import Input from '@mui/material/Input';

export default function InputName({type}:{type: string}) {
    return (
        <Input name="name" type={type} placeholder="Name" required/>
    )
}