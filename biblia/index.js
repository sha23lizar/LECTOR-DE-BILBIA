// nota: si no se injecta el html entonces no renderiza bien
var div = document.createElement("div")
div.innerHTML += `
<div id="Lector-biblico">
<div id="content-biblia" class="" style="top: 117px; left: 11px;">
  <header id="nav-biblia">
    <div class="extender" id="mover"></div>
    <div id="logo">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
        x="0px" y="0px" viewBox="0 0 15.438 15.438" style="enable-background:new 0 0 15.438 15.438;"
        xml:space="preserve">
        <path style="fill:#fff;"
          d="M13.926,14.284V0.525C13.926,0.106,13.402,0,13.402,0H3.085C1.512,0,1.512,1.452,1.512,1.452v13.427   c0,0.308,0.249,0.559,0.56,0.559h10.069c0.309,0,0.559-0.251,0.559-0.559l0.666-0.002C13.967,14.877,13.926,14.284,13.926,14.284z    M8.02,6.846v6.06H6.861v-6.06H4.307V5.687h2.554v-2.05H8.02v2.05h2.553l0.001,1.159C10.574,6.846,8.02,6.846,8.02,6.846z    M13.278,13.554c0,0-0.1,0.364-0.578,0.364v-3.907V2.035c0-0.309-0.25-0.559-0.559-0.559L2.613,1.471   c0-0.384,0.578-0.579,0.578-0.579H12.7c0.596,0,0.578,0.525,0.578,0.525S13.278,13.554,13.278,13.554z" />
      </svg>
    </div>
    <div id="retrasarLibro" class="titulos btn-cambiar btn-cambiar-libro">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2.5"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" /></svg>
    </div>
    <div id="retrasarCap" class="titulos btn-cambiar">
      <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 24 24" fill="none" stroke-width="2.5"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 17l-5-5 5-5 " /></svg>
    </div>

    <div id="buscadores">
      <div id="libro" class="titulos" data-indexlibro="0"></div>
      <div id="capitulo" class="titulos">1</div>
      <div id="versiculo" class="titulos">Vr</div>
    </div>

    <div id="adelantarCap" class="titulos btn-cambiar disable">
      <svg xmlns="http://www.w3.org/2000/svg" width="32px" style="margin-left:-8px" viewBox="0 0 24 24" fill="none"
        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M13 17l5-5-5-5" /></svg>
    </div>
    <div id="adelantarLibro" class="titulos btn-cambiar btn-cambiar-libro">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2.5"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M13 17l5-5-5-5M6 17l5-5-5-5" /></svg>
    </div>

    <div id="content-botones">
      <div id="maximizar-minimizar">
        <div class="btn-minimizar">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" style="margin-top:7px" viewBox="0 0 24 24" fill="none"
            stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>

        <div class="btn-maximizar">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" style="margin-top:7px" viewBox="0 0 24 24" fill="none"
            stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </div>
      </div>
      <div id="cerrar">
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none"
          stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </div>
  </header>
  <ul id="selector-libro" class="content-selector">
    <h4 class="separadores-selectores-libro">Pentateuco</h4>
    <div class="opciones-libro selector" data-index="0">Génesis</div>
    <div class="opciones-libro selector" data-index="1">Éxodo</div>
    <div class="opciones-libro selector" data-index="2">Levítico</div>
    <div class="opciones-libro selector" data-index="3">Números</div>
    <div class="opciones-libro selector" data-index="4">Deuteronomio</div>
    <h4 class="separadores-selectores-libro">Libros Historicos</h4>
    <div class="opciones-libro selector" data-index="5">Josué</div>
    <div class="opciones-libro selector" data-index="6">Jueces</div>
    <div class="opciones-libro selector" data-index="7">Rut</div>
    <div class="opciones-libro selector" data-index="8">1 Samuel</div>
    <div class="opciones-libro selector" data-index="9">2 Samuel</div>
    <div class="opciones-libro selector" data-index="10">1 Reyes</div>
    <div class="opciones-libro selector" data-index="11">2 Reyes</div>
    <div class="opciones-libro selector" data-index="12">1 Crónicas</div>
    <div class="opciones-libro selector" data-index="13">2 Crónicas</div>
    <div class="opciones-libro selector" data-index="14">Esdras</div>
    <div class="opciones-libro selector" data-index="15">Nehemías</div>
    <div class="opciones-libro selector" data-index="16">Ester</div>
    <h4 class="separadores-selectores-libro">Libros Poeticos</h4>
    <div class="opciones-libro selector" data-index="17">Job</div>
    <div class="opciones-libro selector" data-index="18">Salmos</div>
    <div class="opciones-libro selector" data-index="19">Proverbios</div>
    <div class="opciones-libro selector" data-index="20">Eclesiastés</div>
    <div class="opciones-libro selector" data-index="21">Cantares</div>
    <h4 class="separadores-selectores-libro">Profetas Mayores</h4>
    <div class="opciones-libro selector" data-index="22">Isaías</div>
    <div class="opciones-libro selector" data-index="23">Jeremías</div>
    <div class="opciones-libro selector" data-index="24">Lamentaciones</div>
    <div class="opciones-libro selector" data-index="25">Ezequiel</div>
    <div class="opciones-libro selector" data-index="26">Daniel</div>
    <h4 class="separadores-selectores-libro">Profetas Menores</h4>
    <div class="opciones-libro selector" data-index="27">Oseas</div>
    <div class="opciones-libro selector" data-index="28">Joel</div>
    <div class="opciones-libro selector" data-index="29">Amós</div>
    <div class="opciones-libro selector" data-index="30">Abdías</div>
    <div class="opciones-libro selector" data-index="31">Jonás</div>
    <div class="opciones-libro selector" data-index="32">Miqueas</div>
    <div class="opciones-libro selector" data-index="33">Nahúm</div>
    <div class="opciones-libro selector" data-index="34">Habacuc</div>
    <div class="opciones-libro selector" data-index="35">Sofonías</div>
    <div class="opciones-libro selector" data-index="36">Hageo</div>
    <div class="opciones-libro selector" data-index="37">Zacarías</div>
    <div class="opciones-libro selector" data-index="38">Malaquías</div>
    <h4 class="separadores-selectores-libro">Evangelios y Hechos</h4>
    <div class="opciones-libro selector" data-index="39">Mateo</div>
    <div class="opciones-libro selector" data-index="40">Marcos</div>
    <div class="opciones-libro selector" data-index="41">Lucas</div>
    <div class="opciones-libro selector" data-index="42">Juan</div>
    <div class="opciones-libro selector" data-index="43">Hechos</div>
    <h4 class="separadores-selectores-libro">Epistolas</h4>
    <div class="opciones-libro selector" data-index="44">Romanos</div>
    <div class="opciones-libro selector" data-index="45">1 Corintios</div>
    <div class="opciones-libro selector" data-index="46">2 Corintios</div>
    <div class="opciones-libro selector" data-index="47">Gálatas</div>
    <div class="opciones-libro selector" data-index="48">Efesios</div>
    <div class="opciones-libro selector" data-index="49">Filipenses</div>
    <div class="opciones-libro selector" data-index="50">Colosenses</div>
    <div class="opciones-libro selector" data-index="51">1 Tesalonicenses</div>
    <div class="opciones-libro selector" data-index="52">2 Tesalonicenses</div>
    <div class="opciones-libro selector" data-index="53">1 Timoteo</div>
    <div class="opciones-libro selector" data-index="54">2 Timoteo</div>
    <div class="opciones-libro selector" data-index="55">Tito</div>
    <div class="opciones-libro selector" data-index="56">Filemón</div>
    <div class="opciones-libro selector" data-index="57">Hebreos</div>
    <div class="opciones-libro selector" data-index="58">Santiago</div>
    <div class="opciones-libro selector" data-index="59">1 Pedro</div>
    <div class="opciones-libro selector" data-index="60">2 Pedro</div>
    <div class="opciones-libro selector" data-index="61">1 Juan</div>
    <div class="opciones-libro selector" data-index="62">2 Juan</div>
    <div class="opciones-libro selector" data-index="63">3 Juan</div>
    <div class="opciones-libro selector" data-index="64">Judas</div>
    <div class="opciones-libro selector" data-index="65">Apocalipsis</div>
  </ul>
  <ul id="selector-cap" class="content-selector selector-ver-cap">

  </ul>
  <ul id="selector-ver" class="content-selector selector-ver-cap">

  </ul>
  <div id="loader">
    <!-- 3  -->
    <div class="loader loader--style3" title="2">
      <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" width="90px" height="90px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;"
        xml:space="preserve">
        <path fill="#000"
          d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25"
            dur="0.6s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
    <h1>Espere por favor</h1>

  </div>
  <div id="content-capitulos">

  </div>
  <div class="extender" id="agrandar">
    <i class="icofont-simple-right-down "></i>
  </div>
  <div class="extender" id="agrandar-top"></div>
  <div class="extender" id="agrandar-bottom"></div>
  <div class="extender" id="agrandar-left"></div>
  <div class="extender" id="agrandar-right"></div>
</div>
</div>
  `
