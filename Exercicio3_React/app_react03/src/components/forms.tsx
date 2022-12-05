import { Button } from './button';
import React, { useState } from 'react';
import Modal from './modal';

function Forms(props: any) {
    
    let [modalOpened, setModalOpened] = useState(false);
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [classes, setClasses] = useState("");

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        setModalOpened(true);
        setName(data["name"].toString());
        setEmail(data["email"].toString());
        setPassword(data["password"].toString());
        setClasses("opacity")
        
        console.log(data);
        console.log(data["name"]);
    }

    async function closeFunc() {
        setClasses("");
        setModalOpened(false);
    }

    return (
        <>
        <Modal opened={modalOpened} closeFunc={closeFunc} name={name} email={email} password={password}/>
        <form id="forms" onSubmit={submitForm} className={classes}>
            {props.children}
            <Button type={props.typeb} name={props.nameb}/>
        </form>
        </>
    )
};

export default Forms