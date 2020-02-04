/*Heather Sleyster
sleyster_a07b.js
INFO 2124
Thoendell
1/31/2020
*/


/* DO NOT MODIFY CODE BETWEEN THESE LINES */
const standardInput = process.stdin;            
standardInput.resume();
standardInput.setEncoding('utf8');
const badFoods = [];
const groceryItems = [];
clearScreen();
console.log(getPrompt(groceryItems));
/* DO NOT MODIFY CODE BETWEEN THESE LINES */

//Step 1

//function buildFoodsList invoked
buildFoodsList(badFoods, "bread", "beer", "popcorn", "bacon", "soda");        
console.log("bad foods is built");
standardInput.on('data', function (text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    //Step 4 Begin
   
    //if statement to check for exit value if true exit
if ( text == "Q" || text == "q" ) {
    clearScreen();
    console.log("Bye");
    process.exit();
}
//else if statement to check value for view list if true displays grocery list
else if (text == "V" || text == "v" ) {
    clearScreen();
    displayList(groceryItems);
    getPrompt(groceryItems);
}
    //if statement to check value of checkItem function if true adds item to list and asks for more input
else if (checkItem(text, badFoods) != true) {
    formatItem(text);
    groceryItems.push(text);
    console.log( `Item added to list! 
    List contains ${groceryItems.length} items.`);
    getPrompt(groceryItems);
}
    
    //else statement to check value of checkItem function if false outputs error message and asks for more input
else { console.log( `Error: that item is not safe for your allergies.
It has not been added to your list. 
Your grocery list contains ${groceryItems.length} items.`);
getPrompt(groceryItems);
console.log(groceryItems);
}
    //Step 4 End
});

/* DEFINE YOUR FUNCTIONS BETWEEN THIS LINE */

//Step 2

//function buildFoodsList defined to fill the badFoos array with user inputed items
function buildFoodsList(foods, ...args) {
    for (arg of args) {
        foods.unshift(arg);
        console.log("we are in the for loop");
    }
}
//function getPrompt defined to output prompt for user to input items or quit or view items
function getPrompt(grocery) {
    console.log(`Your grocery list contains ${grocery.length} items. 
    Please enter a grocery item.
    Enter Q to quit.
    Enter V to view list.`);
}
//function displayList defined to display grocery list
function displayList(groceryItems) {
    console.log("Grocery List");
    console.log( `(${groceryItems.length} items)`);
    for (let i = 0, max = groceryItems.length; i < max; i++) {
        console.log(`${i+1}). ${groceryItems[i]} `);
    }
}
//Step 3

//function checkItem defined to check if item entered is not in the badFoods array
function checkItem(string, badFoods) {
    return badFoods.includes(string);
}
//function formatItem defined to format user inputed items
function formatItem(string) {
    string.trim();
}

/* AND THIS LINE */

function clearScreen() {
    console.log('\033[2J');
}