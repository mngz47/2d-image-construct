
function getNewVertex(canvas){

canvas.ondblclick = function(){

  if(e("object_name").value){
      if(e("x_axis").value){
          if(e("y_axis").value){
            
   putNewVertex(canvas,e("x_axis").value,e("y_axis").value);

            //after recieving first point draw lines between vertexes
            
            if(p_x && p_y){
              connectVertexes(e("2d-canvas"),p_x,p_x,e("x_axis").value,e("y_axis").value);

            }else{
              p_x=e("x_axis").value;
              p_y=e("y_axis").value;
            }
            
      // The script must sync with the canvas to reflect the same image

    if(e("object_script_txt").value.trim()==""){
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
//  <line x1="0" y1="0" x2="300" y2="200" style="stroke:red;stroke-width:2" />

     var vv =  ne("line");

    vv.style = "stroke:red;stroke-width:2";
    vv.x1 = x1;
    vv.y1 = y1;
       vv.x2 = x2;
       vv.y2 = y2;
            
    canvas.appendChild(vv);
}

    var p_x;
    var p_y;


function scriptToCanvas(){

  e("2d-canvas").innerHTML = "";

  var stc = e("object_script_txt").value;
  
  if(stc!=""){
  if(stc.includes("Define 2d object")) {
  if(stc.includes("Object name")) {
  if(stc.includes("Vertex field")) {

    var p_x;
    var p_y;

    var vertexes = stc.split("Vertex field");
    for(var a=1;a<vertexes.length;a++){

      if(vertexes[a].includes("x_axis")){
      if(vertexes[a].includes("y_axis")){

                var x = parseInt(vertexes[a].substring(vertexes[a].indexOf("x_axis")+6,vertexes[a].indexOf("y_axis")).trim());
                var y = parseInt(vertexes[a].substring(vertexes[a].indexOf("y_axis")+6,vertexes[a].length).trim());
                
                if(a<2){
        putNewVertex(e("2d-canvas"),x,y);
                }else{
        putNewVertex(e("2d-canvas"),x,y);
                  if(p_x && p_y){     
        connectVertexes(e("2d-canvas"),p_x,p_x,x,y);
                  }else{
        alert("'vertex "+a+"' not connected");
     
                  }
      }

                  p_x = x;
                  p_y = y;
          
      }else{
        alert("'y_axis "+a+"' not found");
      } 
      }else{
        alert("'x_axis "+a+"' not found");
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

    vv.innerHTML = "O";
    vv.style.position = "relative";
    vv.style.left = x;
    vv.style.top = y;
            
    canvas.appendChild(vv);
  
}

e("show_on_canvas").onclick = function(){
    scriptToCanvas();
  };

 getNewVertex(e("2d-canvas"));

