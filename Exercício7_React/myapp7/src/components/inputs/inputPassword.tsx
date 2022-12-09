import Input from '@mui/material/Input';

export default function InputPassword({type}:{type: string}) {
    return (
        <Input name="password" type={type} placeholder="Password" required/>
    )
}