$(document).ready(function(){
            var scroll_pos = 0;
            $(document).scroll(function() {
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 0) {
                    $("#nav-links").css('background-color', 'white');
                    $("#nav-links #gray-change").css('color', 'black');
                }
                else {
                    $("#nav-links").css('background-color', 'white');
                    $("#nav-links #gray-change").css('color', 'black');
                }
            });
        });
