import { login } from '../componentes/login.js';
import { inicio, irALogin } from '../componentes/inicio.js';
import { homePage } from '../componentes/homepage.js';

const content = document.getElementById('root');

export const router = (route) => {
  content.innerHTML = '';
  switch (route) {
      case '#/homepage':
    content.appendChild(homePage());
    // //   signUp();
    // //   signUpGoogle();
     break;
     case '#/login':
      content.appendChild(login());
    //   postsTimeline();
    //   newCollectionPopersonajes
     break;
    default:
      content.appendChild(inicio());
        irALogin();
      // logIn();
      // signUpGoogle();
      break;
  }
};
