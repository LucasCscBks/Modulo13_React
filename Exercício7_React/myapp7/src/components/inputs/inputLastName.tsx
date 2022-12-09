import Input from '@mui/material/Input';

export default function InputLastName({type}:{type: string}) {
    return (
        <Input color='secondary' name="last_name" type={type} placeholder="Last Name" required/>
    )
}