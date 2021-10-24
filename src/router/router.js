import { loginTemplate,logIn } from '../componentes/login.js';
import { homePage } from '../componentes/homepage.js';
import { inicio, irALogin } from '../componentes/inicio.js';


const content = document.getElementById('root');

export const router = (route) => {
  content.innerHTML = '';
  switch (route) {
    case '#/homepage':
      content.appendChild(homePage());
      break;
    case '#/login':
      content.appendChild(loginTemplate());
      logIn();
 
      break;
    default:
      content.appendChild(inicio());
      irALogin();
      break;
  }
};


