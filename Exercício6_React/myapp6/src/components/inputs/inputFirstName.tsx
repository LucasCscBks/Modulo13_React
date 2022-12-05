import Input from '@mui/material/Input';

export default function InputFirstName({type}:{type: string}) {
    return (
        <Input name="first_name" type={type} placeholder="First Name" required/>
    )
}