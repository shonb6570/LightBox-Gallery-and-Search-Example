lightbox.option({
    'wrapAround': true,
    'imageFadeDuration': 800,
    'alwaysShowNavOnTouchDevices': true,
  });


// Functions   //

// Search filter

const one = $('.search').val();


$('.search').on('keyup',function() {
        var term = $(this).val().toLowerCase();
        $('.flex-item alt').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(term) > -1)
        });
});


// const search = document.querySelector('.search');
// const imgTexts = document.querySelectorAll('.flex-item alt');

// const handleSearch = event => {
//   const searchTerm = event.target.value.toLowerCase();
  
//   imgTexts.forEach(boxText => {
//     const text = boxText.textContent.toLowerCase();
//     const photo = boxText.parentElement;
    
//     if(text.indexOf(searchTerm) > -1) {
//       photo.style.display = "block";
//     } else {
//       photo.style.display = "none";  
//     }
//   });

// };

// search.addEventListener('keyup', handleSearch);