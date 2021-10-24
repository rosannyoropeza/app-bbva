import { loginTemplate,logIn, goToAsistance} from '../componentes/login.js';
import { homePage } from '../componentes/homepage.js';
import { inicio, irALogin } from '../componentes/inicio.js';
import { asistantVoice, openAsistance} from '../componentes/asistantVoiceGuiade.js';
import { aliado } from '../componentes/aliados.js';
import {mediador } from '../componentes/intermediario.js';

const content = document.getElementById('root');

export const router = (route) => {
  content.innerHTML = '';
  switch (route) {
    case '#/confirmacion':
      content.appendChild(mediador());
      break;
    case '#/aliados':
      content.appendChild(aliado());
      break;
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


