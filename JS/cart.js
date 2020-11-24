//counter



var arrayOfCounter = [];


function dec(e) {

  var itemId = e.target.value;

  var j = 0;

  for (var i = 0; i < arrayOfCounter.length; i++) {


    if (arrayOfCounter[i][0] == itemId) {

      j = 1;

      break;

    }

  }

  if (j == 1) {

    var counter = parseInt(document.getElementById(itemId + "CounterValue").innerHTML);

    counter = counter - 1;



    if (counter == 0) {


      arrayOfCounter.splice(i,1);

      console.table(arrayOfCounter);

      //check = itemId + "Cart";

      /*for (let i = 0; i < hold.length; i++) {



        if (hold[i] == check) {

          console.log(check);

          document.getElementById(check).remove;

          hold.pop(i);

          break;

        }

      }*/

    } else {

      arrayOfCounter[i] = [itemId, counter];

      console.table(arrayOfCounter);

    }
    document.getElementById(itemId + "CounterValue").innerHTML = counter;

    document.getElementById(itemId + "CounterValueCart").innerHTML = counter;

  }
}
function inc(e) {

  var itemId = e.target.value;

  let j = 0;

  for (var i = 0; i < arrayOfCounter.length; i++) {


    if (arrayOfCounter[i][0] == itemId) {

      j = 1;

      break;

    }

  }

  counterName = itemId + "CounterValue";

  var counter = parseInt(document.getElementById(itemId + "CounterValue").innerHTML);

  counter = counter + 1;



  arrayOfCounter[i] = [itemId, counter];

  console.table(arrayOfCounter);

  document.getElementById(itemId + "CounterValue").innerHTML = arrayOfCounter[i][1];

  document.getElementById(itemId + "CounterValueCart").innerHTML = arrayOfCounter[i][1];

  



}

//addToCart
var hold = [];

function addToCart(e) {

  var itemId = e.target.value;

  var itemIdCart = e.target.value + "Cart";

  let counter = parseInt(document.getElementById(e.target.value + "CounterValue").innerHTML);


  if (counter == 0) {


    for (var i = 0; i < hold.length; i++) {

      if (hold[i] == itemIdCart) {

        break;

      }

    }

    if (i == hold.length) {

    }

    else {

      console.log(itemIdCart);

      var el = document.getElementById(itemIdCart);

      el.remove();

      hold.pop(i-1);

      console.log(hold);

    }

  } else {

    var addToCart = e.target.parentNode.parentNode;

      console.table(hold);

      let j = 0;

      for (let i = 0; i < hold.length; i++) {

        if (hold[i] == itemIdCart) {

          j = 1;

          break;
        }


      }

      var item = addToCart.cloneNode(true);



      item.id = itemIdCart;

      item.childNodes[7].childNodes[1].childNodes[3].id = e.target.value + "CounterValueCart" ;



      var drop = item.childNodes[7].childNodes[3];

      drop.remove();

      var iDiv = document.createElement('button');

      iDiv.className = 'addToCart';

      iDiv.id = e.target.value + "AddToCart";

      iDiv.innerHTML = "Delete";

      iDiv.value = itemIdCart;

      iDiv.addEventListener("click",function (e){

        var el = document.getElementById(itemIdCart);

        el.remove();

        document.getElementById(itemId + "CounterValue").innerHTML = 0;

        console.log(hold);

        for(i =0;i<hold.length;i++){

          if(hold[i] == e.target.value) {


            hold.splice(i,1);

            break;

          }

        }

        for( i =0;i<arrayOfCounter.length;i++){
          
          console.log("hello");

          if(arrayOfCounter[i][0] == itemId) {

            

            arrayOfCounter.splice(i,1);

            break;

          }

        }
        
        console.table(arrayOfCounter);

        console.log(hold);

        
      });

      item.childNodes[7].appendChild(iDiv);

      


      if (j == 1) {

        document.getElementById(itemIdCart).replaceWith(item);

      } else {

        hold.push(itemIdCart);

      }


      //console.log(document.getElementById('burgerCart'));

      //var list = document.getElementById()
      //item.lastChild.id = "addToCart1";
      //item.childNodes[7].childNodes[1].id = "";

      //console.log(item.childNodes[7].childNodes[1]




      //console.log(item.childNodes[7].childNodes[3]);
      //console.log(document.getElementById());
      //document.getElementById("item.id").getElementByClass("addToCart").getElementById("addToCart").innerHTML = "Delete";
      document.getElementById("cart1").appendChild(item);
      // item.find('#addToCart').innerHTML = "delete";







  }

}

