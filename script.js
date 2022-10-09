const textarea=document.getElementById("textarea")

const labelarea=document.getElementById("labelarea")
const btn=document.getElementById("enviar")
textarea.addEventListener("focus",()=>{

    if(window.innerWidth>1700){
    labelarea.style="font-size:0.8rem; top:2%;font-weight:700";

}
    else{
        labelarea.style="font-size:0.8rem; top:7%;font-weight:700";
    }
   
})

textarea.addEventListener("focusout",()=>{
    var text = document.getElementById("textarea").value;
    if(text=="" && window.innerWidth>1700){
    labelarea.style="font-size:1rem; top:5%";}
    else{
        labelarea.style="font-size:1rem; top:10%";
    }
}
  
)
btn.addEventListener("click",()=>{

    console.log(text)
})