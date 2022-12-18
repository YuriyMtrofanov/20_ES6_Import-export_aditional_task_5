import { DataContainer } from '../core/container'
import { getTodayDateFormat } from '../core/utils'

export class Donations {
    constructor(){
        this.data = []  // массив, в который я буду складывать "this.dataContainer"-ы
    }
  
    createElement(date, value){
        const donateItem = document.createElement('div')
        donateItem.className = 'donate-item'
        donateItem.innerHTML = `${date} - <b>${value}$</b>` 

        const dataContainerDonates = document.querySelector('.donates-container__donates')
        dataContainerDonates.append(donateItem)
    }

    setTotalAmount(){


        // Собираю все значения сумм донатов в массив "totalSum"
        let totalSum = []
        this.data.forEach((donation) => {
            totalSum.push(donation.amount)
        })
        // С помощью метода "reduce" считаю сумму всех донатов "resume"
        const resume = totalSum.reduce((acc, item) => {
            return acc += Number(item)}, 0)
        console.log(resume)

        // const totalAmount = document.querySelector('.total-amount')
        // totalAmount.textContent = `${resume}$`

    }

    // Событие submit. Получает инфррмацию из текстового поля и помещает её в "this.dataContainer"
    getInputData(){
        const donateForm = document.querySelector('.donate-form')
        donateForm.addEventListener('submit', event => {
            event.preventDefault()
            const { target } = event
            const donateFormInput = target.amount
            const inputValue = donateFormInput.value
            const inputDate = new Date()  // Здесь бы нужно как-то дату преобразовать
            const thisDate = getTodayDateFormat(inputDate)  // Dec 15th 2022, 22:48:49 am
                            
            // полученные данные записываем в ОБЪЕКТ dataContainer и пушим в массив "this.data"
            let dataContainerItem = new DataContainer(thisDate, inputValue)
            this.data.push(dataContainerItem)
            
            const item = this.data.at(-1)   // получаю последний элемент массива с данными
            this.createElement(item.date, item.amount) // и на основе его данных рендерю элемент в DOM
            this.setTotalAmount()
        })
    }

    

}