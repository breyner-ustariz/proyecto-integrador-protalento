const iconCart = document.querySelector('.carticon');
const modalcart = document.querySelector('.cart')
const closemodal = document.querySelector('.closeCart')
const hamburger = document.getElementById('button-hamburger');
const nav = document.querySelector('.ul')

iconCart.addEventListener('click', ()=>{
   modalcart.style.display = 'flex'
})

closemodal.addEventListener('click', ()=>{
   modalcart.style.display = 'none'
})

hamburger.addEventListener('click', ()=>{
   nav.style.display = 'block';
})
