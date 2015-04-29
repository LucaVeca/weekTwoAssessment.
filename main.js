$( ".dan" ).click(function() {
    alert( "Hey you clicked on me" );
});

$( ".iwao" ).click(function() {
    $( ".iwao" ).hide();
    $( ".dan" ).hide();
});