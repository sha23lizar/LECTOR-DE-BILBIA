export default function quitarTilde(text){
    const expresionRegular = /[áéíóú]/i
    if(expresionRegular.test(text)){
        text = text.replaceAll("á","a")
        text = text.replaceAll("Á","A")
        text = text.replaceAll("é","e")
        text = text.replaceAll("É","E")
        text = text.replaceAll("í","i")
        text = text.replaceAll("Í","I")
        text = text.replaceAll("ó","o")
        text = text.replaceAll("Ó","O")
        text = text.replaceAll("ú","u")
        text = text.replaceAll("Ú","U")
    }
    return text
}