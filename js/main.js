lightbox.option({
    'wrapAround': true,
    'imageFadeDuration': 800,
    'alwaysShowNavOnTouchDevices': true,
  });

  $( '.flex-container' ).searchable({
    selector      : '.flex-item',
    searchField   : '.search',
    oddRow        : { 'background-color': '#f5f5f5' },
    evenRow       : { 'background-color': '#fff' },
    hide          : function( elem ) {
        elem.fadeOut(50);
    },
    show          : function( elem ) {
        elem.fadeIn(50);
    },
    searchType    : 'fuzzy',
    onSearchActive : function( elem, term ) {
        elem.show();
    },
    onSearchFocus: function() {
        $( '#feedback' ).show().text( 'Type to search.' );
    },
    onSearchBlur: function() {
        $( '#feedback' ).hide();
    },
});