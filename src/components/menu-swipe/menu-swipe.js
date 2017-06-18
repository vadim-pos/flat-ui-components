$(function() {
    if ($().swipe) { // check is the swipe touch plugin loaded
        $('.menu-swipe-list li').swipe({
            threshold: 0,
            swipeRight: function() {
                $(this).find('div').addClass('active');
            },
            swipeLeft: function() {
                $(this).find('div').removeClass('active');
            }
        });
    }
});