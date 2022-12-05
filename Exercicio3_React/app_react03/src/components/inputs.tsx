function InputEmail({type}:{type: string}) {
    return (
        <input name="email" type={type} placeholder="Email" required/>
    )
}

function InputName({type}:{type: string}) {
    return (
        <input name="name" type={type} placeholder="Name" required/>
    )
}

function InputPassword({type}:{type: string}) {
    return (
        <input name="password" type={type} placeholder="Password" required/>
    )
}

export {InputEmail, InputName, InputPassword}