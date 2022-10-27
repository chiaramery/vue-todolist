/*
    Ogni todo sarà un oggetto, formato da due proprietà:
    - text, una stringa che indica il testo del todo
    - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            newList: {
                text: '',
                done: false,
            },
            list: [
                {
                    text: 'Fare spesa',
                    done: false, 
                },
                {
                    text: 'Andare in palestra',
                    done: false,
                },
                {
                    text: 'Fare esercizio pomeridiano',
                    done: false,
                },
            ]
        }
    },
    methods: {
        newTask () {
            this.list.push({...this.newList});
            this.newList.text = '';

        },
        isDone () {
                this.done = true;
                console.log(this.done);
        },
        isntDone () {
            this.done = false;
            console.log(this.done);
        },
    },
}).mount("#app");