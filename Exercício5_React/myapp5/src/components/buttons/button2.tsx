export default function Button2(props: any) {
    return (
        <button id="button2" type={props.type} onClick={props.func}>{props.name}</button>
    )
}