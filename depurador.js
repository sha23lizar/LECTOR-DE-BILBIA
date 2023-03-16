const depurarVersiculo = function (versiculo) {
    const bibliaNombresCompletosSinTilde = [
        {nombre:"genesis",acronimo:"ge",url:"Genesis"},
        {nombre:"exodo",acronimo:"ex",url:"Exodo"},
        {nombre:"levitico",acronimo:"le",url:"Levitico"},
        {nombre:"numeros",acronimo:"nu",url:"Numeros"},
        {nombre:"deuteronomio",acronimo:"dt",url:"Deuteronomio"},
        {nombre:"josue",acronimo:"jos",url:"Josue"},
        {nombre:"jueces",acronimo:"jue",url:"Jueces"},
        {nombre:"rut",acronimo:"rut",url:"Rut"},
        {nombre:"1 samuel",acronimo:"1sa",url:"1_Samuel"},
        {nombre:"2 samuel",acronimo:"2sa",url:"2_Samuel"},
        {nombre:"1 reyes",acronimo:"1re",url:"1_Reyes"},
        {nombre:"2 reyes",acronimo:"2re",url:"2_Reyes"},
        {nombre:"1 cronicas",acronimo:"1cr",url:"1_Cronicas"},
        {nombre:"2 cronicas",acronimo:"2cr",url:"2_Cronicas"},
        {nombre:"esdras",acronimo:"esd",url:"Esdras"},
        {nombre:"nehemias",acronimo:"ne",url:"Nehemias"},
        {nombre:"ester",acronimo:"est",url:"Ester"},
        {nombre:"job",acronimo:"job",url:"Job"},
        {nombre:"salmos",acronimo:"sl",url:"Salmos"},
        {nombre:"proverbios",acronimo:"pr",url:"Proverbios"},
        {nombre:"eclesiastes",acronimo:"ec",url:"Eclesiastes"},
        {nombre:"cantares",acronimo:"can",url:"Cantares"},
        {nombre:"isaias",acronimo:"isa",url:"Isaias"},
        {nombre:"jeremias",acronimo:"jer",url:"Jeremias"},
        {nombre:"lamentaciones",acronimo:"lam",url:"Lamentaciones"},
        {nombre:"ezequiel",acronimo:"eze",url:"Ezequiel"},
        {nombre:"daniel",acronimo:"da",url:"Daniel"},
        {nombre:"oseas",acronimo:"os",url:"Oseas"},
        {nombre:"joel",acronimo:"joe",url:"Joel"},
        {nombre:"amos",acronimo:"am",url:"Amos"},
        {nombre:"abdias",acronimo:"abd",url:"Abdias"},
        {nombre:"jonas",acronimo:"jon",url:"Jonas"},
        {nombre:"miqueas",acronimo:"miq",url:"Miqueas"},
        {nombre:"nahum",acronimo:"na",url:"Nahum"},
        {nombre:"habacuc",acronimo:"hab",url:"Habacuc"},
        {nombre:"sofonias",acronimo:"sof",url:"Sofonias"},
        {nombre:"hageo",acronimo:"hg",url:"Hageo"},
        {nombre:"zacarias",acronimo:"zac",url:"Zacarias"},
        {nombre:"malaquias",acronimo:"mal",url:"Malaquias"},
        {nombre:"mateo",acronimo:"mt",url:"Mateo"},
        {nombre:"marcos",acronimo:"mr",url:"Marcos"},
        {nombre:"lucas",acronimo:"lu",url:"Lucas"},
        {nombre:"juan",acronimo:"jn",url:"Juan"},
        {nombre:"hechos",acronimo:"hch",url:"Hechos"},
        {nombre:"romanos",acronimo:"ro",url:"Romanos"},
        {nombre:"1 corintios",acronimo:"1co",url:"1_Corintios"},
        {nombre:"2 corintios",acronimo:"2co",url:"2_Corintios"},
        {nombre:"galatas",acronimo:"gal",url:"Galatas"},
        {nombre:"efesios",acronimo:"ef",url:"Efesios"},
        {nombre:"filipenses",acronimo:"flp",url:"Filipenses"},
        {nombre:"colosenses",acronimo:"col",url:"Colosenses"},
        {nombre:"1 tesalonicenses",acronimo:"1te",url:"1_Tesalonicenses"},
        {nombre:"2 tesalonicenses",acronimo:"2te",url:"2_Tesalonicenses"},
        {nombre:"1 timoteo",acronimo:"1ti",url:"1_Timoteo"},
        {nombre:"2 timoteo",acronimo:"2ti",url:"2_Timoteo"},
        {nombre:"tito",acronimo:"tit",url:"Tito"},
        {nombre:"filemon",acronimo:"flm",url:"Filemon"},
        {nombre:"hebreos",acronimo:"heb",url:"Hebreos"},
        {nombre:"santiago",acronimo:"snt",url:"Santiago"},
        {nombre:"1 pedro",acronimo:"1pe",url:"1_Pedro"},
        {nombre:"2 pedro",acronimo:"2pe",url:"2_Pedro"},
        {nombre:"1 juan",acronimo:"1jn",url:"1_Juan"},
        {nombre:"2 juan",acronimo:"2jn",url:"2_Juan"},
        {nombre:"3 juan",acronimo:"3jn",url:"3_Juan"},
        {nombre:"judas",acronimo:"jud",url:"Judas"},
        {nombre:"apocalipsis",acronimo:"ap",url:"apocalipsis"}
    ]

    var
        nroLibro = "",
        libro = "",
        nroVer = "",
        nroCap = "",
        CapYVer = "",
        urlLibro,
        indexLibro,
        libroFinal;
    //quitamos espacion y tildes
    
    versiculo = versiculo.normalize("NFD").replace(/[\u0301\(\)]/g,"").trim();
    var filtrado = versiculo.split(";")[0],
        todo = filtrado.toLowerCase().split(" ");
    if (todo[0].length == 1 && /\d/.test(todo[0])) {
        // POr si tiene numero al principio ejem
        console.log("Por esta pegado al libro")
        nroLibro = todo[0];
        libro = todo[1];
        if (!todo[2]) {
            // si no tiene cap y ver

        } else {
            CapYVer = todo[2].split(":");
            // Asignar cap y ver Array

            // Separarar cap y ver
            if (CapYVer[0]) {
                cap1 = CapYVer[0].split("-")[0];
                nroCap = cap1;
            }
            if (CapYVer[1]) {
                ver1 = CapYVer[1].split("-")[0];
                nroVer = ver1;
            }

        }
    } else if (/\d/.test(todo[0][0])) {
        // Por si el numero esta pegad al libro 
        // 1Corintios 
        console.log("Por si el numero no esta pegado al libro ");

        nroLibro = todo[0][0];
        if (todo[0].length > 1) libro = todo[0].substr(1);

        if (todo[1]) {
            CapYVer = todo[1].split(":");
            // se separan cap y ver

            if (CapYVer[0]) {
                var cap1 = CapYVer[0].split("-")[0];
                nroCap = cap1;
            }
            if (CapYVer[1]) {
                ver1 = CapYVer[1].split("-")[0];
                nroVer = ver1;
            }
        }
    } else {
        // Por si es solo un libro: Hechos
        console.log("Por si es solo un libro")
        libro = todo[0];
        if (todo[1]) {
            CapYVer = todo[1].split(":");
            // se separan cap y ver
            if (CapYVer[0]) {
                var cap1 = CapYVer[0].split("-")[0];
                nroCap = cap1;
            }
            if (CapYVer[1]) {
                var ver1 = CapYVer[1].split("-")[0];
                nroVer = ver1;
            }
        }
    }
    //colador
    nroLibro = nroLibro.trim();
    libro = libro.trim();
    nroCap = nroCap.trim();
    nroVer = nroVer.trim();
    if (!nroCap) nroCap = 1
    if (!nroVer) nroVer = 1
    if ((nroLibro && libro)) {
        libroFinal = nroLibro + " " + libro
    } else if (libro) {
        libroFinal = libro
    } else {
        return {
            estado: false
        }
    }
    for (let index = 0; index < bibliaNombresCompletosSinTilde.length; index++) {
        const libro = bibliaNombresCompletosSinTilde[index];
        if(libro.nombre == libroFinal){
            urlLibro = libro.url + ".js"
            indexLibro = index
            break
        }else if (libro.acronimo == libroFinal) {
            urlLibro = libro.url + ".js"
            indexLibro = index
            break
        }   
    }
    if(urlLibro){
        return {
            nroVer,
            nroCap,
            urlLibro,
            indexLibro,
            estado:true
        }
    }else{
        return {
            nroVer: 1,
            indexLibro: 0,
            nroCap: 1,
            urlLibro: "Genesis.js",
            estado:false
        }
    }
}
export default depurarVersiculo