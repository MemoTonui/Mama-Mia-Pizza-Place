/*Business Logic*/
var price,drinkPrice,toppingPrice ;
var totalPrice = 0;

    function pizza(name,size,toppings,drinks,quantity,totalPrice){
        this.name = name
        this.size = size;
        this.toppings= toppings;
        this.drinks = drinks;
        this.quantity = quantity;
        this.totalPrice = totalPrice
    }



/*User Logic*/
$(document).ready(function(){
$(".orderNow").click(function(event){
event.preventDefault();
});
    /*Get values from the user*/
$("button#addToCart").click(function(){
    var name =$("#pizzaname option:selected").val();
    alert(name);    
    var pizzaSize = $("#pizzasize option:selected").val();
   alert(pizzaSize);
    var pizzaDrinks = $("#pizzadrinks option:selected").val();
    alert(pizzaDrinks);
    var pizzaToppings = [];
        $.each($("input [name='toppings']:checked")),function(){
       pizzaToppings.push($(this));
            }
       console.log(pizzaToppings.join(" "));
       alert(pizzaToppings);
    var quantity = parseInt($("#quantity").val());
    alert(quantity);
        if(quantity == " "){
            alert("please enter the quantity!");
        }
        else{
            console.log(quantity);
        }

    
    

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
                        break; 
                }
                alert(price);

                console.log(pizzaSize);

                /*Pizza Drinks*/
                if(pizzaDrinks=="0"){
                    drinkPrice = 0;
                }
                else{
                    drinkPrice= 80;
                }
                alert(drinkPrice)
                console.log(pizzaDrinks)

                /*Pizza toppings*/
                toppingPrice = pizzaToppings.length*150;
                
                /*Total Price*/
                totalPrice =(price + toppingPrice)*quantity;
                console.log(totalPrice);
                alert(totalPrice);

                var checkout = 0;
                checkout = totalPrice+drinkPrice;
                alert(checkout)
                console.log(checkout);

                $("#pizzaName").html($("#pizzaname option:selected").val());
                $("#pizzaSize").html( $("#pizzasize option:selected").val());
                $("#pizzaDrink").html($("#pizzadrinks option:selected").val());
                $("#pizzaQuantity").html(parseInt($("#quantity").val()));
                $("#pizzaTopping").html(pizzaToppings.join(", "));
                $("#totals").html(checkout);

                /*Appends the information to the table*/
                var makeOrder = new pizza(name,pizzaSize,pizzaToppings,pizzaDrinks,quantity,totalPrice);
                $("#viewOrders").append('<tr><td id="pizzaName"'+makeOrder.name+'</td><td id="pizzaSize">' + makeOrder.size + '</td><td id="pizzaTopping">'+makeOrder.toppings + '</td><td id="pizzaDrink">'+makeOrder.drinks+ '<td id=" pizzaQuantity"'+makeOrder.quantity+'</td><td id="totals">'+makeOrder.totalPrice+'</td></tr>');
                alert(makeOrder.name);
                alert(makeOrder.size);
                alert(makeOrder.toppings);
                console.log(makeOrder.name);
            });

                
                /*Total Food Bill*/
                
                $("button#checkout").click(function(){ 
                    alert("work");
                    $("button#checkout").hide();
                    $("button.deliver").slideDown(1000);
                    $("#addedprice").slideDown(1000);
                    console.log("Your total bills is sh. "+checkout);
                    $("#pizzatotal").append("Your bill is sh. "+checkout);
                });

                /*Total fee + Delivery*/
                $("button.deliver").click(function(event){
                    event.preventDefault();
                    alert("work");
                    $(".pizzatable").hide();
                    $(".choice h2").hide();
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
                   
                });

                
           