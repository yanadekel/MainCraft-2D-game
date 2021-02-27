let world = document.querySelector('#the-world');
let worldObj = new Map();
let toolContainer = document.querySelector('.tools-container');
let toolbutton = toolContainer.querySelectorAll('.tool-box');
let Axe = document.querySelector('#Axe');
let Pickaxe = document.querySelector('#Pickaxe');
let Shovel = document.querySelector('#Shovel');
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
let dicMaterial = ['box', 'ground-box', 'grass-box', 'tree-box', 'leaves-box', 'rock-box', 'cloud-box']

let toolMaterial = {
  'box': '',
  'ground-box': 'Shovel',
  'grass-box': 'Shovel',
  'tree-box': 'Axe',
  'leaves-box': 'cutter',
  'rock-box': 'Pickaxe',
  'cloud-box': ''
}

let actionstate ={
  tool: '',
  material: '',
  using: ''
}

// create object that holds for each class: its name, tool-type, inventory, ...;
// use 
let tileObj = new Map();;
dicMaterial.map(el => (
  tileObj.set(el, {
    name: el,
    inventory: 0,
    // changeInvDisplay: inventory.onchange = function (el) { tile.getElementsByClassName(el).innerText = this.inventory; },
    tool: toolMaterial[el],
  })
));

// create main world div with internal cells of tiles using predefined drawnWorld
function worldMatrix() {
  let Wmatrix = [];
  for (let col = 0; col < 30; col++) {
    Wmatrix[col] = [];
    for (let row = 0; row < 25; row++) {
      let worldDiv = document.createElement('div');
      worldDiv.classList.add(dicMaterial[drawnWorld[col][row]]);
      worldDiv.id = `${col},${row}`;
      world.appendChild(worldDiv);
      worldObj.set(`${col},${row}`, { worldDiv })
    }
  }
}

worldMatrix();


// create counter for each inventory

function changetile(evt) {
  // using tool or material 
  if (actionstate.using === 'tool') {
    evt.target.classList.remove(Object.keys(toolMaterial).find(key => toolMaterial[key] === actionstate.tool));
    evt.target.classList.add('box');
  } 
  else if (actionstate.using === 'material'){
    evt.target.classList.add(actionstate.material);
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

function chooseTile(evnt){
  let localMaterial = evnt.target.classList[1];

  if (actionstate.material === localMaterial && actionstate.using === 'material'){
    actionstate.using = '';
  } else{
    actionstate.tool = toolMaterial[localMaterial];
    actionstate.material =  localMaterial;
    actionstate.using = 'material';
    console.log('using ' + localMaterial )
  }
}

// create mouse object with
//      place to account for tool to use
//      place to account for material to implement



world.addEventListener('click', changetile, false);
toolContainer.addEventListener('click', chooseTool, false);
tilesContainer.addEventListener('click', chooseTile, false);

