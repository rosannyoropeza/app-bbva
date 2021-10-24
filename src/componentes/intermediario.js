export function mediador() {
    const catalog = `   

    <style>
    .viewConfirmacion{
         width: 23.5vw;
         height:125vh;
         display:flex;
         background-color:green;
         flex-direction:column;

    }
    .fondo_catalogo{
        width: 23.5vw;
        height:59vh;
        background-image: url("assests/fnd1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display:flex;
        padding-top:10vh;
    }
    .categorias{
        width: 20vw;
        height:25vh;
        margin: 0 0 0 1.8vw;
        display:grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1.3vh;
    }
    
    .fondo2{
        width: 23.5vw;
        height:60vh;
        background:white;
    }

    .fondo4{
        margin-top:2vh;
        width: 23.5vw;
        height:10vh;
        background-image: url("assests/pie.png");
        background-repeat: no-repeat;
        background-size: 102% 101%;
    }
    #title2{
        margin-left:4vw;
        height:30vh;
        top:5vh;
        color:white;
        font-size:2em;
        background:#0073bd;

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


    </div>
    <div class="fondo2">

    </div>

    <div class="fondo4">
    
    </div>
    
   `;

    const containerComfir = document.createElement('div');
    containerComfir.innerHTML = catalog;
    containerComfir.className = ("viewConfirmacion");
    return containerComfir;
}
