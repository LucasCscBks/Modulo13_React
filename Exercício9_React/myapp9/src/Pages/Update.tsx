import { useState } from "react";
import "../Register.css";

export default function Update() {
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

        const api = await fetch("http://localhost:8000/users/a74d1c8f-db69-432b-8b21-286073a90a64", 
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhNzRkMWM4Zi1kYjY5LTQzMmItOGIyMS0yODYwNzNhOTBhNjQiLCJ1c2VyRW1haWwiOiJsdWNhc2FAZ21haWwuY29tIiwidXNlckFkbWluIjoiZnVuY2lvbmFyaW8iLCJ1c2VyRmlyc3ROYW1lIjoibHVjYXMiLCJ1c2VyTGFzdE5hbWUiOiJyZWlzIiwic3F1YWROYW1lIjoiU2VtIGVxdWlwZSIsInNxdWFkSWQiOm51bGwsImlhdCI6MTY3MDk2MzY1OSwiZXhwIjoxNjcwOTczNjU4fQ.YzR0NgetMeMCNcg4KiBcA_d_XJ-rHFlKfNA2V3GEVlA"
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
            <h1>Você logou com Sucesso!!</h1>
            <h1>Atualize seu cadastro abaixo</h1>
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
                <button type="submit"> Atualizar </button>
            </form>
            <p>{result}</p>
        </div>
    )
}