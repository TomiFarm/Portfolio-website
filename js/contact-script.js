(function(){
    let contactForm = document.querySelector('#contact-form');
    let contactEmailInput = document.querySelector('#contact-email');
    let contactMessageInput = document.querySelector('#contact-message');

    function showErrorMessage(input, message) {
        let container = input.parentElement;

        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }

        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateEmail(emailInput){
        let value = emailInput.value;

        if(!value) {
            showErrorMessage(emailInput, 'Email is a required field.');
            return false;
        }
        
        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'Please enter a valid email address.');
            return false;
        }

        if (value.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'Please enter a valid email address.');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    function validateMessage(messageInput){
        let value = messageInput.value;
        
        if (!value) {
            showErrorMessage(messageInput, 'Please write a message.');
            return false;
        }

        showErrorMessage(messageInput, null);
        return true;
    }

    function validateContactForm(){
        let isValidEmail = validateEmail(contactEmailInput);
        let isValidMessage = validateMessage(contactMessageInput);
        return isValidEmail && isValidMessage;
    }

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateContactForm()) {
            alert('Success');
        }
    })

    contactEmailInput.addEventListener('input', validateEmail(contactEmailInput));
    contactMessageInput.addEventListener('input', validateMessage(contactMessageInput));

})();