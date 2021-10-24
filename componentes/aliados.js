export function aliado() {
    const cat = `   

    <style>
    .viewCatalogo{
         width: 23.5vw;
         height:160vh;
         background-color:white;
         flex-direction:column;

    }
    .fondo_catalogo{
        width: 23.5vw;
        height:57vh;
        background-image: url("assests/fnd1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display:flex;
        padding-top:27vh;
    }
    .categorias{
        width: 20vw;
        height:25vh;
        margin: 0 0 0 1.8vw;
        display:grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1.3vh;
    }
    .traslados1{
        height: 8.5vh;
        width: 4.5vw;
        margin-top:2vh;
        background-image: url("assests/resta.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .traslados1:hover{
        background-color: #dadada51;
        border-radius: 80px;
        height: 8.5vh;
    }
    .traslados2{
        height: 8.5vh;
        width: 4.5vw;
        margin-top:2vh;
        background-image: url("assests/deporte.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .traslados2:hover{
        background-color: #dadada51;
        border-radius: 80px;
        height: 8.5vh;
    }
    .traslados3{
        height: 8.5vh;
        width: 4.5vw;
        margin-top:2vh;
        background-image: url("assests/belleza.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .traslados3:hover{
        background-color: #dadada51;
        border-radius: 80px;
        height: 8.5vh;
    }
    .traslados4{
        height: 8.5vh;
        width: 4.5vw;
        margin-top:2vh;
        background-image: url("assests/boleta.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .traslados4:hover{
        background-color: #dadada51;
        border-radius: 80px;
        height: 8.5vh;
    }
    .traslados5{
        height: 8.5vh;
        width: 4.5vw;
        margin-top:2vh;
        background-image: url("assests/farmacia.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;

    }
    .traslados5:hover{
        background-color: #dadada51;
        border-radius: 80px;
        height: 8.5vh;
    }
    .traslados6{
        height: 8.5vh;
        width: 4.5vw;
        margin-top:2vh;
        background-image: url("assests/viaje.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .traslados6:hover{
        background-color: #dadada51;
        border-radius: 80px;
        height: 8.5vh;
    }
    .traslados7{
        height: 8.5vh;
        width: 4.5vw;
        margin-top:2vh;
        background-image: url("assests/carro.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .traslados7:hover{
        background-color: #dadada51;
        border-radius: 80px;
        height: 8.5vh;
    }
    .traslados8{
        height: 8.5vh;
        width: 4.5vw;
        margin-bottom: 1vh;
        margin-top:2vh;
        background-image: url("assests/viveres.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .traslados8:hover{
        background-color: #dadada51;
        border-radius: 80px;
        height: 8.5vh;
    }
    .fondo2{
        width: 23.5vw;
        height:60vh;
        background-image: url("assests/cap2.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .fondo3{
        width: 23.5vw;
        height:30vh;
        background-image: url("assests/cosmetics.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .fondo4{
        margin-top:2vh;
        width: 23.5vw;
        height:37vh;
        background-image: url("assests/fn3.png");
        background-repeat: no-repeat;
        background-size: 101% 101%;
    }
    #message{
        width: 23.5vw;
        height:30vh;
        color:#FFFFFF;
        padding:2.5em 1.5em;
        font-size:1.5em;
        background:#3737374a;
        font-weight: 800;
        text-align:center;
    }


    </style>

    <div class="fondo_catalogo">
        <div class="categorias">
          <a href="#/confirmacion" class="traslados1"></a>
          <a href="#/confirmacion" class="traslados2"></a>
          <a href="#/confirmacion" class="traslados3"></a>
          <a href="#/confirmacion" class="traslados4"></a>
          <a href="#/confirmacion" class="traslados5"></a>
          <a href="#/confirmacion" class="traslados6"></a>
          <a href="#/confirmacion" class="traslados7"></a>
          <a href="#/confirmacion" class="traslados8"></a>
        </div>
    </div>
    <div class="fondo2">

    </div>
    <div class="fondo3">
        <p id="message" >Desde ahora </br> Todo lo que necesitas en un solo lugar</p>
    </div>
    <div class="fondo4">
    
    </div>
    
   `;

    const containerCatalogo = document.createElement('div');
    containerCatalogo.innerHTML = cat;
    containerCatalogo.className = ("viewCatalogo");
    return containerCatalogo;
}

