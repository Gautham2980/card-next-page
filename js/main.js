function details(event){
    let carVal = event.target.parentElement.parentElement;
    let carHead = carVal.querySelector(".heading").innerHTML;

    if(carHead=="Exter"){
        window.location.href = "exter/index.html";
    }

     else if(carHead=="venue"){
        window.location.href="venue/index.html"
    }
    
    else if(carHead=="Altroz"){
        window.location.href="Altroz/index.html"
    }
    else if(carHead=="Amaze"){
        window.location.href="Amaze/index.html"
    }
    else if(carHead=="city"){
        window.location.href="city/index.html"
    }
    else if(carHead=="scorpion"){
        window.location.href="scorpio/index.html"
    }

    else if(carHead=="Thar"){
        window.location.href="thar/index.html"
    }
    else if(carHead=="Nexon"){
        window.location.href="Nexon/index.html"
    }
    else if(carHead=="Fronx"){
        window.location.href="fronx/index.html"
    }

}
















// function orderBtn(event) {
//     let carVal = event.target.parentElement.parentElement;
//     let carHead = carVal.querySelector(".head").innerHTML;
    
//     if (carHead == "AADI") {
//         window.location.href = "aadi-car/index.html";
//     }

//     else if(carHead == "MARUTHI"){
//         window.location.href="maruthi-car/index.html";

//      }
//      else if(carHead == "HONDA"){
//         window.location.href="honda-car/index.html";

//      }
//      else if(carHead == "MAHENDRA"){
//         window.location.href="maruthi3-car/index.html";

//      }
//      else if(carHead == "TATA"){
//         window.location.href="aadi3-car/index.html";

//      }
//      else if(carHead == "TOYOTA"){
//         window.location.href="honda2-car/index.html";

//      }
 
// }