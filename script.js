var day = 0;
var totalDays = parseInt(window.prompt("Please enter total number of days in the pay period."));
var hours = [];
var mins = [];
var wage = [];
var rate = 15;
var total = 0;
var totalHours = 0;
var totalMins = 0;

while (day < totalDays)
    {
        hours[day] = parseInt(window.prompt("Day " + (day + 1) + " hours:"));
        mins[day] = parseInt(window.prompt("Day " + (day + 1) + " minutes:"));
        day += 1;
    }

calculatePayPerDay();

calculateTotal();

printAllPays();

calculateHours();

document.write("---------<br>" + total);

document.write("<br>---------<br><br>Total time worked: " + totalHours + " Hours " + totalMins + " Minutes");


function calculatePayPerDay()
    {
        day = 0;
        while (day < totalDays)
            {
                wage[day] = hours[day]*rate + mins[day]/60*rate;
                console.log(wage[day]);
                day += 1;
            }
    }

function calculateTotal()
{
    day = 0;
    while (day < totalDays)
    {
        total += wage[day];
        day += 1;
    }
}

function printAllPays()
{
    day = 0;
    while (day < totalDays)
    {
        document.write(wage[day] + "<br>");
        day += 1;
    }
}

function calculateHours()
{
    day = 0;
    while (day < totalDays)
        {
            totalHours += hours[day];
            totalMins += mins[day];
            day += 1;
        }
    var rem = totalMins%60;
    totalHours += (totalMins - rem)/60;
    totalMins = rem;
}
