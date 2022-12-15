import { Donations } from './donations'

export class App {
    constructor(){
        this.donations = new Donations()
    }

    run(){
        const donateItem = this.donations.createElement('Dec 15th 2022, 22:48:49 am', 3)
        const dataContainerDonates = document.querySelector('.donates-container__donates')
        dataContainerDonates.append(donateItem)
        const dataFromInput = this.donations.inputData()
    }
}

