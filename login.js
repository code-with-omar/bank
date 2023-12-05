//1.Add apply addEventListener in submit button.
const submitBtn = document.getElementById('submit-btn').addEventListener('click', () => {
    //2. Find email 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //3. Finde Password
    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;
    //check match email and password
    if (email === 'omarfaruk65142@gmail.com' && password === '190605') {
        window.location.href = 'bank.html'
        emailField.value = '';
        passwordFiled.value = ''
    } else {
        document.getElementById('message').innerText = "Not valid user";
        emailField.value = '';
        passwordFiled.value = '';
    }

})