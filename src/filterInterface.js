$(function() {
  $('input[name="daterange"]').daterangepicker(
    {
      opens: "left"
    },
    function(start, end, label) {
      console.log(start.format("YYYY-MM-DD"));
      console.log(end.format("YYYY-MM-DD"));
    }
  );

  $("#daterange").on("apply.daterangepicker", function(ev, picker) {
    var start = picker.startDate.format("YYYY-MM-DD");
    var end = picker.endDate.format("YYYY-MM-DD");
    $.post(
      "http://localhost:9292/api/listings/dates",
      {
        start: start,
        end: end
      },
      function() {
        window.location.replace("/listings/show");
      }
    );
  });
});
