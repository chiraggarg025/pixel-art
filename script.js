/* console.log("hi");*/
const container = document.getElementById("container");
var color = 'black';
document.getElementById('clear').addEventListener('click',function(){
    location.reload();
})
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 1; c <= (rows * cols); c++) {
    let cell = document.createElement("div");
    /* console.log() */
    
    cell.setAttribute('id',c);
    if(c>(rows*cols)-Math.max(rows,cols)){
    	cell.style.backgroundColor=getRandomColor();
      cell.addEventListener('click',function catchColor(){
        let div = document.getElementById(this.id);
        color = div.style.backgroundColor;
      });
    }else{
    	cell.addEventListener('click',function changeColor(event){
					let div =document.getElementById(this.id);
          div.style.backgroundColor=color;
    	});
    	
    }
    
    
    container.appendChild(cell).className = "grid-item";
  }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
makeRows(10, 11);