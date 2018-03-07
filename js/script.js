
function drawTree(height) {
    for (var i = 0; i < height; i++) {
      var star = '';
      
      for (var j = -1; j < height - i; j++) {
        star += ' ';
      }
      for (var j = -1; j < (2*i); j++) {
        star += '*';
      }
      console.log(star);
    }
  }  
  
  drawTree(7);