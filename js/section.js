let language = document.querySelector('#language');
let myDrop = document.querySelector('.dropdown-content');

language.addEventListener('click', ()=>{
    myDrop.style.display = 'block';
})

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('#language')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display = 'block') {
          openDropdown.style.display ='none';
        }
      }
    }
  }