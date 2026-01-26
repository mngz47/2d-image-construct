
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
"Vertex field\n"+
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

function connectVertexes(canvas,x1,y1,x2,y2){

}

function scriptToCanvas(){

  var stc = e("object_script_txt").value;
  
  if(stc!=""){
  if(stc.includes("Define 2d object")) {
  if(stc.includes("Object name")) {
  if(stc.includes("Vertex field")) {

    var p_x;
    var p_y;

    var vertexes = stc.split("Vertex field");
    for(var a=1;a<vertexes.length();a++){

              
      
        if(a<2){
        putNewVertex(canvas,x,y);
        }else{
        putNewVertex(canvas,x,y);
        connectVertexes(canvas,x1,y1,x2,y2)
       
        }
    }

    
  }else{
alert("'Vertex field' not found");
  } 
  }else{
alert("'Object name' not found");
  } 
  }else{
alert("'Define 2d object' not found");
  }
  }else{
alert("Insert script");
  }
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

