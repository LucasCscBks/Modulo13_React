export default function InputEmail({type}:{type: string}) {
    return (
        <input name="email" type={type} placeholder="Email" required/>
    )
}