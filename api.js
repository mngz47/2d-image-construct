
function getNewVertex(canvas){


canvas.ondblclick = function(){

  if(e("object_name").value){
      if(e("x_axis").value){
          if(e("y_axis").value){


  e("canvas-width").value = canvas.offsetWidth;
  e("canvas-height").value = canvas.offsetHeight;
            
   putNewVertex(canvas,e("x_axis").value,e("y_axis").value);

            //after recieving first point draw lines between vertexes
            
            if(p_x && p_y){
              connectVertexes(e("2d-canvas"),parseInt(p_x),parseInt(p_x),parseInt(e("x_axis").value),parseInt(e("y_axis").value));

            }else{
              p_x=e("x_axis").value;
              p_y=e("y_axis").value;
            }
            
      // The script must sync with the canvas to reflect the same image

    if(e("object_script_txt").value.trim()==""){
 e("object_script_txt").value =
            "Define 2d object" +
"Object name" + " " + e("object_name").value +
       "Canvas width "+e("canvas-width").value+"Canvas height "+e("canvas-height").value;
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

   //   var x_c = parseInt(event.clientX)-parseInt(event.offsetX);
   //   var y_c = parseInt(event.clientY)-parseInt(event.offsetY);
   
   e("x_axis").value = event.offsetX;
   e("y_axis").value = event.offsetY;
   
});

e("canvas-width").addEventListener('onblur', function(event) {

 updateCanvasProperties();
  
});

  e("canvas-height").addEventListener('onblur', function(event) {

 updateCanvasProperties();
  
});
  
}


function updateCanvasProperties(){
 var cc =  e("object_script_txt").value.split("Vertex field");

 e("object_script_txt").value = 
   cc[0].substring(0,cc[0].indexOf("Canvas width")) +
  "Canvas width "+e("canvas-width").value+"Canvas height "+e("canvas-height").value;
   
    var vertexes = e("object_script_txt").value.split("Vertex field");
    for(var a=1;(a<vertexes.length);a++){

      e("object_script_txt").value += vertexes[a];
    } 
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



function scriptToCanvasElement(canvas,script,elements){

  var stc = script.value;

  if(stc!=""){
  if(stc.includes("Define 2d object")) {
  if(stc.includes("Object name")) {
  if(stc.includes("Vertex field")) {

   var vertexes = stc.split("Vertex field");
    

//setup canvas on third party function
    
canvas.style.width = vertexes[0].substring(vertexes[0].indexOf("Canvas width")+12,vertexes[0].indexOf("Canvas height")).trim() + "px";
  canvas.style.height = vertexes[0].substring(vertexes[0].indexOf("Canvas height")+13,vertexes[0].length).trim() + "px";
    alert(canvas.style.width+" "+canvas.style.height);
    
  canvas.style.border = "1px solid black";
    canvas.style.marginLeft = "auto";
    canvas.style.marginRight = "auto";

    canvas.innerHTML = "<p style='font-size:20px;' >vertexes("+vertexes.length+"),elements("+elements.length+")</p>";

    for(var a=1;(a<vertexes.length && a<elements.length);a++){

      if(vertexes[a].includes("x_axis")){
      if(vertexes[a].includes("y_axis")){

                var x = parseInt(vertexes[a].substring(vertexes[a].indexOf("x_axis")+6,vertexes[a].indexOf("y_axis")).trim());
                var y = parseInt(vertexes[a].substring(vertexes[a].indexOf("y_axis")+6,vertexes[a].length).trim());
                
                putNewVertexElement(canvas,x,y,elements[a]);
          
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



function connectVertexes(canvas,x1,y1,x2,y2){
//  <line x1="0" y1="0" x2="300" y2="200" style="stroke:red;stroke-width:2" />

     var vv =  ne("line");

    vv.style = "stroke:red;stroke-width:2";

    vv.setAttribute("x1", x1);          // Center X position
    vv.setAttribute("y1", y1);

    vv.setAttribute("x2", x2);          // Center X position
    vv.setAttribute("y2", y2);

  //<svg id=2d-canvas style="width:100%;height:100%;border:1px solid black;" xmlns="http://www.w3.org/2000/svg">
 	//</svg>	

      

     var vvv =  ne("svg");
      vvv.setAttribute("width", ((x1-x2)>0?(x1-x2):(x2-x1))); 
      vvv.setAttribute("height", ((y1-y2)>0?(y1-y2):(y2-y1))); 
      vvv.setAttribute("xmlns", "http://www.w3.org/2000/svg"); 
  
  vvv.appendChild(vv);
    canvas.appendChild(vvv);
}


function putNewVertexSVG(canvas,x,y){

 var vv =  ne("circle");

  vv.setAttribute("cx", x);          // Center X position
  vv.setAttribute("cy", y);          // Center Y position
  vv.setAttribute("r", 5);        
  vv.setAttribute("fill", "black");        

     var vvv =  ne("svg");
      vvv.setAttribute("width", (parseInt(x)+10)); 
      vvv.setAttribute("height", (parseInt(y)+10)); 
      vvv.setAttribute("xmlns", "http://www.w3.org/2000/svg"); 

  vvv.appendChild(vv);
   canvas.appendChild(vvv);
}

function putNewVertex(canvas,x,y){

 var vv =  ne("label");

  vv.style.position = "relative";
  vv.style.borderRadius = "40%";
  vv.style.width = "10px";
  vv.style.height = "10px";
  vv.style.backgroundColor = "black";

  vv.style.left = x + "px";
  vv.style.top = y + "px";
  vv.style.display = "inline-block";
  vv.title = "x:"+x+",y:"+y;

 // vv.offsetX = x;
 // vv.offsetY = y;
  
   canvas.appendChild(vv);
}

function putNewVertexElement(canvas,x,y,element){

  element.style.position = "relative";
  element.style.left = x + "px";
  element.style.top = y + "px";
  element.style.display = "inline-block";
  element.title = "x:"+x+",y:"+y;
  //  element.offsetX = x;
  //  element.offsetY = y;
  element.style.borderRadius = "40%";
  canvas.appendChild(element);
}

e("show_on_canvas").onclick = function(){
    scriptToCanvas();
  };

 getNewVertex(e("2d-canvas"));

