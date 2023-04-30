const month_names = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year !== 0) || (year % 100 === 0 && year % 400 === 0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

let calendar = document.querySelector('.calendar');

generateCalendar = (month, year) => {
    yourFuckingChoice = new Date(year, month);
    let calendar_days = calendar.querySelector('.calendar-days');
    let calendar_header_year = calendar.querySelector('#year');

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    calendar_days.innerHTML = '';

    let currDate = new Date();
    if (month < 0 || month > 11) month = currDate.getMonth();
    if (!year) year = currDate.getFullYear();

    let curr_month = `${month_names[month]}`;
    month_picker.innerHTML = curr_month;
    calendar_header_year.innerHTML = year;

    let first_day = new Date(year, month, 1);

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div');
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover');
            day.innerHTML = i - first_day.getDay() + 1;
            day.innerHTML += `<span></span>
                              <span></span>
                              <span></span>
                              <span></span>`;
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date');
            }
        }
        calendar_days.appendChild(day);
    }
}

let month_list = calendar.querySelector('.month-list');

month_names.forEach((e, index) => {

    let month = document.createElement('div');
    month.innerHTML = `<div data-month="${index}">${e}<div>`;
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show');
        curr_month.value = index;
        generateCalendar(index, curr_year.value);
        setupCalendarDayClickHandlers();
    }
    month_list.appendChild(month);
})

let month_picker = calendar.querySelector('#month-picker');

month_picker.onclick = () => {
    month_list.classList.add('show');
}

let currDate = new Date();
let curr_month = { value: currDate.getMonth() };
let curr_year = { value: currDate.getFullYear() };

var yourFuckingChoice = new Date();
document.querySelector('.yourchoice').innerHTML = yourFuckingChoice.toISOString();
generateCalendar(curr_month.value, curr_year.value);
setupCalendarDayClickHandlers();

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value;
    generateCalendar(curr_month.value, curr_year.value);
    setupCalendarDayClickHandlers();
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value;
    generateCalendar(curr_month.value, curr_year.value);
    setupCalendarDayClickHandlers();
}


function setupCalendarDayClickHandlers() {
    const dayList = document.querySelectorAll('.calendar-day-hover');
    dayList.forEach((day) => {
        day.onclick = () => {
            let currDate = document.querySelector('.curr-date');
            if (currDate !== null) currDate.classList.remove('curr-date');
            day.classList.add('curr-date');
            yourFuckingChoice.setDate(parseInt(day.innerHTML));
            let choice = document.querySelector('.yourchoice');
            choice.innerHTML = yourFuckingChoice;
        }
    })
}

window.location.href = "your-jsp-page.jsp?date=" + encodeURIComponent(dateString);