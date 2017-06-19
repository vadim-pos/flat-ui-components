import './jquery-ui.min';

$(function() {
    $('#datepicker').datepicker({
        inline: true,
        prevText: '<',
        nextText: '>',
        dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT']
    });
});