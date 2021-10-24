export function inicio() {
    const form = `   

    <style>
    .imagen_h{
       height: 93.64vh; 
       z-index:1;
    }
    #buttonInicio{
        position: absolute;
        bottom: 16.45vh;
        width: 10vw;
        height: 3.1em;
        background: #1873b9;
        border: none;
        color: white;
        font-weight: bold;
        font-size: 1.1em;
        z-index:2;
        font-family: url("./assests/Dubai-Regular.ttf");
    }
    
    #buttonInicio:hover{
        cursor: pointer;
    }

    </style>

    
    <img class="imagen_h" src="./assests/2.jpg" alt="">
    <button id="buttonInicio">Entrar</button>
    
   `;

    const containerInicio = document.createElement('div');
    containerInicio.innerHTML = form;
    containerInicio.className = ("containerInicio");
    return containerInicio;
}

export function irALogin() {
    document.getElementById("buttonInicio").addEventListener("click", () => {
    window.location = '#/login';
})}
