import { StyledButton } from "./button1"

export default function Button2(props: any) {
    return (
        <StyledButton id="button2" type={props.type} onClick={props.func}>{props.name}</StyledButton>
    )
}