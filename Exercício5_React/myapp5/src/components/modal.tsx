function Modal(props: any) {

let formObject = document.querySelector("#forms");
formObject?.addEventListener('click', props.closeFunc);

    if(!props.opened) return <></>;    
        return (
            <div id="modal">
                {/* {props} */}
                <h1>SUCCESS</h1>
                <p>Nome: {props.name}</p>
                <p>Email: {props.email}</p>
                <p>Password: {props.password}</p>
                <button type="button" onClick={props.closeFunc}>X</button>
            </div>
        )
}

export default Modal