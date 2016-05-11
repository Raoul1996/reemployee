window.onload=function(){
    var oLi=document.getElementById('nav').getElementsByTagName('li')
    for(var i=0; i<oLi.length-1; i++){
        oLi[i].index=i;
        oLi[i].onmouseover=function () {
            this.style.background="#4593FD";
        }
        oLi[i].onmouseout=function () {
            this.style.background="#1369C0";
        }
    }
}