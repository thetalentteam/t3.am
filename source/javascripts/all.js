//= require_tree .

var section_identifiers = ['hero', 'global', 'clients', 'aligned-incentives', 'technology-enabled', 'iaas', 'talent-engagement', 'studio', 'assessment-tools', 'testimonials', 'join'];

$.each(section_identifiers, function(index, value) {

  new Waypoint({
    element: document.getElementById(value),
    handler: function(direction) {
      if (direction === 'down') {
        $('.paging li').removeClass('active');
        $('.paging li.'+value).addClass('active');
      }
    }
  })

  new Waypoint({
    element: document.getElementById(value),
    handler: function(direction) {
      if (direction === 'up') {
        $('.paging li').removeClass('active');
        $('.paging li.'+value).addClass('active');
      }
    },
    offset: '-99%'
  })

});

$.each(section_identifiers, function(index, value) {
  $('.paging li.'+value).on('click', function() {
    $.scrollTo('#'+value, 300);
  });
});

