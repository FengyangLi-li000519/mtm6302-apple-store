//target element
const $container = document.getElementById('container')
const $addRed = document.getElementById('add-red')
const $addGreen = document.getElementById('add-green')
const $addBlue = document.getElementById('add-blue')
const $buttonSet = document.getElementById('button-set')
//variables
const itemInfo = {
    title:'Apple',
    price: 9.99,
    description:'tasty fruit,perfect with cheese or peanut butter.',
    quantity:10
}

let itemCount = 0
 
let cart = []




//function
function capitalize(inputString){
    return inputString[0].toUpperCase() + inputString.substring(1)
}

function addItem(event){
    const color = event.target.dataset.color
    console.log(event)

    const itemElement = 
    `<div id='item-${itemCount}' class='item'>
    <p>${capitalize(color)}${itemInfo.title}</p>
    <p>$${itemInfo.price}</p>
    <p>${itemInfo.description}</p>
    <p class='quantity-remaining'><span>${itemInfo.quantity}</span> remaining</p>
    <p>
    <span>Quantity</span>
    <button class='plus'>+</button>
    <button class='minus'>-</button>
    <span class='quantity'>0</span>
    </p>
    <p>
        <button class='add-to-cart'>Add to Cart</button>
    </p>
    </div>`
    $container.insertAdjacentHTML('beforeend', itemElement)

    const $icon = document.createElement('i')
    $icon.classList.add('fa','fa-apple')
    $icon.style.fontsize = '100px'
    $icon.style.color = color
    
    const $item = document.getElementById(`item-${itemCount}`)
    $item.insertBefore($icon, $item.firstElementChild)
//add event listener to new quantity button

    document.querySelector(`#item-${itemCount} .plus`).addEventListener('click', plusItem)
    document.querySelector(`#item-${itemCount} .minus`).addEventListener('click', minusItem)
    document.querySelector(`#item-${itemCount} .add-to-cart`).addEventListener('click', addToCart)
    itemCount++                       
}

function plusItem(event){
    event.target.parentElement.children[3].textContent ++
}
function minusItem(event){
    event.target.parentElement.children[3].textContent --
}
function addToCart(event){
    let quantity = event.target.closest('div').children[5].children[3].textContent
    for( let i = quantity; i > 0; i--){
        cart.push(event.target.closest('.item').getAttribute('id'))
        //alert('add successfully')
    }
    event.target.closest('div').children[4].firstElementChild.textContent -=quantity
    console.log(`Cart:${cart}`)
   
}
//event listener
// $addRed.addEventListener('click',addItem)
// $addGreen.addEventListener('click',addItem)
// $addBlue.addEventListener('click',addItem)
$buttonSet.addEventListener('click', addItem)

//<i class='fa fa-apple'></i>

//how to cap
 //let string = 'red'
// console.log(string[0].toUpperCase() + string.substring(1))