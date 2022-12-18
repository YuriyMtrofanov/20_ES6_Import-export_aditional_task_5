import { Donations } from './donations'

export class App {
    #donations
    constructor(){
        this.#donations = new Donations()
    }

    run(){
        this.#donations.getInputData()   //Получил, сохранил данные в контейнере и на их основе отрендерил новые пункты в списке 
    }
}
