
function getNewVertex(canvas){

canvas.ondoubleclick = function(){

  if(e("object_name").value){
      if(e("x_axis").value){
          if(e("y_axis").value){
            
    var vv =  ne("label");

    vv.innerHTML = "O"
    vv.style.position = "relative";
    vv.style.left = e("x_axis").value;
    vv.style.top = e("y_axis").value;
            
    canvas.appendChild(vv);

      // The script must sync with the canvas to reflect the same image

      e("object_script_txt").value =
            "Define 2d object" +
"Object name" + " " + e("object_name").value; 
"Vertex fields\n"+
"x_axis" + " " +  e("x_axis").value+
"y_axis" + " " +  e("y_axis").value
      ;
            
          }
      }
  } 
};
  
 canvas.addEventListener('mousemove', function(event) {
     
   e("x_axis").value = event.clientX;
  e("y_axis").value = event.clientY;
   
});
}

 getNewVertex(e("2d-canvas"));

