import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Forms from './components/forms';
import { InputName, InputPassword } from './components/inputs';
import { Button } from './components/button';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Forms>
      <label>Nome: </label>
      <InputName type="text"/>
      <label>Senha: </label>
      <InputPassword type="password"/>
      <Button />
    </Forms>
  </React.StrictMode>
);
