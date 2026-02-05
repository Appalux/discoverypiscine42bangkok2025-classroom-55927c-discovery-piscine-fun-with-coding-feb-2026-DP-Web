document.getElementById("changeBtn").addEventListener("click",function(){
    document.body.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
});