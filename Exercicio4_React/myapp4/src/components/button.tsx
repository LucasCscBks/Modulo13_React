function Button(props: any) {
    return (
        <button id="button" type={props.type}>{props.name}</button>
    )
}
function Button2(props: any) {
    return (
        <button id="button2" type={props.type} onClick={props.func}>{props.name}</button>
    )
}

export {Button, Button2}