// url del tab 
var URLtab = document.URL;
// insercion dependiendo de donde lo vamos a colocar
if(/\.pdf$/.test(URLtab)){
    document.body.insertBefore(div,document.body.lastChild)
}else{
    // cual quier pagina que no sea pdf
    document.body.appendChild(div)
}

// biblia Nombres
const bibliaNombresCompletos = [
    {nombre:"Génesis",acronimo:"Gé",url:"Genesis"},
    {nombre:"Éxodo",acronimo:"Éx",url:"Exodo"},
    {nombre:"Levítico",acronimo:"Le",url:"Levitico"},
    {nombre:"Números",acronimo:"Nú",url:"Numeros"},
    {nombre:"Deuteronomio",acronimo:"Dt",url:"Deuteronomio"},
    {nombre:"Josué",acronimo:"Jos",url:"Josue"},
    {nombre:"Jueces",acronimo:"Jue",url:"Jueces"},
    {nombre:"Rut",acronimo:"Rut",url:"Rut"},
    {nombre:"1 Samuel",acronimo:"1Sa",url:"1_Samuel"},
    {nombre:"2 Samuel",acronimo:"2Sa",url:"2_Samuel"},
    {nombre:"1 Reyes",acronimo:"1Re",url:"1_Reyes"},
    {nombre:"2 Reyes",acronimo:"2Re",url:"2_Reyes"},
    {nombre:"1 Crónicas",acronimo:"1Cr",url:"1_Cronicas"},
    {nombre:"2 Crónicas",acronimo:"2Cr",url:"2_Cronicas"},
    {nombre:"Esdras",acronimo:"Esd",url:"Esdras"},
    {nombre:"Nehemías",acronimo:"Ne",url:"Nehemias"},
    {nombre:"Ester",acronimo:"Est",url:"Ester"},
    {nombre:"Job",acronimo:"Job",url:"Job"},
    {nombre:"Salmos",acronimo:"Sl",url:"Salmos"},
    {nombre:"Proverbios",acronimo:"Pr",url:"Proverbios"},
    {nombre:"Eclesiastés",acronimo:"Ec",url:"Eclesiastes"},
    {nombre:"Cantares",acronimo:"Can",url:"Cantares"},
    {nombre:"Isaías",acronimo:"Isa",url:"Isaias"},
    {nombre:"Jeremías",acronimo:"Jer",url:"Jeremias"},
    {nombre:"Lamentaciones",acronimo:"Lam",url:"Lamentaciones"},
    {nombre:"Ezequiel",acronimo:"Eze",url:"Ezequiel"},
    {nombre:"Daniel",acronimo:"Da",url:"Daniel"},
    {nombre:"Oseas",acronimo:"Os",url:"Oseas"},
    {nombre:"Joel",acronimo:"Joe",url:"Joel"},
    {nombre:"Amós",acronimo:"Am",url:"Amos"},
    {nombre:"Abdías",acronimo:"Abd",url:"Abdias"},
    {nombre:"Jonás",acronimo:"Jon",url:"Jonas"},
    {nombre:"Miqueas",acronimo:"Miq",url:"Miqueas"},
    {nombre:"Nahúm",acronimo:"Na",url:"Nahum"},
    {nombre:"Habacuc",acronimo:"Hab",url:"Habacuc"},
    {nombre:"Sofonías",acronimo:"Sof",url:"Sofonias"},
    {nombre:"Hageo",acronimo:"Hg",url:"Hageo"},
    {nombre:"Zacarías",acronimo:"Zac",url:"Zacarias"},
    {nombre:"Malaquías",acronimo:"Mal",url:"Malaquias"},
    {nombre:"Mateo",acronimo:"Mt",url:"Mateo"},
    {nombre:"Marcos",acronimo:"Mr",url:"Marcos"},
    {nombre:"Lucas",acronimo:"Lu",url:"Lucas"},
    {nombre:"Juan",acronimo:"Jn",url:"Juan"},
    {nombre:"Hechos",acronimo:"Hch",url:"Hechos"},
    {nombre:"Romanos",acronimo:"Ro",url:"Romanos"},
    {nombre:"1 Corintios",acronimo:"1Co",url:"1_Corintios"},
    {nombre:"2 Corintios",acronimo:"2Co",url:"2_Corintios"},
    {nombre:"Gálatas",acronimo:"Gál",url:"Galatas"},
    {nombre:"Efesios",acronimo:"Ef",url:"Efesios"},
    {nombre:"Filipenses",acronimo:"Flp",url:"Filipenses"},
    {nombre:"Colosenses",acronimo:"Col",url:"Colosenses"},
    {nombre:"1 Tesalonicenses",acronimo:"1Te",url:"1_Tesalonicenses"},
    {nombre:"2 Tesalonicenses",acronimo:"2Te",url:"2_Tesalonicenses"},
    {nombre:"1 Timoteo",acronimo:"1Ti",url:"1_Timoteo"},
    {nombre:"2 Timoteo",acronimo:"2Ti",url:"2_Timoteo"},
    {nombre:"Tito",acronimo:"Tit",url:"Tito"},
    {nombre:"Filemón",acronimo:"Flm",url:"Filemon"},
    {nombre:"Hebreos",acronimo:"Heb",url:"Hebreos"},
    {nombre:"Santiago",acronimo:"Snt",url:"Santiago"},
    {nombre:"1 Pedro",acronimo:"1Pe",url:"1_Pedro"},
    {nombre:"2 Pedro",acronimo:"2Pe",url:"2_Pedro"},
    {nombre:"1 Juan",acronimo:"1Jn",url:"1_Juan"},
    {nombre:"2 Juan",acronimo:"2Jn",url:"2_Juan"},
    {nombre:"3 Juan",acronimo:"3Jn",url:"3_Juan"},
    {nombre:"Judas",acronimo:"Jud",url:"Judas"},
    {nombre:"Apocalipsis",acronimo:"Ap",url:"apocalipsis"}
]

