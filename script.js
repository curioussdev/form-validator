formValidator = {
    handleSubmit: (event) =>{
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');

        formValidator.clearErrors();

        for(let i=0; i<inputs.length; i++){
            let input = inputs[i];
            let check = formValidator.checkInput(input);
            if(check !== true){
                send = false
                // exibir erro
                formValidator.showError(input, check);
            }
        }

        
        if(send) {
            form.submit();
        }
    },

    checkInput: (input) => {
        // verifica cada uma das regras espcíficas de cada input
        let rules = input.getAttribute('data-rules');

        if(rules !== null){
            rules = rules.split('|')
            for(let k in rules) {
                 let rulesDatails = rules[k].split('|');
                 switch(rulesDatails[0]) {
                    case 'required':
                        if(input.value == ''){
                            return 'Campo obrigatório!';
                        }
                    break;

                    case 'min':

                    break;
                 }
            }
        }

        return true;
    },
    showError:(input, error) => {
        input.style.borderColor = '#ff0000';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.elementSibling  ) // posicionando a mensagem de erro abaixo do input
    },
    clearErrors: () => {
        // clear red border color
        let inputs = form.querySelectorAll('input');
        for(let i=0; i<inputs.length; i++) {
            inputs[i].style = '';
        }



        // clear error message
        let errorElements = document.querySelectorAll('.error');
        for(let i=0; i<errorElements.length; i++) {
            errorElements[i].remove();
            
        }
        
    }
};

let form = document.querySelector('.bodyForm');
form.addEventListener('submit', formValidator.handleSubmit);
