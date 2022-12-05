export default function InputPassword({type}:{type: string}) {
    return (
        <input name="password" type={type} placeholder="Password" required/>
    )
}