// biblia como tal XD
var versiculo = 1,
    capitulo = 1,
    indexLibro = 0,
    dataLibro,
    mostrarVersiculo = false;

function mostrarContentBiblia() {
    container.classList.remove("close")
    if (container.classList.contains("minimizado")) {
        container.classList.remove("minimizado");
        container.style.bottom = "inherit"
        container.style.top = topAnterior
        container.style.left = leftAnterior
    }
}

//recibir
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    switch (request.text) {
        case 'cambia':
            mostrarContentBiblia()
            sendResponse({
                status: "ok"
            })
            break;

        case 'muestrate':
            mostrarContentBiblia()
            sendResponse({
                status: "ok"
            })
            break;
        case "data_libro":
            mostrarContentBiblia()
            dataLibro = request.data
            console.log(request)
            imprimirLibro()
            break;

        case "renderiza_esto":
            sendResponse({
                status: "ok"
            })
            dataLibro = request.data
            versiculo = request.nroVer
            capitulo = request.nroCap
            indexLibro = request.indexLibro
            mostrarVersiculo = true
            mostrarContentBiblia()
            console.log(request)
            imprimirLibro()
            break;
    }
});

// establecer el versiculo cap and book
//(async function(){
//    chrome.storage.sync.get(["data"], (respuesta) => {
//        data = JSON.parse(respuesta.data || "{}") ;
//        versiculo = data.versiculo
//        capitulo = data.capitulo
//        indexLibro = data.libro
//})()

