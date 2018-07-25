var todos = ["Everything starts here"];

var input = prompt("what would you like to do?");


while(input !== "quit")
{
    if(input == "new")
    {
       AddNewTodo();
    } else if (input == "list")
    {
        DisplayTodo();
    }
    else if (input === "delete")
    {
        DeleteTodo();
    }
    else
    {
        alert("enter a valid action");
    }

    input = prompt("what would you like to do?");
}
console.log("Ok see you later");


function AddNewTodo(){
    var message = prompt("Enter your item");
    todos.push(message);
}
function DisplayTodo(){
    console.log("*************");
    var reversetodo = todos.reverse();
    reversetodo.forEach(function (todo , i)
    {
                console.log( i + " : " + todo);
        console.log("************");
    });
    
}
function DeleteTodo(){
    var index = prompt("Enter the item number to delete");
    todos.splice(index,1);
}