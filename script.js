function openClose() {
  const sidebar = document.getElementById("sidebar");
  const sideLabel = document.getElementsByClassName("sideLabel");
  const sideTitle = document.getElementsByClassName("sideTitle");
  sidebar.classList.toggle('hide');
  for (let i = 0; i < sideTitle.length; i++) {
    sideTitle[i].classList.toggle('hideTitle');
  }
  for (let i = 0; i < sideLabel.length; i++) {
    sideLabel[i].classList.toggle('noSize');
  }
}

// function user() {
//   const usrdrpwn = document.getElementById("user-dropdown");
//   usrdrpwn.classList.toggle('show-user');
// }

const list = document.querySelector('.dropdown-content')
const btn = document.querySelector('.user')

btn.addEventListener('click', (e)=> {
  
 list.classList.toggle('show-user')
  e.stopPropagation()
})

document.addEventListener('click', (e)=> {
  if(e.target.closest('.dropdown-content')) return 
  
  list.classList.remove('show-user')

})
