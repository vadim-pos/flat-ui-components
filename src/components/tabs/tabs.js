$(function() {
    $('.tabs > a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('opened');
    });

    $('.tabs > ul a').on('click', function(e) {
        e.preventDefault();
        // index of clicked menu item
        const index = $(this).parent().index();
        // hide menu on small screens after click
        $(this).parents(':eq(2)').toggleClass('opened');

        $(this).parents(':eq(2)').find('div > div').hide()
            .parent().find(`div:eq(${index})`).show();
    })
});