lightbox.option({
    'wrapAround': true,
    'imageFadeDuration': 800,
    'alwaysShowNavOnTouchDevices': true,
  });


// Functions   //

// Search filter

${'.search'}.on("keyup", function(){
    var term = $(this).val().toLowerCase();
    console.log(term);
    // ${'.flex-item'}.filter(function() {
    //     $(this).toggle($(this).text().toLowerCase().indexOf(term) > -1)
    // });
});
