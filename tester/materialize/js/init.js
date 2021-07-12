$(document).ready(function(){
  //Sidebar
$('.sidenav').sidenav({menuWidth: 300,  activationWidth: 70, edge: 'left'});
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


