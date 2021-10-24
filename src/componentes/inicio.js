export function inicio() {
    const form = `   
    <div class="containerInicio">
    <img src="./assests/2.jpg" alt="">
    <button id="buttonInicio">Entrar</button>
    </div>
   `;

    const divInicio = document.createElement('div');
    divInicio.innerHTML = form;
    return divInicio;
}

export function irALogin() {
    document.getElementById("buttonInicio").addEventListener("click", () => {
    window.location = '#/login';
})}