//render
async function cambiarLibro() {
    var urlImport = bibliaNombresCompletos[indexLibro].url + ".js"
    console.log(urlImport)
    pedirLibro(urlImport)
}

// pedir libro 

function pedirLibro(urlLibro) {
    chrome.runtime.sendMessage({
        urlLibro
    }, function (Response) {
        dataLibro = Response.data
        console.log(dataLibro)
        imprimirLibro()
    });
}

const container = document.getElementById("content-biblia");
const tituloLibro = document.getElementById("libro");
const tituloCap = document.getElementById("capitulo");
const tituloVersiculo = document.getElementById("versiculo");
const contentCapitulo = document.getElementById("content-capitulos")
const irVersiculo = document.createElement("a")
const selectorLibro = document.getElementById("selector-libro");
const selectorCap = document.getElementById("selector-cap");
const selectorVersiculo = document.getElementById("selector-ver");

function desaptivarSelectores() {
    //LIBRO
    if (selectorLibro.classList.contains("active")) {
        selectorLibro.classList.remove("active")
        tituloLibro.classList.remove("active")
    }
    //CAP
    if (selectorCap.classList.contains("active")) {
        selectorCap.classList.remove("active")
        tituloCap.classList.remove("active")
    }
    //Versiculo
    if (selectorVersiculo.classList.contains("active")) {

        selectorVersiculo.classList.remove("active")
        tituloVersiculo.classList.remove("active")
    }
}

function colocarSelectorLibro() {
    selectorLibro.querySelectorAll("div").forEach((item) => {
        item.classList.remove("active")
    })
    selectorLibro.querySelector(`div[data-index="${indexLibro}"]`).classList.add("active")
    tituloLibro.dataset.nombre = bibliaNombresCompletos[indexLibro].nombre
    tituloLibro.dataset.acronimo = bibliaNombresCompletos[indexLibro].acronimo
    redimensionar()
}

function imprimirLibro() {
    colocarSelectorLibro()
    colocarCap()
    imprimirCapitulo()
    if (indexLibro == 0) {
        retrasarLibro.classList.add("disable")
    } else {
        retrasarLibro.classList.remove("disable")
    }
    if (indexLibro == 65) {
        adelantarLibro.classList.add("disable")
    } else {
        adelantarLibro.classList.remove("disable")
    }
}
tituloLibro.addEventListener("click", () => {
    if (tituloLibro.classList.contains("active")) {
        desaptivarSelectores()
        selectorLibro.classList.remove("active")
        tituloLibro.classList.remove("active")
    } else {
        desaptivarSelectores()
        selectorLibro.classList.add("active")
        tituloLibro.classList.add("active")
    }
})

