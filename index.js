import UAParser from "ua-parser-js";

(async function fetchData() {
    const getIP = await fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .catch((err) => console.error("Couldn't see IP address", err));

    document.querySelector(".ip__text").textContent = "Публичный IP-адрес:";

    const userInfo = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_ajtiu9YKmyLkaSHNNm2glDbZZiDQI`
    )
        .then((response) => response.json())
        .catch((err) => console.error(err));

    if (getIP && userInfo) {
        document.querySelector(".ip").textContent = getIP.ip;
        document.querySelector(".country").textContent = userInfo.location.country;
        document.querySelector(".city").textContent = userInfo.location.city;
        document.querySelector(".time-zone").textContent = userInfo.location.timezone;
        document.querySelector(".lat").textContent = userInfo.location.lat;
        document.querySelector(".lon").textContent = userInfo.location.lng;
    } else if (getIP) {
        document.querySelector(".ip").textContent = getIP.ip;
        document.querySelector(".country").textContent = "Ошибка геолокации";
        document.querySelector(".city").textContent = "Ошибка геолокации";
        document.querySelector(".time-zone").textContent = "Ошибка геолокации";
        document.querySelector(".lat").textContent = "Ошибка геолокации";
        document.querySelector(".lon").textContent = "Ошибка геолокации";
    } else if (userInfo) {
        document.querySelector(".ip").textContent = userInfo.ip;
        document.querySelector(".country").textContent = userInfo.location.country;
        document.querySelector(".city").textContent = userInfo.location.city;
        document.querySelector(".time-zone").textContent = userInfo.location.timezone;
        document.querySelector(".lat").textContent = userInfo.location.lat;
        document.querySelector(".lon").textContent = userInfo.location.lng;
    } else {
        document.querySelector(".ip").textContent = "Ошибка запросов";
        document.querySelector(".country").textContent = "Ошибка запросов";
        document.querySelector(".city").textContent = "Ошибка запросов";
        document.querySelector(".time-zone").textContent = "Ошибка запросов";
        document.querySelector(".lat").textContent = "Ошибка запросов";
        document.querySelector(".lon").textContent = "Ошибка запросов";
    }
})();

const parser = new UAParser().getResult();

const browserData = [parser.browser.name, parser.browser.version];
const osData = [parser.os.name, parser.os.version];
document.querySelector(".width").textContent = window.screen.width;
document.querySelector(".height").textContent = window.screen.height;
document.querySelector(".languages").textContent = window.navigator.languages;

const browser = document.querySelectorAll(".browser");
for (let i = 0; i < browserData.length; i++) {
    browser[i] == undefined
        ? (browser[i].innerHTML = "Не найдено")
        : (browser[i].innerHTML = browserData[i]);
}

const os = document.querySelectorAll(".os");
for (let i = 0; i < osData.length; i++) {
    osData[i] == undefined ? (os[i].innerHTML = "Не найдено") : (os[i].innerHTML = osData[i]);
}
