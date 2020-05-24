/*Business Logic*/
var price,drinkPrice,toppingPrice ;
var totalPrice = 0;

    function pizza(name,size,toppings,drinks,quantity){
        this.name = name
        this.size = size;
        this.toppings= toppings;
        this.drinks = drinks;
        this.quantity = quantity;
    }



/*User Logic*/
$(document).ready(function(){

    /*Get values from the user*/
$("#addToCart").click(function(event){
        
   var pizzaSize = $("#size option:selected").val();
   var pizzaToppings = [];
   $.each($("input [name='toppings']:checked")),function(){
       pizzaToppings.push($(this).val());
 }
        console.log(pizzaToppings.join(" "));
        var quantity = parseInt($("#quantity"));
        if(quantity == ""){
            alert("please enter the quantity!");
        }
        else{
            console.log(quantity);
        }

        var name =$("#menu").val();
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
                console.log(pizzaSize);
                /*Pizza Drinks*/
                if(pizzaDrinks=="0"){
                    drinkPrice = 0;
                }
                else{
                    drinkPrice= 80;
                }
                console.log(pizzaDrinks)

                /*Pizza toppings*/
                toppingPrice = pizzaToppings.length*150;

                /*Total Price*/
                totalPrice = price + drinkPrice + toppingPrice;
                console.log(totalPrice);

                var checkout = 0;
                checkout = (totalPrice*quantity);
                console.log(checkout);

                /*Appends the information to the table*/
                var makeOrder = new pizza(name,pizzaSize,pizzaToppings,drinkPrice,quantity);
                $("#viewOrders").append('<td id=" pizzaname"'+makeOrder.name+'</td><td id="pizzasize">' + makeOrder.pizzaSize + '</td><td id="pizzatopping">'+makeOrder.pizzaToppings + '</td><td id="pizzaDrink">'+makeOrder.drinkPrice+ '<td id=" pizzaQuantity"'+makeOrder.quantity+'</td><td id="totals">'+makeOrder.total+'</td></tr>');
                console.log(makeOrder.name);


                
                /*Total Food Bill*/
                $("button#checkout").click(function(){ 
                    $("button#checkout").hide();
                    $("button.deliver").slideDown(1000);
                    $("#addedprice").slideDown(1000);
                    console.log("Your total bills is sh. "+checkout);
                    $("#pizzatotal").append("Your bill is sh. "+checkout);
                });

                /*Total fee + Delivery*/
                $("button.deliver").click(function(){
                    $(".pizzatable").hide();
                    $(".choise h2").hide();
                    $(".delivery").slideDown(1000);
                    $("#addedprice").hide();
                    $("button.deliver").hide();
                    $("#pizzatotal").hide();
                    let deliveryFee= checkoutTotal+400;
                    console.log("You will pay sh. "+deliveryFee+" on delivery");
                    $("#totalbill").append("Your bill plus delivery fee is: "+deliveryFee);

                    /*Delivery Information*/

                    let person = $("input#name").val();
                    let phone = $("input#phone").val();
                    let location = $("input#location").val();

                    if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){

                    $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliveryFee);
                    $("#totalbill").hide();
                    $("#finallmessage").slideDown(1200);
                    }
                    else {
                    alert("Please fill in the details for delivery!");
                    $(".delivery").show();
                    $("button#final-order").show();
                    }
                });

                    /* Pick Up*/
                    $("button.pick").click(function(){
                        $(".pizzatable").hide();
                        $(".choise h2").hide();
                        $(".delivery").slideDown(1000);
                        $("#addedprice").hide();
                        $("button.deliver").hide();
                        $("#pizzatotal").hide();
                        var idNo = Math.random(0,100);
                        console.log("Your Food costs: sh."+checkoutTotal+"Your id is : "+idNo);
                    $("#totalbill").append("Your total bill is "+checkoutTotal+".Your food will be ready in less than an hour.Please pick it in time.You number is :" +idNo+"Please present your number to receive your food.");

                    });
                    event.preventDefault();
                });

                });
