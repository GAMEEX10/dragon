var index = 0;

si(index);

function si(i){
    index +=1;
    
    var imx = document.getElementsByClassName("imf");
    var dts = document.getElementsByClassName("d");
    
    for(i=0; i < imx.length;i++)
    imx[i].style.display = "none";
    
    for(i=0; i < dts.length;i++)
    dts[i].className = dts[i].className.replace(" xx", "");
    
    if (index > imx.length - 1)
    index = 0;
    
    if (index < 0)
    index = imx.length - 1;
   
   imx[index].style.display = "block";
   dts[index].className += " xx";
   
}