import login from "./../fetch.js";
// import login from "../login.css"

export function loginTemplate() {
    const view = `
      <section id="screenLogIn">
        
          <header id="containerHeader">
            <img id="ImageHeader" src="../logo2.png">
            <img id="voz" src="../voz.png">
          </header>

          <main id="conteinerMain">
            <div class="containerLogIn">
              <form id="signIn">
                <input type="tel" id="signInPhone" placeholder="Número celular" class="input" required>
                <input type="password" id="signInpassword" placeholder="Contraseña" class="input" required>
                <p class="errorMessage" id="errorPassword"></p>
                <p class="message" id="message">Olvidé mi contraseña</p>
                <button type= "button" class="button" id="btnLogIn">Entrar</button><br>
              </form>

            <div class="containerCreateAccount">
                <span>¿Quieres usar la app de BBVA?</span>
                <a href="https://www.bbva.mx/personas/registro.html">¡Regístrate!</a>
            </div>
            </div>
          </main>
        
          <footer id="conteinerFooter">
            <img id="ImageFooter" src="../logo3.png">
          </footer>
      </section>    
        `;
  
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
  
    return divElement;
  }
  
  // Función Iniciar sesión
  export function logIn() {
    const btnLogIn = document.getElementById('btnLogIn');
    btnLogIn.addEventListener('click', () => {
      const phone = document.getElementById('signInPhone').value;
      const password = document.getElementById('signInpassword').value;
      const error = document.getElementById('errorPassword');
      console.log("diste click", phone, password)
  
      login(phone, password)
        .then((res) => {
            console.log('res',res)
            if(res.message === 'Login correcto'){
              //   window.location = '#/home';
              console.log('Estas logueado')
            }
            else{
               error.innerHTML=res.error;
            }
        })
        return true;
    });
  }
  