export default function InputFirstName({type}:{type: string}) {
    return (
        <input name="first_name" type={type} placeholder="First Name" required/>
    )
}