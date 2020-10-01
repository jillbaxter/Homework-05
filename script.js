$(document).ready(function () {
    //creating the AM array for the hours shown on planner
    var hours = {
        amHours: [6, 7, 8, 9, 10, 11],
        pmHours: [12, 1, 2, 3, 4,5,6]
    };

    var i = 0;

    $("#currentDay").text(moment().format("dddd[,] MMMM Do"));

    //Loop for adding AM hours to .container
    for (var i = 0; i < hours.amHours.length; i++) {
        var newRow = $(`<div class='row'></div>`);
        $('.container').append(newRow);
        var hrCol = $(`<div class='col-1 time-block'>${hours.amHours[i]}AM</div>`);
        var textCol = $('<textarea class="col-10">Test Test Test Test Test Test</textarea>');
        var buttonCol = $('<button class="col-1 saveBtn"></button>');
        newRow.append(hrCol, textCol, buttonCol);
    }
     //Loop for adding PM hours to .container
    for (var i = 0; i < hours.pmHours.length; i++) {
        var newRow = $(`<div class='row'></div>`);
        $('.container').append(newRow);
        var hrCol = $(`<div class='col-1 time-block'>${hours.pmHours[i]}PM</div>`);
        var textCol = $('<textarea class="col-10">Test Test Test Test Test Test</textarea>');
        var buttonCol = $('<button class="col-1 saveBtn"></button>');
        newRow.append(hrCol, textCol, buttonCol);
    }

});