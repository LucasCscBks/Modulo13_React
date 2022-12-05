import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Forms from './components/forms';
import { InputEmail, InputName, InputPassword } from './components/inputs';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Forms typeb="submit" nameb="Inserir">
      <label>Email: </label>
      <InputEmail type="email"/>
      <label>Nome: </label>
      <InputName type="text"/>
      <label>Senha: </label>
      <InputPassword type="password"/>
    </Forms>
  </React.StrictMode>
);
