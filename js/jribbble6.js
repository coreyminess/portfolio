var accessToken = 
'43595dd2dbf04bd0ddfa7515e6c1fe6f4d0866660a00775c261c94f665f8a2e2';

//Call Dribbble v2 API
$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?per_page=3&access_token=43595dd2dbf04bd0ddfa7515e6c1fe6f4d0866660a00775c261c94f665f8a2e2',
    dataType: 'json',
    type: 'GET',
    success: function(data) {
        if (data.length > 0) {
            $.each(data.reverse(), function(i, val) {
                $('.dribbble-shots').prepend(
                    '<div class="fl-l w-100 w-80-m w-third-l tc-m center-m pa2-l pv3 ph2 mb2"><div class="br2 nav-shadow-2 flex grow">' + '<a class="shot" target="_blank" rel="noopener" href="'+ val.html_url +'"title="'+ val.title + '"><div class="title">' + '</div><img class="db br2" src="' + val.images.hidpi + '"/></a>'
                )
            })
        }
        else {
            $('#shots').append('<p>No shots yet!</p>');
            }
        }
    });

// $.jribbble.users('coreymines').shots({'per_page': 3}).then(function(shots) {
//   var html = [];

//   shots.forEach(function(shot) {
//     html.push('<div class="fl-l w-100 w-80-m w-third-l tc-m center-m pa2-l pv3 ph2 mb2"><div class="br2 nav-shadow-2 flex grow">');
//     html.push('<a href="' + shot.html_url + '" target="_blank" rel="noopener">');
//     html.push('<img class="db br2" alt="corey mines - latest dribbble shots" src="' + shot.images.hidpi + '">');
//     html.push('</a></div></div>');
//   });

//   $('.dribbble-shots').html(html.join(''));
// });