let world = document.querySelector('#the-world');
let worldObj = new Map();
let toolContainer = document.querySelector('.tools-container');
let toolbutton = toolContainer.querySelectorAll('.tool-box');
let axe = document.querySelector('#Axe');
let Shovel = document.querySelector('#Shovel');
let tilesContainer = document.querySelector('.tiles-container');
let tile = document.querySelectorAll('.tile');
toolbutton = false;
axe.value = false;
Shovel.value = false;
tile = false;

const drawnWorld= [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0],
  [0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0],
  [0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0,0],
  [0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0,0],
  [0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0],
  [0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0],
  [0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0],
  [0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0],
  [0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0],
  [0,0,0,3,0,0,0,0,0,0,4,0,0,0,0,0,0,3,3,0,0,0,0,0,5],
  [5,0,0,3,0,0,0,0,0,4,4,4,0,0,0,0,0,3,3,0,0,0,0,5,5],
  [5,5,0,3,0,0,0,0,4,4,4,4,4,0,0,0,0,3,3,0,0,0,5,5,5],
  [5,5,5,3,0,0,0,4,4,4,4,4,4,4,0,0,0,3,3,0,0,5,5,5,5],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]


let dicthonery=['box', 'ground-box', 'grass-box','tree-box','leaves-box', 'rock-box', 'cloud-box'];
let inventory = [1,1,1,1,1,1]

function worldMatrix() {
  let Wmatrix = [];
  for (let col = 0; col < 30; col++) {
    Wmatrix[col] = [];
    for (let row = 0; row < 25; row++) {
      let worldDiv = document.createElement('div');
      worldDiv.classList.add(dicthonery[drawnWorld[col][row]]);
      worldDiv.id = `${col},${row}`;
      world.appendChild(worldDiv);
      worldObj.set(`${col},${row}`, { worldDiv })
    }
  }
}




worldMatrix();



function changetile(evt) {
  if (axe.value === 'true') {
    evt.target.classList.remove('tree-box');
  }
  else if (Shovel.value === 'true') {
    evt.target.classList.remove('ground-box');
  }
}


function chooseShovel() {
  if (Shovel.value === 'true') {
    Shovel.value = false;
  } else {
    Shovel.value = true;
  }
  axe.value = false;
  // need to define all the rest of the tools as 0 (build function?)
}
function chooseAxe() {
  console.log('AXXXXXXXXeeeee')
  if (axe.value === 'true') {
    axe.value = false;
  } else {
    axe.value = true;
  }
  Shovel.value = false;
  // need to define all the rest of the tools as 0 (build function?)
}
world.addEventListener('click', changetile, false);
Shovel.addEventListener('click', chooseShovel, false);
Axe.addEventListener('click', chooseAxe, false);




////// NOT IN USE /////////////
// function init() {
//   for (let col = 0; col < 30; col++) {
//     for (let r = 25; r < 30; r++) {
//       console.log(`${r},${col}`);
//       worldObj.get(`${r},${col}`).worldDiv.classList.add('ground-box');
//     }
//   }
// }