import UAParser from 'ua-parser-js';


(async function fetchData(params) {
    const getIP = await fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .catch(err => console.error("Couldn't see IP address", err))

    document.querySelector('.ip__text').textContent = 'Публичный IP-адрес:'
    document.querySelector('.ip').textContent = getIP.ip


    const userInfo = await fetch(`http://ip-api.com/json/${getIP.ip}?fields=country,city,lat,lon,proxy&lang=ru`)
    .then(response => response.json())
    .catch(err => console.error(err))

    document.querySelector('.country').textContent = userInfo.country
    document.querySelector('.city').textContent = userInfo.city
    document.querySelector('.lat').textContent = userInfo.lat
    document.querySelector('.lon').textContent = userInfo.lon

    if (userInfo.proxy) {
        document.querySelector('.vpnInfo').innerHTML += `Вы используете VPN или Proxy`
    } else {
        document.querySelector('.vpnInfo').innerHTML += `Использование VPN или Proxy не обнаружено`
    }
})()



var parser = (new UAParser).getResult();


const browserData = [parser.browser.name, parser.browser.version, parser.engine.name]
const deviceData = [parser.device.vendor, parser.device.model, parser.device.type]
const osData = [parser.os.name, parser.os.version]
const cpuData = [parser.cpu.architecture]

const browser = document.querySelectorAll('.browser')
for (let i = 0; i < browserData.length; i++) {
    browser[i] == undefined ? browser[i].innerHTML = 'Не найдено' : browser[i].innerHTML = browserData[i]
}

const device = document.querySelectorAll('.device')
for (let i = 0; i < deviceData.length; i++) {
    deviceData[i] == undefined ? device[i].innerHTML = 'Не найдено' : device[i].innerHTML = deviceData[i]
}

const os = document.querySelectorAll('.os')
for (let i = 0; i < osData.length; i++) {
    osData[i] == undefined ? os[i].innerHTML = 'Не найдено' : os[i].innerHTML = osData[i]
}

const cpu = document.querySelectorAll('.cpu')
for (let i = 0; i < cpuData.length; i++) {
    cpuData[i] == undefined ? cpu[i].innerHTML = 'Не найдено' : cpu[i].innerHTML = cpuData[i]
}