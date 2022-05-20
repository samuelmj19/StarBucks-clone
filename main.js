
function showMenu(){
    const menu = document.querySelector('.nav--responsive-menu_hidden').classList.toggle('active')
}
function showFooterInfo(){
    const info =document.querySelector('.hidden-info--button').classList.toggle('active')
}

function showInfo(newTittle, newInfo,newImg){
    const tittle = document.getElementById('favoriteTittle');
    const info = document.getElementById('favoriteInfo');
    const image =document.querySelector('#favoriteImg')
    tittle.innerHTML = newTittle;
    info.innerHTML = newInfo;
    image.setAttribute('src', newImg)
}
function button25(){
    let newTittle = "Customize your drink";
    let newInfo = "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.";
    let newImg = "./img/025.webp"
    showInfo(newTittle,newInfo,newImg);
}
function button50(){
    let newTittle = "Brewed hot coffee, bakery item or hot tea";
    let newInfo = "Pair coffee cake or an almond croissant with your fresh cup of hot brew.";
    let newImg = "./img/050.webp"
    showInfo(newTittle,newInfo,newImg);
}
function button150(){
    let newTittle = "Handcrafted drink, hot breakfast or parfait";
    let newInfo = "Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.";
    let newImg = "./img/150.png"
    showInfo(newTittle,newInfo,newImg);
}
function button200(){
    let newTittle = "Salad, sandwich or protein box";
    let newInfo = "Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.";
    let newImg = "./img/200.webp"
    showInfo(newTittle,newInfo,newImg);
}
function button400(){
    let newTittle = "Select merchandise or at-home coffee";
    let newInfo = "Take home a signature cup, a bag of coffee or your choice of select coffee accessories.";
    let newImg = "./img/400.webp"
    showInfo(newTittle,newInfo,newImg);
}