selectorLibro.querySelectorAll("div").forEach((item) => {
    item.addEventListener("click", (e) => {
        selectorCap.classList.remove("ready")
        var index = new Number(e.srcElement.dataset.index)
        indexLibro = index
        selectorLibro.classList.remove("active")
        tituloLibro.classList.remove("active")
        selectorCap.classList.add("active")
        tituloCap.classList.add("active")
        cambiarLibro()
    })
})

function colocarCap() {
    var cap = ""
    for (let index = 0; index < dataLibro.length; index++) {
        cap += `<div class="selector" data-index="${index + 1}">${index + 1}</div>`
    }
    selectorCap.innerHTML = cap;
    selectorCap.childNodes.forEach((item) => {
        item.addEventListener("click", (e) => {
            if (e.srcElement.classList.contains("active")) {
                selectorCap.classList.remove("active")
                tituloCap.classList.remove("active")
                selectorVersiculo.classList.add("active")
                tituloVersiculo.classList.add("active")
                return
            }
            selectorVersiculo.classList.remove("ready")
            var index = new Number(e.srcElement.dataset.index)
            capitulo = index
            if (mostrarVersiculo) {
                mostrarVersiculo = false
            } else {
                versiculo = 1;
            }

            selectorCap.classList.remove("active")
            tituloCap.classList.remove("active")
            selectorVersiculo.classList.add("active")
            imprimirCapitulo()
        })
    })
    selectorCap.classList.add("ready")
}

// colocar el Selctor que esta activo
function colocarSelectorCap() {
    selectorCap.childNodes.forEach((item) => {
        item.classList.remove("active")
    })
    selectorCap.querySelector(`div[data-index="${capitulo}"]`).classList.add("active")
    tituloCap.textContent = capitulo
}

function imprimirCapitulo() {
    if (indexLibro == 0 && capitulo == 1) {
        retrasarCap.classList.add("disable")
    } else {
        retrasarCap.classList.remove("disable")
    }
    if (!(indexLibro < 65) && !(capitulo < dataLibro.length)) {
        adelantarCap.classList.add("disable")
    } else {
        adelantarCap.classList.remove("disable")
    }
    colocarSelectorCap()
    var capituloActual = ""
    dataLibro[capitulo - 1].forEach((element, index) => {
        capituloActual += `<p id="ver-${index + 1}"class="versiculo"><span class="numero-versiculo">${index + 1}</span>${element}</p>`
    });
    contentCapitulo.innerHTML = capituloActual
    contentCapitulo.appendChild(irVersiculo)
    //  addEventListener para colocar capitulos
    colocarVer()
    irAlVersiculo()
}

tituloCap.addEventListener("click", () => {
    if (selectorCap.classList.contains("active")) {
        desaptivarSelectores()
        selectorCap.classList.remove("active")
        tituloCap.classList.remove("active")
    } else {
        desaptivarSelectores()
        tituloCap.classList.add("active")
        selectorCap.classList.add("active")
    }
})
// colocar los selectores

function colocarVer() {
    var ver = ""
    for (let index = 0; index < dataLibro[capitulo - 1].length; index++) {
        ver += `<div class="selector" data-index="${index + 1}">${index + 1}</div>`
    }
    selectorVersiculo.innerHTML = ver
    selectorVersiculo.childNodes.forEach((item) => {
        item.addEventListener("click", (e) => {
            var index = new Number(e.srcElement.dataset.index)
            versiculo = index
            selectorVersiculo.classList.remove("active")
            tituloVersiculo.classList.remove("active")
            irAlVersiculo()
        })
    })
    selectorVersiculo.classList.add("ready")
}

function irAlVersiculo() {
    irVersiculo.href = "#ver-" + versiculo
    irVersiculo.click()
    document.querySelector("#ver-" + versiculo).classList.add("active")
    setTimeout(() => {
        document.querySelector("#ver-" + versiculo).classList.remove("active")
    }, 1000)
}

tituloVersiculo.addEventListener("click", () => {
    if (selectorVersiculo.classList.contains("active")) {
        desaptivarSelectores()
        selectorVersiculo.classList.remove("active")
        tituloVersiculo.classList.remove("active")
    } else {
        desaptivarSelectores()
        selectorVersiculo.classList.add("active")
        tituloVersiculo.classList.add("active")
    }

})

// addEventListenr para avanzar y retrazar
const retrasarLibro = document.querySelector("#retrasarLibro")
const retrasarCap = document.querySelector("#retrasarCap")
const adelantarCap = document.querySelector("#adelantarCap")
const adelantarLibro = document.querySelector("#adelantarLibro")

retrasarLibro.addEventListener("click", () => {
    if (indexLibro > 0) {
        indexLibro--
        cambiarLibro()
    }
})
retrasarCap.addEventListener("click", () => {
    if (capitulo > 1) {
        capitulo--
        versiculo = 1;
        imprimirCapitulo()
        colocarSelectorCap()
    }
    if (indexLibro !== 0 && capitulo == 1) {
        indexLibro--
        cambiarLibro()
    }

})
adelantarCap.addEventListener("click", () => {

    if (capitulo < dataLibro.length) {
        capitulo++
        versiculo = 1;
        imprimirCapitulo()
        colocarSelectorCap()
    }
    if (indexLibro < 65 && capitulo == dataLibro.length) {

        indexLibro++
        cambiarLibro()
    }
})
adelantarLibro.addEventListener("click", () => {
    if (indexLibro < 65) {
        indexLibro++
        cambiarLibro()
    }
})

