const btnPermisos = document.querySelector(".btn-permisos")
btnPermisos.addEventListener("click", ()=>{
    chrome.permissions.request({
        origins:["<all_urls>"]
    },(granted) => {
        if (granted) {
            alert("gracias")
        }else{
            alert("hastente a las consecuencias")
        }
    })
})