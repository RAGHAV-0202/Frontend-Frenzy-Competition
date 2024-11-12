
let extend = false; 


function extendNavbar(){
    if(extend){
        document.querySelector(".navbar").style.height = "91px";
        document.querySelector(".invisibleNav").style.height = "0px"
        extend = false ; 
        document.querySelector(".invisibleNav").style.display = "none"
    }else{
        document.querySelector(".navbar").style.height = "600px";
        document.querySelector(".invisibleNav").style.height = "600px"
        document.querySelector(".invisibleNav").style.display = "flex"
        extend = true;
    }
}