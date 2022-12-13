import { useState } from "react";
import "../Register.css";

export default function Register() {

    const [apiResult, setApiResult] = useState();
    const [result, setResult] = useState();

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        const userData = {
            email: data["email"],
            password: data["password"],
            username: data["username"],
            first_name: data["firstName"],
            last_name: data["lastName"]
        }

        const api = await fetch("http://localhost:8000/users", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        }).then((res) => res.json());
        console.log(api);

        setResult(api["message"])
        if ("user" in api) {
            setApiResult(api);
        }
    }

    return (
        <div>
            <h1>Cadastre um usuário</h1>
            <form onSubmit={submitForm}>
                <label>Nome de Usuario</label>
                <input name="username" type="text" placeholder="nome" required/>
                <label>Email</label>
                <input name="email" type="email" placeholder="nome" required/>
                <label>Password</label>
                <input name="password" type="password" placeholder="nome" required/>
                <label>Primeiro nome</label>
                <input name="firstName" type="text" placeholder="nome" required/>
                <label>Ultimo Nome</label>
                <input name="lastName" type="text" placeholder="nome" required/>
                <button type="submit"> Cadastrar </button>
            </form>
            <p>{result}</p>
        </div>
    )
}