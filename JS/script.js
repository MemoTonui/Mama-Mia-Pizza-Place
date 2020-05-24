/*Business Logic*/
var price,drinkPrice,toppingPrice ;
var totalPrice = 0;
var checkout = 0;
let deliveryFee= checkout+400;




    function pizza(name,size,toppings,drinks,quantity,total){
        this.name = name
        this.size = size;
        this.toppings= toppings;
        this.drinks = drinks;
        this.quantity = quantity;
        this.total = total;
    }



/*User Logic*/
$(document).ready(function(){
$(".orderNow").click(function(event){
event.preventDefault();
});
    /*Get values from the user*/
$("button#addToCart").click(function(event){
    event.preventDefault();
    var name =$("#pizzaname option:selected").val();
        
    var pizzaSize = $("#pizzasize option:selected").val();
   
    var pizzaDrinks = $("#pizzadrinks option:selected").val();
    
    var pizzaToppings = [];
        $.each($("input[name='toppings']:checked"),function(){
       pizzaToppings.push($(this).val());
            });
       
       var quantity = parseInt($("#quantity").val());
       
    while(checkout===NaN){
        alert("Please Indicate the quantity");
    }
        

    
    

           /*Pizza Size*/
                switch(pizzaSize){
                    case 'Small':
                        price = 600;
                        break;
                
                    case 'Medium':
                        price = 800;
                        break;
                    case 'Large':
                        price = 1000;
                        break;
                    case 'Extra Large':
                        price = 1200;
                        break;
                    case 'Super Duper Large' :
                        price = 1500;  
                        break; 
                }

                console.log(pizzaSize);

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
                totalPrice =(price + toppingPrice)*quantity;
                console.log(totalPrice);
                
                checkout = totalPrice+drinkPrice;
                

               
                $("#pizzaName").html($("#pizzaname option:selected").val());
                $("#pizzaSize").html( $("#pizzasize option:selected").val());
                $("#pizzaDrink").html($("#pizzadrinks option:selected").val());
                $("#pizzaQuantity").html(parseInt($("#quantity").val()));
                $("#pizzaTopping").html(pizzaToppings.join(", "));
                $("#totals").html(checkout);

                /*Appends the information to the table*/
                var makeOrder = new pizza(name,pizzaSize,pizzaToppings,pizzaDrinks,quantity,checkout);
                $(".choice").fadeIn(2000);
                $("table#viewOrders").append('<tr><td id="pizzaName"'+makeOrder.name+'</td><td id="pizzaSize">' + makeOrder.size + '</td><td id="pizzaTopping">'+makeOrder.toppings + '</td><td id="pizzaDrink">'+makeOrder.drinks+ '<td id=" pizzaQuantity"'+makeOrder.quantity+'</td><td id="totals">'+makeOrder.total+'</td></tr>');
                
            });
    
                
                /*Total Food Bill*/
                
                $("button#checkout").click(function(event){
                    event.preventDefault(); 
                    $("div.choose").fadeIn(2000);
                    $("button#checkout").fadeOut(1000);
                    $("#addedprice").slideDown(2000);
                    console.log("Your total bills is sh. "+checkout);
                    $("#pizzatotal").text("Your bill is sh. "+checkout);
                    
                });

                /*Total fee + Delivery*/
                $("button.deliver").click(function(event){
                    event.preventDefault();
                    $(".delivery").fadeIn(2000);
                    $(".pizzatable").fadeOut(1000);
                    $(".choice h4").fadeOut(1000);
                    $(".choose").hide();
                    $("#addedprice").hide();
                    $("button.deliver").hide();
                    $("#pizzatotal").hide();
                    let deliveryFee= checkout+400;
                    console.log("You will pay sh. "+deliveryFee+" on delivery");
                    $("#totalbill").append("Your bill plus delivery fee is: "+deliveryFee);
                    

                   
                });

                    /* Pick Up*/
                    $("button.pick").click(function(event){
                        event.preventDefault();
                        $(this).hide();
                        $(".pizzatable").hide();
                        $(".choice h4").hide();
                        $(".delivery").hide();
                        $("#addedprice").hide();
                        $("button.deliver").hide();
                        $("#pizzatotal").hide();
                        var idNo = Math.random(0,10);
                        console.log("Your Food costs: sh."+checkout+"Your id is : "+idNo);
                        $("totalbill").fadeIn(2000);
                    $("#totalbill").text("Your total bill is sh. "+checkout+". Your food will be ready in less than an hour.Please pick it in time. Your number is : " +idNo+" .Please present your number to receive your food.Thank You!");

                    });
                    $("#done").click(function(event){
                        event.preventDefault();

                         /*Delivery Information*/

                    let person = $("input#name").val();
                    let phone = $("input#phone").val();
                    let location = $("input#location").val();

                    if (person ==""||phone == ""||location== ""){
                        alert("Please fill in the details for delivery!");
                    $(".delivery").show();
                    $("button#final-order").show();
                    }
                       
                    else {

                        $(".delivery").fadeOut(1500)
                        $("#finalMessage").fadeIn(1500);
                        var finalMessage ="Thank You "+person+". We have recieved your order and it will be delivered to you at "+location+ " within an hour. CASH ON DELIVERY.";
                        $("#finalMessage").append(finalMessage);
                        
                        }
                    })
                   
                });

                
           