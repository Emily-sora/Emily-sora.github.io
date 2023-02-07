// DinoWorks Common JS
window.addEventListener('load', function() {
  setPreventDefaultLink();


});


function setPreventDefaultLink() {
  $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
  });
}





