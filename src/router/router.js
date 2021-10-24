import { loginTemplate,logIn } from '../componentes/login.js';


const content = document.getElementById('root');

export const router = (route) => {
  content.innerHTML = '';
  switch (route) {
    // case '#/login':
    // content.appendChild(inicio());
    // //   signUp();
    // //   signUpGoogle();
    //  break;
    // case '#/timeline':
    //   content.appendChild(timelinePage());
    //   signOutGoogle();
    //   postsTimeline();
    //   newCollectionPopersonajes
    //   break;
    default:
      content.appendChild(loginTemplate());
      logIn();
      // signUpGoogle();
      break;
  }
};
