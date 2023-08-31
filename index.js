
 var lista = document.querySelectorAll("section > p"); 
 
 
 let element = document.getElementsByClassName("yolo");
 let counter = 0;

 function cambiarcolor() { 
    alert("makanaki la realeza");
    if (counter === 0){
        element[0].style.backgroundColor = "#543214";
        counter++;
    } else {
        element[1].style.backgroundColor = "#999999";
        counter --;
    }
 }
 window.addEventListener("click",cambiarcolor);


  
    