// Agrandar y mover
var contador = 0
const botonAgrandar = document.querySelector("#agrandar");
const botonAgrandarTop = document.querySelector("#agrandar-top");
const botonAgrandarBottom = document.querySelector("#agrandar-bottom");
const botonAgrandarLeft = document.querySelector("#agrandar-left");
const botonAgrandarRight = document.querySelector("#agrandar-right");
const botonMover = document.querySelector("#mover");
const buscadores = document.querySelector("#buscadores");
var agrandar = {
    estado: false,
    modo: "x-y",
    widthInicial: 0,
    heightInicial: 0,
    mouseX: 0,
    mouseY: 0
};
var mover = {
    modo: "x-y",
    estado: false,
    xInicial: 0,
    yInicial: 0,
    mouseX: 0,
    mouseY: 0
};

document.body.onmousemove = (e) => {
    if (agrandar.estado) {
        if (agrandar.modo == "x-y") {
            //lo que se movio en y
            var movimientoDiferencialHeight = e.pageY - agrandar.mouseY;
            var finalHeight = (agrandar.heightInicial + movimientoDiferencialHeight) + "px"

            //lo que se movio en x
            var movimientoDiferencialWidth = e.pageX - agrandar.mouseX;
            var finalWidth = (agrandar.widthInicial + movimientoDiferencialWidth) + "px"

            container.style.height = finalHeight;
            container.style.width = finalWidth;
            redimensionar()

        } else if (agrandar.modo == "right") {
            //lo que se movio en x
            var movimientoDiferencialWidth = e.pageX - agrandar.mouseX;
            var finalWidth = (agrandar.widthInicial + movimientoDiferencialWidth) + "px"
            container.style.width = finalWidth;
            redimensionar()

        } else if (agrandar.modo == "bottom") {
            //lo que se movio en y
            var movimientoDiferencialHeight = e.pageY - agrandar.mouseY;
            var finalHeight = (agrandar.heightInicial + movimientoDiferencialHeight) + "px"

            container.style.height = finalHeight;
        } else if (agrandar.modo == "left") {
            //lo que se movio en x
            var movimientoDiferencialWidth = (e.pageX - agrandar.mouseX) * -1;
            var finalWidth = (agrandar.widthInicial + movimientoDiferencialWidth) + "px"
            container.style.width = finalWidth;
            redimensionar()
        } else if (agrandar.modo == "top") {
            //lo que se movio en y
            var movimientoDiferencialHeight = (e.pageY - agrandar.mouseY) * -1;
            var finalHeight = (agrandar.heightInicial + movimientoDiferencialHeight) + "px"

            container.style.height = finalHeight;
        }

    }
    if (mover.estado) {
        if (mover.modo == "x-y") {
            //lo que se movio en y
            var movimientoDiferencialTop = e.pageY - mover.mouseY;
            var finalTop = mover.yInicial + movimientoDiferencialTop
            container.style.top = finalTop
            // obtenemos los valores que ya tenemos
            var heightBody = document.body.getBoundingClientRect().height
            var heightContainer = container.getBoundingClientRect().height
            // la posicion en donde queda la biblia para asi ver si sale del viewport
            var yResultado = heightContainer + finalTop
            if (heightBody >= yResultado && 0 < finalTop) {
                container.style.top = finalTop + "px"
            } else if (0 >= finalTop) {
                container.style.top = "0px"
            } else {
                // por si sale del viewport entonces lo ajustamos para que quede en la oriya
                var resul = (heightBody - yResultado) * -1
                container.style.top = (finalTop - resul) + "px"
            }
            //lo que se movio en x
            var movimientoDiferencialLeft = e.pageX - mover.mouseX;
            var finalLeft = mover.xInicial + movimientoDiferencialLeft
            // obtenemos los valores que ya tenemos
            var widthBody = document.body.getBoundingClientRect().width
            var widthContainer = container.getBoundingClientRect().width
            // la posicion en donde queda la biblia para asi ver si sale del viewport
            var xResultado = widthContainer + finalLeft
            if (widthBody >= xResultado && 0 < finalLeft) {
                container.style.left = finalLeft + "px"
            } else if (0 >= finalLeft) {
                container.style.left = "0px"
            } else {
                // por si sale del viewport entonces lo ajustamos para que quede en la oriya
                var resul = (widthBody - xResultado) * -1
                container.style.left = (finalLeft - resul) + "px"
            }

        } else if (mover.modo == "x") {
            //lo que se movio en x
            var movimientoDiferencialLeft = e.pageX - mover.mouseX;
            var finalLeft = mover.xInicial + movimientoDiferencialLeft
            // obtenemos los valores que ya tenemos
            var widthBody = document.body.getBoundingClientRect().width
            var widthContainer = container.getBoundingClientRect().width
            // la posicion en donde queda la biblia para asi ver si sale del viewport
            var xResultado = widthContainer + finalLeft
            if (widthBody >= xResultado && 0 < finalLeft) {
                container.style.left = finalLeft + "px"
            } else if (0 >= finalLeft) {
                container.style.left = "0px"
            } else {
                // por si sale del viewport entonces lo ajustamos para que quede en la oriya
                var resul = (widthBody - xResultado) * -1
                container.style.left = (finalLeft - resul) + "px"
            }

        } else if (mover.modo == "y") {
            //lo que se movio en y
            var movimientoDiferencialTop = e.pageY - mover.mouseY;
            var finalTop = mover.yInicial + movimientoDiferencialTop
            container.style.top = finalTop
            // obtenemos los valores que ya tenemos
            var heightBody = document.body.getBoundingClientRect().height
            var heightContainer = container.getBoundingClientRect().height
            // la posicion en donde queda la biblia para asi ver si sale del viewport
            var yResultado = heightContainer + finalTop
            if (heightBody >= yResultado && 0 < finalTop) {
                container.style.top = finalTop + "px"
            } else if (0 >= finalTop) {
                container.style.top = "0px"
            } else {
                // por si sale del viewport entonces lo ajustamos para que quede en la oriya
                var resul = (heightBody - yResultado) * -1
                container.style.top = (finalTop - resul) + "px"
            }
        }

    }
};
botonAgrandar.onmousedown = (e) => {
    var {
        height,
        width
    } = container.getBoundingClientRect()
    agrandar = {
        estado: true,
        modo: "x-y",
        widthInicial: width,
        heightInicial: height,
        mouseX: e.pageX,
        mouseY: e.pageY
    }
}
botonAgrandarRight.onmousedown = (e) => {
    var {
        height,
        width
    } = container.getBoundingClientRect()
    agrandar = {
        estado: true,
        modo: "right",
        widthInicial: width,
        heightInicial: height,
        mouseX: e.pageX,
        mouseY: e.pageY
    }
}
botonAgrandarLeft.onmousedown = (e) => {
    var finalLeft = container.style.left.replace("px", "")
    var {
        height,
        width
    } = container.getBoundingClientRect()
    agrandar = {
        estado: true,
        modo: "left",
        widthInicial: width,
        heightInicial: height,
        mouseX: e.pageX,
        mouseY: e.pageY
    }
    mover = {
        estado: true,
        xInicial: new Number(finalLeft),
        mouseX: e.pageX,
        modo: "x"
    }
}
botonAgrandarTop.onmousedown = (e) => {
    var finalTop = container.style.top.replace("px", "")
    var {
        height,
        width
    } = container.getBoundingClientRect()
    agrandar = {
        estado: true,
        modo: "top",
        widthInicial: width,
        heightInicial: height,
        mouseX: e.pageX,
        mouseY: e.pageY
    }
    mover = {
        estado: true,
        yInicial: new Number(finalTop),
        mouseY: e.pageY,
        modo: "y"
    }
}
botonAgrandarBottom.onmousedown = (e) => {
    var {
        height,
        width
    } = container.getBoundingClientRect()
    agrandar = {
        estado: true,
        modo: "bottom",
        widthInicial: width,
        heightInicial: height,
        mouseX: e.pageX,
        mouseY: e.pageY
    }
}

