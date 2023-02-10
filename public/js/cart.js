const addCart = document.querySelector('.buttonAddCart');

addCart.addEventListener('click', (e)=>{
   e.preventDefault();
   const producto = e.target.parentElement.parentElement;
   //localStorage.setItem(`${addCart.id}`, producto.innerHTML)
   
})

const cartContainer = document.getElementById('productCart');
let producto = localStorage.getItem(`${addCart.id}`);
console.log(producto); 


