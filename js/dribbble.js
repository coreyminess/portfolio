      $.jribbble.setToken('e72dc062815752310c764233ae531daf49039a478ecf331942957e755db16653');
      $.jribbble.users('coreymines').shots({'per_page': 3}).then(function(shots) {
        var html = [];

        shots.forEach(function(shot) {
          html.push('<div class="fl-l w-100 w-80-m w-third-l tc-m center-m pa2-l pv3 ph2 mb2"><div class="br2 nav-shadow-2 flex grow">');
          html.push('<a href="' + shot.html_url + '" target="_blank" rel="noopener" alt="corey mines - latest dribbble shots">');
          html.push('<img class="db br2" src="' + shot.images.hidpi + '">');
          html.push('</a></div></div>');
        });

        $('.dribbble-shots').html(html.join(''));
      });
