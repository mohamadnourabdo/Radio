document.getElementById("section1").style.height=screen.height+"px";
document.getElementById("div").style.height=screen.height-270+"px";
var AUDIO=document.getElementById("audio");
var TITLE=document.getElementById("p2");
var BUTTON1=document.getElementById("b1");
var BUTTON2=document.getElementById("b2");
var VOLUME=document.getElementById("volume");
var SPEED=document.getElementById("speed");
var COLORINPUT=document.getElementById("colorinput");
class RadioName{
    constructor(){
        this.counter;
        this.ArrayRadio=[];
        this.ArrayRadio[0]="http://radioliveb.rtv.gov.sy:8002/RadioShabab";
        this.ArrayRadio[1]="http://asima.out.airtime.pro:8000/asima_a";
        this.ArrayRadio[2]="https://l3.itworkscdn.net/itwaudio/9030/stream";
        this.ArrayRadio[3]="http://radioliveb.rtv.gov.sy:8008/RadioSouryana";
        this.ArrayTitle=[];
        this.ArrayTitle[0]="أغاني طرب سورية";
        this.ArrayTitle[1]="قناة تلاوة القرآن";
        this.ArrayTitle[2]="منوعات سورية";
        this.ArrayTitle[3]="أغاني سورية عصرية";
        this.counter=0;
        BUTTON2.onclick=()=>{
            this.MyMethodOfRadioImportant1();
            AUDIO.play();
        }
        BUTTON1.onclick=()=>{
            this.MyMethodOfRadioImportant2();
            AUDIO.play();
        }
    }
    MyMethodOfRadioImportant1(){
if(this.counter<this.ArrayRadio.length-1){
this.counter++;
}else{
this.counter=0;
}
AUDIO.setAttribute("src",this.ArrayRadio[this.counter]);
TITLE.innerHTML=this.ArrayTitle[this.counter];
localStorage.setItem("RADIONUMBER",this.ArrayRadio[this.counter]);
localStorage.setItem("RADIOTITLE",this.ArrayTitle[this.counter]);
}
MyMethodOfRadioImportant2(){
    if(this.counter>0){
        this.counter--;
        }else{
        this.counter=3;
        }
        AUDIO.setAttribute("src",this.ArrayRadio[this.counter]);
        TITLE.innerHTML=this.ArrayTitle[this.counter];
        localStorage.setItem("RADIONUMBER",this.ArrayRadio[this.counter]);
        localStorage.setItem("RADIOTITLE",this.ArrayTitle[this.counter]);
}
}
onload=new RadioName();
var isMusic;
function MyMusic(){
    if(isMusic==false){
        document.getElementById("imgplay").setAttribute("src","photo/2.png");
        AUDIO.play();
        isMusic=true;
    }else{
        document.getElementById("imgplay").setAttribute("src","photo/1.png");
        AUDIO.pause();
        isMusic=false;
    }
}
COLORINPUT.onchange=()=>{
    document.getElementById("div").style.backgroundColor=COLORINPUT.value;
    document.getElementById("p1").style.backgroundColor=COLORINPUT.value;
    COLORINPUT.value=COLORINPUT.value;
    localStorage.setItem("color",COLORINPUT.value);
};
VOLUME.onchange=()=>{
    AUDIO.volume=VOLUME.value/100;
};
SPEED.onchange=()=>{
    AUDIO.playbackRate=SPEED.value/100;
}
var o2=document.getElementById("imgplay");
o2.onclick=()=>{
    MyMusic();
};
addEventListener("load",MyMusic);
onload=()=>{
    
    AUDIO.setAttribute("src",localStorage.getItem("RADIONUMBER"));  
    if(localStorage.getItem("RADIOTITLE")){
        TITLE.innerHTML=localStorage.getItem("RADIOTITLE");
    }
    else{
        TITLE.innerHTML="RADIO SYRIANA";
    }
    document.getElementById("div").style.backgroundColor=localStorage.getItem("color");
    document.getElementById("p1").style.backgroundColor=localStorage.getItem("color");
    COLORINPUT.value=localStorage.getItem("color");
};