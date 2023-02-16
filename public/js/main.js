const navigation = document.querySelectorAll('.navigation');

navigation.forEach(link => {
   link.addEventListener('click', (e)=>{
      e.preventDefault();

      const url =  e.target.pathname;
      fetch(url)
      .then(res => res.text())
      .then(data =>{
         const mainContent = document.getElementById('main-content');
         mainContent.innerHTML = '';
         mainContent.innerHTML = data;
      })
      .catch(error => console.log(error))
   })
})

const busquedas = document.querySelectorAll('.enlace');
console.log(busquedas);

// busquedas.forEach(link => {
//    link.addEventListener('click', (e)=>{
//       e.preventDefault();

//       const urls =  e.target.pathname;
//       fetch(urls)
//       .then(res => res.text())
//       .then(data =>{
//          console.log(data);
//          const mainContent = document.getElementById('main-content');
//          mainContent.innerHTML = '';
//          mainContent.innerHTML = data;
//       })
//       .catch(error => console.log(error))
//    })
// })