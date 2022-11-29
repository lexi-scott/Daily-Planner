$(function () {
  //run a function to call dayjs and update it every second to run a counting clock
    function clock() {
    var realDateAndTime = dayjs().format("MMMM DD, YYYY - HH:mm:ss");
    $('#currentDay').text(realDateAndTime);
    }
    setInterval(clock, 1000);
    //run a function to save user data typed into the text area of HTML
    $('.saveBtn').click(function() {
      var parentID = $(this).parent().closest('div').attr('ID');
      var newTask = $(this).siblings('.description').val();
      localStorage.setItem(parentID, newTask);
    });
    //run a function to display locally stored user tasks on application 
    $('.time-block').each(function() {
      var storedTask = localStorage.getItem($(this).attr('ID'));
      $(this).find("textarea").append(storedTask);
    });
    //run a function to apply css color based on hour
    $('.time-block').each(function() {
      var hour = ("hour-" + dayjs().format("HH"));
      if ($(this).attr('ID') == hour) {
        $(this).addClass('present');
      }
      else if ($(this).attr('ID') < hour) {
        $(this).addClass('past');
      }
      else {
        $(this).addClass('future');
      }
    });
});