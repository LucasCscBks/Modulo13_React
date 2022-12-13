import "../Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [apiResult, setApiResult] = useState();
    const [result, setResult] = useState();
    let navigate = useNavigate();

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        const userData = {
            email: data["email"],
            password: data["password"],
        }

        const api = await fetch("http://localhost:8000/login", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        }).then((res) => res.json());
        console.log(api);

        // setResult(api["message"])
        if ("token" in api) {
            setApiResult(api);
            navigate("/update")
        } else {
            setResult(api["message"])
        }
    }

    return (
        <div>
            <h1>Faça Login</h1>
            <form onSubmit={submitForm}>
                <label>Email</label>
                <input name="email" type="email" placeholder="nome" required/>
                <label>Password</label>
                <input name="password" type="password" placeholder="nome" required/>
                <button type="submit"> Logar </button>
            </form>
            <p>{result}</p>
        </div>
    )
}