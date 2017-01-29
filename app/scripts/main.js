$(function () {
    $('#form').submit(function (event) {
        event.preventDefault();

        console.log("geting Location from IP ", $('form input').val());
        $.getJSON('http://ipinfo.io/' + $('form input').val() + '/geo', function(data) {
            console.log(data);
            $('.data').html(JSON.stringify(data));
        })
    });
});
