let world = document.querySelector('#the-world');
let worldObj = new Map();
let toolContainer = document.querySelector('.tools-container');
let toolbutton = toolContainer.querySelectorAll('.tool-box');
let Axe = document.querySelector('#Axe');
let Pickaxe = document.querySelector('#Pickaxe');
let Shovel = document.querySelector('#Shovel');
let Hoe=document.querySelector('#Hoe');
let sword=document.querySelector('#sword');
let Stick=document.querySelector('#Stick');


let tilesContainer = document.querySelector('.tiles-container');
let tile = document.querySelector('.tile');
let tileGround = document.querySelector('.ground-box')




const drawnWorld = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
  [0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0],
  [0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0],
  [0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0],
  [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0],
  [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0],
  [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 5],
  [5, 0, 0, 3, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 5],
  [5, 5, 0, 3, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 3, 0, 0, 0, 5, 5, 5],
  [5, 5, 5, 3, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 3, 0, 0, 5, 5, 5, 5],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

]
let dictionaryMaterial = ['box', 'ground-box', 'grass-box', 'tree-box', 'leaves-box', 'rock-box', 'cloud-box']

let toolMaterial = {
  'box': '',
  'ground-box': 'Shovel',
  'grass-box': 'Hoe',
  'tree-box': 'Axe',
  'leaves-box': 'Stick',
  'rock-box': 'Pickaxe',
  'cloud-box': 'sword'
}

let actionstate = {
  tool: '',
  material: '',
  using: ''
}

let counter = {
  'box': 0,
  'ground-box': 0,
  'grass-box': 0,
  'tree-box': 0,
  'leaves-box': 0,
  'rock-box': 0,
  'cloud-box': 0
}



// create main world div with internal cells of tiles using predefined drawnWorld
function worldMatrix() {
  let Wmatrix = [];
  for (let col = 0; col < 30; col++) {
    Wmatrix[col] = [];
    for (let row = 0; row < 25; row++) {
      let worldDiv = document.createElement('div');
      worldDiv.classList.add(dictionaryMaterial[drawnWorld[col][row]]);
      worldDiv.id = `${col},${row}`;
      world.appendChild(worldDiv);
      worldObj.set(`${col},${row}`, { worldDiv })
    }
  }
}

worldMatrix();



function changetile(evt) {
  // using tool or material

  if (actionstate.using === 'tool' && evt.target.className === actionstate.material) {
    // remove tile/material 
    evt.target.classList.remove(actionstate.material);
    evt.target.classList.add('box');
    counter[actionstate.material] += 1;
    document.querySelector(`.${actionstate.material}`).textContent = counter[actionstate.material];

  }
  else if (actionstate.using === 'material' && counter[actionstate.material] > 0 && evt.target.className === "box") {
    // place tile or material
    evt.target.classList.remove('box');
    evt.target.classList.add(actionstate.material);
    counter[actionstate.material] -= 1;
    document.querySelector(`.${actionstate.material}`).textContent = counter[actionstate.material];
  }
}

function chooseTool(evnt) {
  if (actionstate.tool === evnt.target.id && actionstate.using === 'tool') {
    actionstate.using = '';
  } else {
    actionstate.tool = evnt.target.id;
    actionstate.material = Object.keys(toolMaterial).find(key => toolMaterial[key] === evnt.target.id);
    actionstate.using = 'tool';
  };
}




function chooseTile(evnt) {
  let localMaterial = evnt.target.classList[1];

  if (actionstate.material === localMaterial && actionstate.using === 'material') {
    actionstate.using = '';
  } else {
    actionstate.tool = toolMaterial[localMaterial];
    actionstate.material = localMaterial;
    actionstate.using = 'material';
  }
}



world.addEventListener('click', changetile, false);
toolContainer.addEventListener('click', chooseTool, false);
tilesContainer.addEventListener('click', chooseTile, false);

