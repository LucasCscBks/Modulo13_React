import styled from "styled-components";

const StyledModalDiv = styled.div`
    position: fixed;
    right: 40vw;
    bottom: 40vh;
    border: 2px solid #000;
    box-shadow: 0px 0px 2px 2px #000;
    background-color: rgba(0,0,255,0.5);
    z-index: 1;
`

function Modal(props: any) {

let formObject = document.querySelector("#forms");
formObject?.addEventListener('click', props.closeFunc);

    if(!props.opened) return <></>;    
        return (
            <StyledModalDiv id="modal">
                {/* {props} */}
                <h1>SUCCESS</h1>
                <p>Nome: {props.name}</p>
                <p>Email: {props.email}</p>
                <p>Password: {props.password}</p>
                <button type="button" onClick={props.closeFunc}>X</button>
            </StyledModalDiv>
        )
}

export default Modal