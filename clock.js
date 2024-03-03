const clock = document.querySelector("h2#clock");

function setTime()
{
    const date = new Date();
    clock.innerText = `${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`;
}

setInterval(setTime, 1000);
