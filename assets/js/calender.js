$(function () {
    $('input[name="datepicker"]').daterangepicker({
        opens: 'left'
      },function(start, end, label) {
            document.getElementById('datebooking').innerHTML = `${start.format('DD MMMM, YYYY')+" - " + end.format('DD MMMM, YYYY')}`

            document.getElementById('fromDate').innerHTML = `${start.format('DD MMMM, YYYY')}`
            document.getElementById('dueDate').innerHTML = `${end.format('DD MMMM, YYYY')}`
        }
    );
});