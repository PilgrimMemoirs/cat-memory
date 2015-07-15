$(function () {

    var parent = $('ul');
    var imgs = parent.children();
    while (imgs.length) {
        parent.append(imgs.splice(Math.floor(Math.random() * imgs.length), 1)[0]);
    };


    var counter = 0
    var completed = 0

    var cards = []

    var checkArr = function(){
      if (cards.length === 2) {
        // check if elements are same
          // leave "up" if are
          // add to completed total

        // If elements are not same
          // flip back down

        // clear array
      }
    }

    $('a').click(function() {
      console.log("hey");
      counter += 1; 
      console.log()
      var id = $(this).attr('id');
      var img = $("#" + id + " img").attr('src');
      cards.push(img);
      $("#" + id + " img").css('visibility', 'initial');
      // call checkArr
    });
});



// Have a turn counter
// Have completed counter (0/8)

// recognize when two have been selected (Click to select one, shows face same w/ 2nd)
  // compare if same id/class
  // if so, stay up and marked as completed
  // Continue to next turn
// recognize if two chosen are not the same
  // flip back to cover
  // Continue to next turn