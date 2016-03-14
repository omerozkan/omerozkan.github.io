$(window).resize(function() {
    if( footerHeight !== $('footer').height()) {
        footerHeight = $('footer').height()
        configureFooter()
    }
})

function configureFooter() {
    $('#main').css({
        'padding-bottom' : footerHeight + "px"
    })

    $('footer').css({
        'margin-top' : '-' + footerHeight + "px"
    })
}

$(document).ready(function () {
    footerHeight = $('footer').height()
    configureFooter()
    $("#menu-button").click(function () {
        $("#mobile-menu").sidebar('toggle')
    })
});