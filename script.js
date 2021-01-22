var slider = document.querySelector('#slider');
var count = document.querySelector('#count');
var minusBtn = document.querySelector('#minus');
var plusBtn = document.querySelector('#plus');
var price = document.querySelector('#price');
console.log(price);
// functions
const btnMinus = () => {
    dataA= parseInt(count.innerHTML, 10)
    if(dataA>=4){
    count.innerHTML = dataA-1;
    slider.value = count.innerHTML;
    updateRange();
    updatePrice();
    }
};
const btnPlus = () => {
    dataA= parseInt(count.innerHTML, 10)
    if(dataA<=39){
    count.innerHTML = dataA+1;
    slider.value = count.innerHTML;
    updateRange();
    updatePrice();
    }
};
const updatePrice= () =>{
    var a = 345;
    var b= 55;
    var c = parseInt(count.innerHTML);
    var d= 3-c;
    if(d<=0){
        d= d*-1;
        price.innerHTML= a + b*d;
    }

};
const updateRange = () =>{
    var x = count.innerHTML;
    var y = x*100/40;
    var z = y-5;
    var color = "linear-gradient(90deg, #284DD9 "+z+"%, #595773 "+z+"%)";
    slider.style.background= color;
    console.log(slider.value);
};
plusBtn.addEventListener("click", btnPlus);
minusBtn.addEventListener("click", btnMinus);
count.innerHTML= slider.value;
slider.oninput = function(){
    count.innerHTML = this.value;
    updateRange();
    updatePrice();
};

