let wageRate = 15;
let totalDays;
let totalHours = 0;
let totalMins = 0;
let total = 0;

let nthDay = {
    hours: parseInt(""),
    mins: parseInt(""),
    wage: parseInt(""),
    getWageOfDay: function (){
        this.wage = this.hours*wageRate + this.mins/60*wageRate;
        console.log(this.wage);
        return this.wage;
    }
}

function getTotal () {
    let i = 0;
    while (i < nthDay.length)
        {
        total += day[i].wage;
        return total;
        }
}

getTotal();

$(document).on('click', '.remove', (e) => {
    console.log("Test complete");
    document.getElementById("")
    $(event.target).parent().slideUp();
    $(event.target).parent().remove();
});

$(document).on('click', '.add', (e) => {
    const newElement = 
        `<div class="day">
              <input type="text">
              <button class="remove">Remove this day</button>
              <button class="add">Add a day</button>
          </div>`;
    
    $(event.target).parent().after(newElement);
    $(event.target).parent().next().hide();
    $(event.target).parent().next().slideDown();
});
      








//
//
//
//while (day < totalDays)
//    {
//        hours[day] = parseInt(window.prompt("Day " + (day + 1) + " hours:"));
//        mins[day] = parseInt(window.prompt("Day " + (day + 1) + " minutes:"));
//        day += 1;
//    }
//
//calculatePayPerDay();
//
//calculateTotal();
//
//printAllPays();
//
//calculateHours();
//
//document.write("---------<br>" + total);
//
//document.write("<br>---------<br><br>Total time worked: " + totalHours + " Hours " + totalMins + " Minutes");
//
//
//function calculatePayPerDay()
//    {
//        day = 0;
//        while (day < totalDays)
//            {
//                wage[day] = hours[day]*rate + mins[day]/60*rate;
//                console.log(wage[day]);
//                day += 1;
//            }
//    }
//
//function calculateTotal()
//{
//    day = 0;
//    while (day < totalDays)
//    {
//        total += wage[day];
//        day += 1;
//    }
//}
//
//function printAllPays()
//{
//    day = 0;
//    while (day < totalDays)
//    {
//        document.write(wage[day] + "<br>");
//        day += 1;
//    }
//}
//
//function calculateHours()
//{
//    day = 0;
//    while (day < totalDays)
//        {
//            totalHours += hours[day];
//            totalMins += mins[day];
//            day += 1;
//        }
//    var rem = totalMins%60;
//    totalHours += (totalMins - rem)/60;
//    totalMins = rem;
//}
