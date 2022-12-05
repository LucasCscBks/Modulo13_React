import Button from './buttons/button1';
import Button2 from './buttons/button2';
import React, { useState } from 'react';
import Modal from './modal';

function Forms(props: any) {
    
    let [modalOpened, setModalOpened] = useState(false);
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [classes, setClasses] = useState("");
    let [resultApi, setResultApi] = useState(null);

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        setModalOpened(true);
        setName(data["name"].toString());
        setEmail(data["email"].toString());
        setPassword(data["password"].toString());
        setClasses("opacity");
        
        const userData = {
            username: data["name"],
            password: data["password"],
            first_name: data["first_name"],
            last_name: data["last_name"],
            email: data["email"]
        };

        const api = await fetch("http://localhost:8000/users/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }).then((res) => res.json());

        console.log(api);

        if ("user" in api) {
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
        <>
            <Modal opened={modalOpened} closeFunc={closeFunc} name={name} email={email} password={password}/>
            <form id="forms" onSubmit={submitForm} className={classes}>
                {props.children}
                <Button type={props.typeb} name={props.nameb}/>
                <Button2 type={"button"} name={"Testar"} func={check}/>
            </form>
        </>
    )
};

export default Forms