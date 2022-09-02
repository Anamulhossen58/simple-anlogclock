setInterval(setclock,1000);
let hourt=document.querySelector(".hour");
let minutet=document.querySelector(".minute");
let secondt=document.querySelector(".second");


function setclock(){
    const date=new Date();
    const second=date.getSeconds()*6;

    const minute=(date.getMinutes())*6;
    const hour=((minute/12)+(date.getHours()*30));
    secondt.style.transform=`rotate(${second}deg)`;
    minutet.style.transform=`rotate(${minute}deg)`;
    hourt.style.transform=`rotate(${hour}deg)`;

   

}



setclock();