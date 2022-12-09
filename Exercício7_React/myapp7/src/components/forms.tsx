import Button from './buttons/button1';
import Button2 from './buttons/button2';
import React, { useState, createContext } from 'react';
import Modal from './modal';
import styled from 'styled-components';

const StyledForm = styled.form`
    width: 100vw;
    height: 110vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const AppContext = createContext(undefined as any);

function Forms(props: any) {
    
    let [modalOpened, setModalOpened] = useState(false);
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [classes, setClasses] = useState("");
    let [resultApi, setResultApi] = useState(null);

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        setModalOpened(true);
        setEmail(data["email"].toString());
        setPassword(data["password"].toString());
        setClasses("opacity");
        
        const userData = {
            password: data["password"],
            email: data["email"]
        };

        const api = await fetch("http://localhost:8000/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }).then((res) => res.json());
        console.log(userData)
        console.log(api);
        
        if ("token" in api) {
            setResultApi(api);
        }
    }

    async function closeFunc() {
        setClasses("");
        setModalOpened(false);
    }

    async function check() {
        console.log(resultApi)
    }
    
    return (
        <AppContext.Provider value={{resultApi}}>
            <Modal opened={modalOpened} closeFunc={closeFunc} email={email} password={password}/>
            <StyledForm id="forms" onSubmit={submitForm} className={classes}>
                {props.children}
                <Button type={props.typeb} name={props.nameb}/>
                <Button2 type={"button"} name={"Testar"} func={check}/>
            </StyledForm>
        </AppContext.Provider>
    )
};

export default Forms