function changeProfileName( element ){
    var h2 = document.querySelector("#fullname");
    h2.innerText = "Michael Jordan";
}
function removePicture(element){
    element.parentElement.remove(); 
    var minusCurrentNum = document.querySelector(".count").innerText;
    var total1 = Number(minusCurrentNum) - 1;
    document.querySelector(".count").innerText=total1; 
}
function addToYourConnections( element ){
    var yourCurrentNum = document.querySelector(".count1").innerText;
    var total = Number(yourCurrentNum) + 1;
    document.querySelector(".count1").innerText=total;
}