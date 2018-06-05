import styles from "./menu.css";

export default class Menu {
    constructor({
        conteiner
    }){
        this.conteiner = conteiner;
        this.elem = document.createElement('div');
        this.elem.classList = "menu";
        this.conteiner.append(this.elem);
    }
}