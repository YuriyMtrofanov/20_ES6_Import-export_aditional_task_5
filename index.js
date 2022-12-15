import { parseTwoDigitYear } from 'moment/moment'
import './index.css'
import { App } from "./src/modules/app"

const appLaunch = new App()
appLaunch.run()





// console.log('parse', parseTwoDigitYear(new Date()))

// Логика:
// 1. Сначала я должен собрать уже существующую информацию о всех донатах (сумма, дата)
// 2. Эту информацию я буду хранить в объекте. Для тоздания данного объекта пропишу класс
// 3. Далее в этот класс я также буду помещать полученную из текстового поля информацию 
// 4. уже на основе этого класса я смогу создавать все HTML-элементы и рендерить их на экране
// а также выщитывать общую сумму донатов
// 5. Функции создания элементов можно реализовать внутри класса, а можно и в отдельном файле
// 6. С помощью оббработчика "submit" я буду получать информацию из текстового поля и создавать
// на её основе элемент класса
// 7. Все элементы класса буду помещать в массив из объектов "Donation info", 
// 8. Нужно еще не забыть очистить поле ввода после записи

/*
const form = document.querySelector('.donate-form')

form.addEventListener('submit', (event)=> {
    event.preventDefault()

    const { target } = event   // значение "form"
    const donateFormInput = target.amount
    const inputValue = donateFormInput.value
    const date = new Date()

    const donatesContainerDonates = document.querySelector('.donates-container__donates')

    // const donateItem = document.createElement('div')
    // donateItem.className = 'donate-item'
    // donateItem.textContent = `${date} - `


    // создаю элемент от класса, который собирает информацию
    const donateItem = new Donation("donationFromYuriy", new Date(), inputValue)
    // Затем с помощью метода от данного класса создаю эдемент HTML
    const donateHTML = donateItem.createElement('div', 'donate-item')
    console.log('donateHTML', donateHTML)

    const amount = document.createElement('b')
    amount.textContent = `${inputValue}$`

    donateHTML.append(amount)  // не работает т.к. я сделал donateItem объектом с информацией о донате
    // из этого объекта требуется получить данные и создать элемент HTML, а для этого у меня есть
    // подготовленная функция createElement()

    donatesContainerDonates.append(donateItem)
    console.log(donateItem)
})

// Фунция, которая записывает информацию о полученных донатах
function donatesReceived(){
    const donationData = []
    document.querySelectorAll('.donate-item').forEach(element => {
        const donateInfo = element.textContent.split(' - ')
        const date = donateInfo[0]
        const amount = donateInfo[1].slice(0, donateInfo[1].length-1)
        const donation = new Donation (date, amount)
        donationData.push(donation)
    })
    return donationData
}
const data = donatesReceived()
console.log(data)

class DonatesContainer extends Donation {
    constructor(date, sum){
        super(date, sum)
    }
}
*/
