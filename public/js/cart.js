const addCart = document.querySelector('.buttonAddCart');
const buttonAdd = document.querySelector('.buttonAdd');
console.log('funciona mi archivo js');
const formcart = document.querySelector('.formAdd');
let miform = new FormData(formcart);
console.log(miform);
formcart.addEventListener('submit', (e)=>{
e.preventDefault();
const url = window.location
fetch('http://localhost:3000', {
   method: 'post',
   body: miform
})
   .then((res)=>{
      return res.json();
      console.log(res);
   })
   .catch((error)=>{
      console.log('algo anda mal : ', error);
   })
})

addCart.addEventListener('click', (e)=>{
   e.preventDefault();
   const producto = e.target.parentElement.parentElement;
   //localStorage.setItem(`${addCart.id}`, producto.innerHTML)
   
})

const cartContainer = document.getElementById('productCart');
let producto = localStorage.getItem(`${addCart.id}`);
console.log(producto); 


