formValidator = {
    handleSubmit: (event) =>{
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');

        for(let i=0; i<inputs.length; i++){
            let input = inputs[i];
            let check = formValidator.checkInput(input);
            if(check !== true){
                send = false
                // exibir erro
            }
        }

        send=false
        if(send) {
            form.submit();
        }
    },

    checkInput: (input) => {
        // verifica cada uma das regras espcíficas de cada input
        let rules = input.getAttributes('data-rules');

        if(rules !== null){
            rules = rules.split('|')
            for(let k in rules) {
                 let rulesDatails = rules[k].split('');
                 switch(rulesDatails[0]) {
                    case 'required':

                    break;
                        
                    case 'min':

                    break;
                 }
            }
        }

        return true;

    }
}

let form = document.querySelector('.bodyForm');
form.addEventListener('submit', formValidator.handleSubmit);
