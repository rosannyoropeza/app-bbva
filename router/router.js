import { loginTemplate,logIn, goToAsistance} from '../componentes/login.js';
import { homePage } from '../componentes/homepage.js';
import { inicio, irALogin } from '../componentes/inicio.js';
import { asistantVoice, openAsistance} from '../componentes/asistantVoiceGuiade.js';


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
      goToAsistance();
      break;
    case '#/asistancevoice':
        content.appendChild(asistantVoice());
        openAsistance();
        break;
    default:
      content.appendChild(inicio());
      irALogin();
      break;
  }
};


