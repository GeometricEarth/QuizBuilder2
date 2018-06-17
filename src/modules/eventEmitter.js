export default class EventEmitter{
    constructor(){
        this.events = {}
    }

    dispatchEvent(evt) {
        const listners = this.events[evt.type];
        listners.forEach(listner => {
            listner.call(this, evt)           
        });
    }

    addEventListener(evt, listner) {
        if(evt && listner){
            if(!this.events[evt]){
                this.events[evt] = [];
            }
            this.events[evt].push(listner);
        }else console.error('некорректные аргументы. Ожидалось evt=string, listner=function');
    }
}