$(function() {
    if (window.iScroll) {
        $('.menu-search > div[data-scroll]').each(function() {
            const scrollHeight = $(this).attr('data-scroll');
            
            $(this).css({
                'height': scrollHeight + 'px',
                'overflow': 'hidden',
                'position': 'relative'
            });
            
            /* Note: scroll container should be positioned relative! */

            new iScroll(this, {
                freescroll: true,
                scrollbars: true,
                mouseWheel: true
            });
        });
    }
});