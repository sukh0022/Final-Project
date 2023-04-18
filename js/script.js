$(document).ready(function () {
    

    $(function () {
        var current = window.location.href;
        console.log(current);
        $(".sidenav li a").each(function () {
            // if the current path is like this link, make it active
            if (this.href == current) {
                $(this).parent('li').addClass("active");
            }
        });
    });


});

