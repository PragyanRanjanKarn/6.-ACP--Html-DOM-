function validate(e) {

    e.preventDefault();

    const name = document.getElementById('name').value;

    const email = document.getElementById('email').value;

    const pass = document.getElementById('password').value;

    const birthday = document.getElementById('birthday').value;

    const number = document.getElementById('number').value;

    const msgBox = document.getElementById('message');

    let message = '';

    if (name === '') {

        message = 'Please enter your name.';

        msgBox.style.color = 'red';

    } else if (email === '') {

        message = 'Please enter an email.';

        msgBox.style.color = 'red';

    } else if (pass === '') {

        message = 'Please enter your password.';

        msgBox.style.color = 'red';

    } else if (number === '') {

        message = 'Please mention your contact number.';

        msgBox.style.color = 'red';


    } else if (birthday === '') {

        message = 'Please enter your birth date.';

        msgBox.style.color = 'red';

    }

    else {

        message = 'Login successful!';

        msgBox.style.color = 'green';

    }

    msgBox.innerText = message;

}