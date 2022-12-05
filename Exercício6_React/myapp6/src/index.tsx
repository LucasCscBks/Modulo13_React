import ReactDOM from 'react-dom/client';
import './index.css';
import Forms from './components/forms';
import InputEmail from './components/inputs/inputEmail';
import InputName from './components/inputs/inputName';
import InputFirstName from './components/inputs/inputFirstName';
import InputLastName from './components/inputs/inputLastName';
import InputPassword from './components/inputs/inputPassword';
import { StyledLabel } from './components/styledComponents/styledComponents';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Forms typeb="submit" nameb="Inserir">
    <StyledLabel>Email: </StyledLabel>
    <InputEmail type="email"/>
    <StyledLabel>Nome de usuário: </StyledLabel>
    <InputName type="text"/>
    <StyledLabel>Primeiro nome: </StyledLabel>
    <InputFirstName type="text"/>
    <StyledLabel>Último nome: </StyledLabel>
    <InputLastName type="text"/>
    <StyledLabel>Senha: </StyledLabel>
    <InputPassword type="password"/>
  </Forms>
);