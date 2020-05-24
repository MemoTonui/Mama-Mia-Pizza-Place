var price,drinkPrice,toppingPrice ;
var totalPrice = 0;
function cart(){
    var pizzaCart = [];

    function pizza(size,toppings,drinks,quantity){
        this.size = size;
        this.toppings= toppings;
        this.drinks = drinks;
        this.quantity = quantity;
    }

}

 $(document).ready(function(){

    $(".orderNow").click(function(){
   var pizzaSize = $("#size option:selected").val();
   var pizzaToppings = [];
   pizzaToppings.each($("input [name='toppings']:checked")),function(){
       pizzaToppings.push($(this).val());
 }
 var pizzaDrinks = $("#drinks option:selected").val();
 /*Pizza Size*/
 switch(pizzaSize){
     case 'small':
         price = 600;
         break;
 
    case 'medium':
        price = 800;
        break;
    case 'large':
        price = 1000;
        break;
    case 'xLarge':
        price = 1200;
        break;
    case 'sdLarge' :
        price = 1500;   
 }
/*Pizza Drinks*/
if(pizzaDrinks=="0"){
    drinkPrice = 0;
}
else{
    drinkPrice= 80;
}

/*Pizza toppings*/
 toppingPrice = pizzaToppings.length*150;

 /*Total Price*/
 totalPrice = price + drinkPrice + toppingPrice;
 console.log(totalPrice);


   

});
});