import { Donations } from './donations'

export class App {
    constructor(){
        this.donations = new Donations()
    }

    run(){
        this.donations.getInputData()   // Получили и сохранили данные в контейнере

        
    }
}
