import Input from '@mui/material/Input';

export default function InputEmail({type}:{type: string}) {
    return (
        <Input name="email" type={type} placeholder="Email" required/>
    )
}