
function getNewVertex(canvas){

canvas.ondblclick = function(){

  if(e("object_name").value){
      if(e("x_axis").value){
          if(e("y_axis").value){
            
   putNewVertex(canvas,e("x_axis").value,e("y_axis").value);

      // The script must sync with the canvas to reflect the same image

    if(e("object_script_txt").value==""){
 e("object_script_txt").value =
            "Define 2d object" +
"Object name" + " " + e("object_name").value; 
    }

  e("object_script_txt").value +=   
"Vertex fields\n"+
"x_axis" + " " +  e("x_axis").value+
"y_axis" + " " +  e("y_axis").value
      ;
            
          }
      }
  }else{
alert("insert object name");
  }
};
  
 canvas.addEventListener('mousemove', function(event) {
     
   e("x_axis").value = event.clientX;
  e("y_axis").value = event.clientY;
   
});
}

function putNewVertex(canvas,x,y){

 var vv =  ne("label");

    vv.innerHTML = "O"
    vv.style.position = "relative";
    vv.style.left = x;
    vv.style.top = y-150;
            
    canvas.appendChild(vv);
  
}

 getNewVertex(e("2d-canvas"));

