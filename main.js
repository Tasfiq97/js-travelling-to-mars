
function inputChange(planet,isIncrease,amount){
    const marsTicket= document.getElementById(planet+"-input");
    let  marsTicketNum=  parseInt(marsTicket.value);
     if(isIncrease){
         marsTicketNum =parseInt(marsTicket.value)+1;
     }else if(marsTicketNum>0){
        marsTicketNum =parseInt(marsTicket.value)- 1;
     }
     
      marsTicket.value= marsTicketNum;
const marsCost= document.getElementById(planet+"-cost");
const marsAmount=parseInt (marsCost.innerText);
marsCost.innerText= marsTicketNum *amount;
totalCost();
}

function totalCost(){
    const marsTicket= document.getElementById("mars-input");
    const marsNum= marsTicket.value;
    const totalMars = marsNum *1020;
    const moonTicket= document.getElementById("moon-input");
    const moonNum= moonTicket.value;
    const totalMoon = moonNum *550;
    const total= totalMars+ totalMoon;

    document.getElementById("total").innerText= total;
    
    
}




document.getElementById("mars-plus").addEventListener("click",function(){
    inputChange("mars",true,1020);
})
document.getElementById("mars-minus").addEventListener("click",function(){
    inputChange("mars",false,1020)
})
document.getElementById("moon-plus").addEventListener("click",function(){
    inputChange("moon",true,550)
})
document.getElementById("moon-minus").addEventListener("click",function(){
    inputChange("moon",false,550)
})
