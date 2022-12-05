export default function InputLastName({type}:{type: string}) {
    return (
        <input name="last_name" type={type} placeholder="Last Name" required/>
    )
}