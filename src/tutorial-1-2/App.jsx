import React from "react"
function App() {

    let email = ''
    let password = ''
    let alertMessage = ''
    let errors

    const validateForm = () => {
        errors = {}
        let emailSpaces = email.indexOf(' ')
        let passwordSpaces = password.indexOf(' ')

        if (emailSpaces > 0) {
            errors.emailSpaces = 'в поле email пробелы!'
        }
        if (passwordSpaces > 0) {
            errors.passwordSpaces = 'в пароле пробелы!'
        }

        if (!email.length){
            errors.email = 'email не заполнен'
        }
        if (!password.length){
            errors.password = 'пароль не заполнен'
        }
        if(!Object.keys(errors).length){
            console.log({ email, password })
            return true
        }else{
            alertMessage = Object.values(errors)
            alert(alertMessage)
            return false
        }
    }

    const clearForm = () => {
        email = ''
        password = ''
        alert('Поля очищены')
    }

    const detectChangeForm = (event) => {
        switch (event.target.name) {
            case 'email':
                email = event.target.value
                break;
            case 'password':
                password = event.target.value
                break;
            default:
                return false
        }
        validateForm(email, password)
    }

    // я не понял как блокировать автоматическое обновление страницы при submit

    const handleSubmit = () => {
        if(!Object.keys(errors).length){
            console.log({ email, password })
            return true
        }else{
            alertMessage = Object.values(errors)
            alert(alertMessage)
            return false
        }
    }

    return (
        <div style={{padding: 'var(--size-8)'}}>
            <form>
                <input type="email" placeholder={'E-Mail'} name="email" onChange={detectChangeForm} />
                <input type="password" placeholder={'Пароль'} name="password"  onChange={detectChangeForm} />
                <button type="submit" onClick={handleSubmit}>Войти</button>
            </form>
        </div>
    )
}
export default App