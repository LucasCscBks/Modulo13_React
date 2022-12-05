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

function InputFirstName({type}:{type: string}) {
    return (
        <input name="first_name" type={type} placeholder="First Name" required/>
    )
}

function InputLastName({type}:{type: string}) {
    return (
        <input name="last_name" type={type} placeholder="Last Name" required/>
    )
}

function InputPassword({type}:{type: string}) {
    return (
        <input name="password" type={type} placeholder="Password" required/>
    )
}

export {InputEmail, InputName, InputFirstName, InputLastName, InputPassword}