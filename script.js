$(document).ready(function() {
  console.log('Hello World')

  var sixOlapicsCall = 'https://photorankapi-a.akamaihd.net/customers/215757/media/recent?count=6&auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2';

  // Ajax call to load the six images and append them as li elements
  var loadPics = function(page) {
    $.ajax({
      method: 'GET',
      url: page,
      data: {
        format: 'json'
      },
      datatype: 'jsonp',
      error: function() {
        console.log('Error')
      },
      success: function(response) {
        // Updates the next and previous buttons for the carousel
        var previousLinks = 'https://' + response['data']['_links']['prev']['href'];
        var nextLinks = 'https:' + response['data']['_links']['next']['href'];
        $('.previous-slide').attr('id', previousLinks);
        $('.next-slide').attr('id', nextLinks);

        var mediaList = response['data']['_embedded']['media'];
        var mediaListLength = mediaList.length;
        for(var i=0; i<mediaListLength; i++) {
          var uniqueMedia = mediaList[i];
          var image = uniqueMedia['images']['thumbnail'];
          var closeUp = uniqueMedia['images']['normal'];
          var caption = uniqueMedia['caption'];
          var name = uniqueMedia['_embedded']['uploader']['username'];

          $('.images-list').append($('<li>').attr({'href': closeUp,'title': caption,'id': name}).append($('<img>').attr('src', image)));
        }

      }
    })
  };

  // Load initial six photos on page load
  loadPics(sixOlapicsCall);

  $('.previous-slide').on('click', function(event) {
    var previousPage = $('.previous-slide').attr('id');
    if (previousPage !== 'https://null') {
      $('.images-list').empty();
      loadPics(previousPage);
    }
    else {
      console.log('No previous pictures')
    };
  });

  $('.next-slide').on('click', function(event) {
    var nextPage = $('.next-slide').attr('id');
    if (nextPage !== 'https://null') {
      $('.images-list').empty();
      loadPics(nextPage);
    }
    else {
      console.log('No more pictures')
    };
  });


  //Create thte lightbox modal
  $('.popup-gallery').magnificPopup({
    delegate: 'li',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>' + item.el.attr('id') + '</small>';
      }
    }
  });
});
