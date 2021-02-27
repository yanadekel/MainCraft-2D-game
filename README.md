# MainCraft-2D-game
build 2D game with JS

HTML structure
   The HTML body structure is built by three sections: header, main and footer. The header contains the inventory of the game contains both the material inventory (tiles) and tool inventory.  The main section contains the “game world” matrix. And the footer contains a game reset/log-out buttons.

CSS structure
   The CSS structure holds all the styles of the element tags in HTML as well those populated by the JavaScript.


JavaScript 

**Initialization**
    To create the 2D world I used a loop function upon a previously created array object “drawnWorld”. The “drawnWorld” object holds a hard-coded matrix (array of arrays) that is manifested of 6 integers, each of which represents a material type. To match the number to a specific material class, I used the “dictionaryMaterial” array where the indexes are associated with the integers in the “drawnWold” matrix, thus providing the appropriate class name to each integer provided.
    In the function “worldMatrix” I defined columns and rows to create and populate the world with “tile” divs. I used the dictionary material array to fill each div with its class image = material. 

**Event-listeners**
    Each of the three areas used throughout the game – tools, inventory tiles, and world – have an event lister function associated with them. Each event listener holds an appropriate callback function:
    1.	Tools – the callback function “chooseTool” updates the tool in use.
    2.	Inventory Tiles – the callback function “chooseTile” updates the kind of material you want to use.
    3.	World -  the callback function “changeTile” is responsible for removing and placing material according to the tool or material chosen.

    To determine the kind of event, I used three objects: “toolMaterial”, “actionstate”, and “counter” objects. 

**Objects**
    The “toolMaterial” object: associates the type of material with the appropriate tool. This comes in use when we need to determine the material or tool needed when only one is known. 
    The “actionstate” object  helps determine what the state of the game is in reference to material, tool and mode of use (implement “material” or use “tool”). The “actionstate” object helps us to remember the number of tiles in the in material inventory container. 
    The “counter” object, holds the account of inventory for each material. If we intend to implement a material, the counter is checked whether there is sufficient inventory to use.

**Functions**
    The “chooseTile” function: uses the actionstate object and the toolMaterial object. The function first checks whether you already have the material on hand, by evaluating the state defined by the properties of the actionstate, and comparing to the properties of the tile material. If you do have the material on hand, then the function “unclicks” the tile and updates the actionstate object. Otherwise, the function associates the chosen material, as well as the tool and the mode of use (implement material). 
    The “chooseTool” function is a twin of the chooseTile function but instead of updating the actionstate object to a state of implementing material it updates it to a state of using a tool.
    The “changeTile” function: checks, first, in what mode the actionstate is. Meaning, whether the state is using a tool or implementing material. After verifying the usage, the function checks whether the tool/material we are using is appropriate to the div, which was clicked. Furthermore, if we are implementing a material, it also checks whether we hold any inventory of that certain material. To add/remove material, the function removes the material class and adds “background” class or visa-versa. Also, the function updates the inventory counter accordingly.

