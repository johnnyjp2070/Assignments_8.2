var food = ['Burger', 'Pasta', 'Coke']
var tab_number = 7
function prepareFood(table_number, items, callBk){
    console.log('preparing food for items - ' , items)
    callBk(table_number, items)
}

var serveFood = function(table_number, cooked_items){
    console.log('serving food for items - ' , cooked_items)
}
prepareFood(tab_number,food, serveFood)
