

//'learn more!'' button functionality
function main () {
  $('.lists').hide();

  $('.learnMore-button').on('click',
  function () {
    $(this).next().slideToggle(800);
    $(this).toggleClass('active');
    $(this).text('Wow!!');
  });

}

//callback
$(document).ready(main);
