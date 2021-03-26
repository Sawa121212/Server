$(document).ready(function(){
  //Sidebar
$('.sidenav').sidenav({menuWidth: 320,  activationWidth: 70, edge: 'right'});
  // Dropdown
      $('.dropdown-button').dropdown();
});
$(".dropdown-trigger").dropdown();


// tooltip - title
$(document).ready(function(){
      $('.collapsible').collapsible();
});

$(document).ready(function(){
      $('.tooltipped').tooltip();
});

//password
$('body').on('click', '.password-control', function(){
      if ($('#password-input').attr('type') == 'password'){
            $(this).addClass('view');
            $('#password-input').attr('type', 'text');
      } else {
            $(this).removeClass('view');
            $('#password-input').attr('type', 'password');
      }
      return false;
});


