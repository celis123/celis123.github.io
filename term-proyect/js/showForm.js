$( document ).ready(function() {
    $( ".joinUs" ).click(function() {
        $( "form" ).removeClass( "notShow" ).addClass( "showForm" );
        $( ".joinUs" ).attr( "value", "Please Share your Info");
    });
});
