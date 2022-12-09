import ReactDOM from 'react-dom/client';
import './index.css';
import Forms from './components/forms';
import InputEmail from './components/inputs/inputEmail';
import InputPassword from './components/inputs/inputPassword';
import { StyledLabel } from './components/styledComponents/styledComponents';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Forms typeb="submit" nameb="Logar">
    <StyledLabel>Email: </StyledLabel>
    <InputEmail type="email"/>
    <StyledLabel>Senha: </StyledLabel>
    <InputPassword type="password"/>
  </Forms>
);