import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Forms from './components/forms';
import { InputEmail, InputFirstName, InputLastName, InputName, InputPassword } from './components/inputs';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Forms typeb="submit" nameb="Inserir">
    <label>Email: </label>
    <InputEmail type="email"/>
    <label>Nome de usuário: </label>
    <InputName type="text"/>
    <label>Primeiro nome: </label>
    <InputFirstName type="text"/>
    <label>Último nome: </label>
    <InputLastName type="text"/>
    <label>Senha: </label>
    <InputPassword type="password"/>
  </Forms>
);
