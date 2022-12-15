import { createHTMLElement } from './utils'
import { DataContainer } from '../core/container'

export class Donations {
    constructor(){
        this.dataContainer = new DataContainer()
        this.data = []  // массив, в который я буду складывать "this.dataContainer"-ы
    }
  
    createElement(date, value){
        const donateItem = document.createElement('div')
        donateItem.className = 'donate-item'
        donateItem.innerHTML = `${date} - <b>${value}$</b>` 
        console.log(donateItem)
        return donateItem
    }

    inputData(){
        const donateForm = document.querySelector('.donate-form')
        donateForm.addEventListener('submit', event => {
            event.preventDefault()
            const { target } = event
            const donateFormInput = target.amount
            const inputValue = donateFormInput.value
            const inputDate = new Date()  // Здесь бы нужно как-то дату преобразовать

            // полученные данные записываем в ОБЪЕКТ dataContainer
            // А уже на оснве информации из объекта создам HTML-элемент
            const dataContainer = new DataContainer(inputDate, inputValue)
            console.log(dataContainer)
            // const dataContainerArray = this.data.push(dataContainer)
            // console.log(dataContainerArray)
            // return dataContainerArray
        })
    }   
}