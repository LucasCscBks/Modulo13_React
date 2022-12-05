import styled from "styled-components"

export const StyledButton = styled.button`
    width: 100px;
    margin-top: 10px;
`

export default function Button(props: any) {
    return (
        <StyledButton id="button" type={props.type}>{props.name}</StyledButton>
    )
}
