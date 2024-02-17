// alert()

//commonFunction 

// function handleSelect(){
//     console.log('Boss ckick korsi');
// }

let count=0;

const allBtn= document.getElementsByClassName('add-btn'); //button clik korle select korbe 
// console.log(allBtn);

//>->all btn er sokol class k loop korbo jeno click korle sob pawa jai



for (const btn of allBtn){
    // console.log(btn);
    btn.addEventListener('click', function(event){
      //>->event click korle 1 kore count barbe
      // console.log('boss select korsi');
      count = count + 1;
      // console.log(count); //>->jotobar click korbo barbe

      //>->cart er 0 k add korbe tai innertext a count set korbo
      setInnerText("cart-count", count); //>->setInnerText function k call kore id and value pass kore dilam

      //#jetake ami click kortesi seta holo target means ami jodi event.target likhi jeita click korchi oita

      //   console.log(event.target); //<button class="add-btn">Add to Cart</button>

      const placeName = event.target.parentNode.childNodes[1].innerText;

      // console.log(placeName);

      const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
      //   console.log(price);
      //! >-> ekhane shudhu 300 k change korbo $ k korbo na ejnno h4 er chilnode 300 k select kora hoise


      //>->event.target.parentNode.childNodes

      //>->parentNode div theke childnodes console.log korle child nodes gulo dekhay ..segulo expand korle nodelist dekhay and index dekkhay ..ami name change korbo tai Shajek lekha h2 er index bosiye inner text korlam tai ota show korlo.. eta passi tai etake ekta variable a rakhbo


      const selectedContainer=document.getElementById('selected-place-container');
      const li =document.createElement('li');

      const p= document.createElement('p');
      p.innerText=placeName;
      const p2= document.createElement('p');
      p2.innerText=price;

      li.appendChild(p)
      li.appendChild(p2)

      selectedContainer.appendChild(li)

      //>-> prothome jeta main cotainer jekhane price and place show korbo setar id dhoresi then li create kore li er vetore 2 ta p tag create kore p tag k li er moddhe appendchild kore rekhe diyesi ..then li k main container a appendChild kore dilam

        //>-> simply total cost ber korbo
        const totalCost = document.getElementById('total-cost').innerText;
        console.log(typeof totalCost); //string thakbe number a convert korte hbe
        const convertedTotalCost=parseInt(totalCost);


        document.getElementById("total-cost").innerText=convertedTotalCost+ parseInt(price);

        //>-> total cost er jaigai price set korrte hobe ..ejnno price k parseInt kora hoyese karon price age string silo 
        //>-> total price ber korte total cost er inner text k convertedtotatlcost+price kore jog kora hoise



    })
}

//>->amra eitar moddhe onek innertext add korbo tai set innertext er arekta function kore nite pari


//>->jar inner text change korbo tar id nibo and new value er jnno value parameter nilam

//!id jehutu string call korar somoy string id diye call korte hbe

function setInnerText(id,value) {
      document.getElementById(id).innerText = value;
}

//totalcost er function

