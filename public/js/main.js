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