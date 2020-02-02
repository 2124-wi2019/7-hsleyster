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
buildFoodsList (badFoods, "bread", "beer", "popcorn", "bacon", "soda");        

standardInput.on('data', function (text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    //Step 4 Begin
   
    //if statement to check for exit value if true exit
if ( text === "Q" || "q" ) {
    clearScreen();
    console.log("Bye");
    process.exit();
}
   //else if statement to check for exit value if false then invoke the checkItem function 
else if (text != "Q" || "q" ) {
    clearScreen();
    checkItem(text, badFoods);
}
    //if statement to check value of checkItem function if true adds item to list and asks for more input
if (checkItem(text, badFoods) != true) {
    formatItem(text);
    groceryList.push(text);
    console.log( `Item added to list! /n
    List contains ${groceryList.length} items. /n
    Please enter a grocery item. /n
    Enter Q to quit.`);
}
    //else if statement to check value for view list if true displays grocery list
else if (text === "V" || "v" ) {
    clearScreen();
    displayList(groceryList);
    getPrompt(groceryList);
}
    //else statement to check value of checkItem function if false outputs error message and asks for more input
else { console.log( `Error: that item is not safe for your allergies.
It has not been added to your list. /n
Your grocery list contains ${groceryList.length} items. /n
Please enter a grocery item. /n
Enter Q to quit.`);
getPrompt(groceryList);
console.log(groceryList);
}
    //Step 4 End
});

/* DEFINE YOUR FUNCTIONS BETWEEN THIS LINE */

//Step 2

//function buildFoodsList defined to fill the badFoos array with user inputed items
function buildFoodsList (badFoods, ...args) {
    for (arg of args) {
        badFoods.unshift(arg);
    }
}
//function getPrompt defined to output prompt for user to input items or quit or view items
function getPrompt (groceryList) {
    console.log(`Your grocery list contains ${groceryList.length} items. 
    Please enter a grocery item.
    Enter Q to quit./n Enter V to view list.`);
}
//function displayList defined to display grocery list
function displayList (groceryList) {
    console.log("Grocery List");
    console.log( `(${groceryList.length} items)`);
    for (let i = 0; max = groceryList.length; i < max, i++) {
        console.log(`${i}). ${groceryList[i]} `);
    }
}
//Step 3

//function checkItem defined to check if item entered is not in the badFoods array
function checkItem (string, badFoods) {
    badFoods.toLowerCase();
    badFoods.includes(string);
    badFoods.toUpperCase(index0);
}
//function formatItem defined to format user inputed items
function formatItem (string) {
    string.trim();
}

/* AND THIS LINE */

function clearScreen() {
    console.log('\033[2J');
}