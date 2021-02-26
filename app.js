let world = document.querySelector('#the-world');
let worldObj = new Map();
let toolContainer = document.querySelector('.tools-container');
let toolbutton = toolContainer.querySelectorAll('.tool-box');
let axe = document.querySelector('#Axe');
let Shovel = document.querySelector('#Shovel');
let tilesContainer= document.querySelector('.tiles-container');
let tile= document.querySelectorAll('.tile');
toolbutton = false;
axe.value = false;
Shovel.value = false;
tile= false;



function worldMatrix() {
  let Wmatrix = [];
  for (let col = 0; col < 30; col++) {
    Wmatrix[col] = [];
    for (let row = 0; row < 25; row++) {
      let worldDiv = document.createElement('div');
      worldDiv.classList.add('box');
      // worldDiv.classList.add('sky-box');
      world.appendChild(worldDiv);
      worldObj.set(`${col},${row}`, { worldDiv })
    }
  }
}



worldMatrix();



function changetile(evt) {
  if (axe.value==='true') {
    evt.target.classList.remove('tree-box');
    evt.target.classList.add('sky-box');
  }
  else if (Shovel.value==='true') {
    evt.target.classList.remove('ground-box');
    // evt.target.classList.add('sky-box');

  } else {
    evt.target.classList.remove('sky-box');
    evt.target.classList.add('ground-box');
  }
}

function chooseShovel() {
  if (Shovel.value==='true'){
    Shovel.value = false;
  } else{
    Shovel.value = true;
  }
  axe.value = false;
  console.log(Shovel.value);
  // define all the rest of the tools as 0
}
world.addEventListener('click', changetile, false);
Shovel.addEventListener('click', chooseShovel, false);


