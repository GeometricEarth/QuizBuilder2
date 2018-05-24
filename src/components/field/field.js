import styles from "./field.css";

export default class Field {
    constructor({
        conteiner
    }){
        this.conteiner = conteiner;
        this.elem = document.createElement('div');
        this.elem.classList = "field";
        this.conteiner.append(this.elem);
    }
}