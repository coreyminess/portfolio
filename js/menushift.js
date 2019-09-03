$(document).ready(function(){
            var scroll_pos = 0;
            $(document).scroll(function() {
                scroll_pos = $(this).scrollTop();
                if(scroll_pos = 0) {
                    $("#nav-background").css('#nav-background','white');
                    $("#nav-links").css('background', 'none');
                    $("bar-change").css('background', 'white');
                }
                else {
                    $("#nav-background").css('#nav-background','black');
                    $("#nav-links").css('background', 'white');
                    $("body input + label span").css('background', 'black');
                }
            });
        });