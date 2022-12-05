import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const user = {
  firstName: 'Lucas',
  middleName: 'Sousa',
  lastName: 'Reis',
  myBirthYear: 1991,
  year: new Date().getFullYear()
};

function formatName(user: any) {
  return `${user.firstName} ${user.middleName} ${user.lastName}`;
}
function myAge(user: any) {
  return user.year - user.myBirthYear
}

const element = (
  <h1>
  Olá, meu nome é {formatName(user)}, tenho {myAge(user)} anos e esse é meu primeiro contato com JSX!
  </h1>
);

root.render(
  element,
);