botonMover.onmousedown = (e) => {
    var finalTop = container.style.top.replace("px", "")
    var finalLeft = container.style.left.replace("px", "")
    // si esta en modo disable debe estar en la parte de abajo asique no deberia moverse e el eje y
    mover = {
        modo: container.classList.contains("minimizado") ? "x" : "x-y",
        estado: true,
        yInicial: new Number(finalTop),
        xInicial: new Number(finalLeft),
        mouseX: e.pageX,
        mouseY: e.pageY
    }
}

document.body.onmouseup = () => {
    agrandar.estado = false
    mover.estado = false
}
window.onresize = (e) => {
    console.warn("se movio :V")
    var y = container.style.top.replace("px", "");
    var x = container.style.left.replace("px", "");
    var finalTop = new Number(y);
    var finalLeft = new Number(x);
    if (container.style.top) {
        // -----------Y-----------
        // obtenemos los valores que ya tenemos
        var heightBody = document.body.getBoundingClientRect().height
        var heightContainer = container.getBoundingClientRect().height
        // la posicion en donde queda la biblia para asi ver si sale del viewport
        var yResultado = heightContainer + finalTop
        if (heightBody >= yResultado && 0 < finalTop) {
            container.style.top = finalTop + "px"
        } else if (0 >= finalTop) {
            container.style.top = "0px"
        } else {
            // por si sale del viewport entonces lo ajustamos para que quede en la oriya
            var resul = (heightBody - yResultado) * -1
            container.style.top = (finalTop - resul) + "px"
        }
    }
    // -----------X-----------
    // obtenemos los valores que ya tenemos
    var widthBody = document.body.getBoundingClientRect().width
    var widthContainer = container.getBoundingClientRect().width
    // la posicion en donde queda la biblia para asi ver si sale del viewport
    var xResultado = widthContainer + finalLeft
    if (widthBody >= xResultado && 0 < finalLeft) {
        container.style.left = finalLeft + "px"
    } else if (0 >= finalLeft) {
        container.style.left = "0px"
    } else {
        // por si sale del viewport entonces lo ajustamos para que quede en la oriya
        var resul = (widthBody - xResultado) * -1
        container.style.left = (finalLeft - resul) + "px"
    }
}
// Ya no lo usare porque no me gusto :>
//selectorLibro.onmouseleave = () => {
//    selectorLibro.classList.remove("active")
//    tituloLibro.classList.remove("active")
//}
//selectorCap.onmouseleave = () => {
//    selectorCap.classList.remove("active")
//    tituloCap.classList.remove("active")
//}
//selectorVersiculo.onmouseleave = () => {
//    selectorVersiculo.classList.remove("active")
//    tituloVersiculo.classList.remove("active")
//}

