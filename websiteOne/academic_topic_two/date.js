document.addEventListener("DOMContentLoaded", function () {
    const DATE = new Date();

    // get the current day of the week
    const DAY_OF_WEEK = DATE.getDay();
    let arrDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let template = `<p>Today is ${arrDays[DAY_OF_WEEK]}!</p>`;
    let element = document.querySelector("#dayOfWeek");
    element.innerHTML = template;
});
