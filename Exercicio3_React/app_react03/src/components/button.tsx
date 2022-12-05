function Button(props: any) {
    return (
        <button id="button" type={props.type}>{props.name}</button>
    )
}

export {Button}