document.body.onmouseleave = () => {
    agrandar.estado = false
    mover.estado = false
}

// minimizar
const minimizarMaximizar = document.querySelector("#maximizar-minimizar")
var topAnterior = "";
var leftAnterior = "";
minimizarMaximizar.addEventListener("click", () => {
    if (!container.classList.contains("minimizado")) {
        container.classList.add("minimizado");
        container.style.bottom = "0px"
        topAnterior = container.style.top
        container.style.top = ""
        leftAnterior = container.style.left
        container.style.left = ""
    } else {
        container.classList.remove("minimizado");
        container.style.bottom = "inherit"
        container.style.top = topAnterior
        container.style.left = leftAnterior
    }
})
function redimensionar() {
    // para evitar que los botones colapsen 
    const widtContainer = container.getBoundingClientRect().width
    const widtbuscadores = buscadores.getBoundingClientRect().width
    // el sobrante es lo que ocupan el boton de cerrar, minimizar y el logo
    const sobrante = 105;
    // el * 2 es porque son dos botones
    const tamañoBtnsCambiarCap = 24 * 2
    const tamañoBtnsCambiarLibro = 34 * 2
    // lo que me queda de espacio para los btn de adelantar y retrasar cap y libros
    var resul = widtContainer - sobrante - widtbuscadores;
    
    if (resul > tamañoBtnsCambiarCap + tamañoBtnsCambiarLibro) {
        // si hay espacio para que entren los botones
        container.classList.remove("ocultarBtnCap")
        container.classList.remove("ocultarBtnLibro")
    } else if (resul > tamañoBtnsCambiarCap) {
        // si hay espacio para los botones de cambiar cap
        container.classList.remove("ocultarBtnCap")
        container.classList.add("ocultarBtnLibro")
    }else{
        // si no hay espacio para ninguno
        container.classList.add("ocultarBtnCap")
        container.classList.add("ocultarBtnLibro")
    }
}

// cerrar ( osea elimarlo XD )
const btnCerrar = document.querySelector("#cerrar")
btnCerrar.addEventListener("click", () => container.classList.add("close"));

function listo() {
    if (window.hasRun === true)
        return true; // Will ultimately be passed back to executeScript
    window.hasRun = true;
    // rest of code ... 
    // No return value here, so the return value is "undefined" (without quotes).
}
listo()

//------------------Modo rapido
//var depurarVersiculo
//(async ()=>{
//    var src = chrome.runtime.getURL("../depurador.js")
//    var depurador = await import(src)
//    depurarVersiculo = depurador.default
//    console.log(depurarVersiculo)
//})()

//function getPdfSelectedText() {
//  return new Promise(resolve => {
//    window.addEventListener('message', function onMessage(e) {
//        resolve(e.data.selectedText);
//    });
//    const script = document.createElement('script');
//    if (chrome.runtime.getManifest().manifest_version > 2) {
//      script.src = chrome.runtime.getURL('query-pdf.js');
//    } else {
//      script.textContent = `(${() => {
//        document.querySelector('embed').postMessage({type: 'getSelectedText'}, '*');
//      }})()`;
//    }
//    document.documentElement.appendChild(script);
//    script.remove();
//  });
//}
//
//chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//  if (msg === 'getPdfSelection') {
//    getPdfSelectedText().then(sendResponse);
//    return true;
//  }
//});
//getPdfSelectedText()