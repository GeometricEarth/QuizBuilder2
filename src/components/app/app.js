import Question__list from "../question__list/question__list";
import Field from "../field/field";
import style from "./app.css";
import Menu from "../menu/menu";



export default class App {
    constructor({
        conteiner
    }) {


        this.conteiner = conteiner;
        this.elem = document.createElement('div');
        this.elem.classList = "app";
        this.conteiner.append(this.elem);
        
        this.menu = new Menu({ conteiner: this.elem });

        this.list = new Question__list({ conteiner: this.elem });

        this.field = new Field({
            conteiner: this.elem,
        });



    }
}