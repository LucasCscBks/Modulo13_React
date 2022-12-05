export default function InputName({type}:{type: string}) {
    return (
        <input name="name" type={type} placeholder="Name" required/>
    )
}