document.getElementById('drinkSelect').addEventListener('change', function () {
    var message = '';
    switch (this.value) {
        case 'coffee':
            message = 'Ви обрали каву.';
            break;
        case 'tea':
            message = 'Ви обрали чай.';
            break;
        case 'juice':
            message = 'Ви обрали сік.';
            break;
        default:
            message = '';
    }
    document.getElementById('message').textContent = message;
});
document.getElementById('checkButton').addEventListener('click', function () {
    const dayInput = document.getElementById('dayInput').value
    const mesage = document.getElementById('mesage')

    switch (dayInput) {
        case "понеділок":
        case "вівторок":
        case "середа":
        case "четвер":
        case "п'ятниця":
        case "субота":
            mesage.textContent = 'робочий день'
            mesage.style.color = 'red'
            break;
        case "неділя":
            mesage.textContent = 'Це вихідний день'
            mesage.style.color = 'green'
        default:
            notice.textContent = 'напишіть день з маленької букви та без пробілів'
    }
})
document.getElementById('Check').addEventListener('click', function () {
    const monthInYear = document.getElementById('monthInYear').value
    const messsage = document.getElementById('messsage')

    switch (monthInYear) {
        case 'грудень':
        case 'січень':
        case 'лютий':
            messsage.textContent = 'зима'
            break;
        case 'березень':
        case 'квітень':
        case 'травень':
            messsage.textContent = 'весна'
            break;
        case 'червень':
        case 'липень':
        case 'серпень':
            messsage.textContent = 'літо'
            break;
        case 'вересень':
        case 'жовтень':
        case 'листопад':
            messsage.textContent = 'осінь'
            break;
        default:
            notice.textContent = 'напишіть місяць з маленької букви та без пробілів'
    }
})
document.getElementById('Checkbutton').addEventListener('click', function () {
    const daysInMonth = document.getElementById('daysInMonth').value
    const notification = document.getElementById('notification')

    switch (daysInMonth) {
        case 'грудень':
            notification.textContent = '31 days'
            break;
        case 'січень':
            notification.textContent = '30 days'
            break;
        case 'лютий':
            notification.textContent = '28 days'
            break;
        case 'березень':
            notification.textContent = '31 days'
            break;
        case 'квітень':
            notification.textContent = '30 days'
            break;
        case 'травень':
            notification.textContent = '31 days'
            break;
        case 'червень':
            notification.textContent = '30 days'
            break;
        case 'липень':
            notification.textContent = '31 days'
            break;
        case 'серпень':
            notification.textContent = '31 days'
            break;
        case 'вересень':
            notification.textContent = '30 days'
            break;
        case 'жовтень':
            notification.textContent = '31 days'
            break;
        case 'листопад':
            notification.textContent = '30 days'
            break;
        default:
            notice.textContent = 'напишіть місяць з маленької букви та без пробілів'
    }
})
document.getElementById('CheckButton').addEventListener('click', function () {
    const actionColor = document.getElementById('actionColor').value
    const notice = document.getElementById('notice')

    switch (actionColor) {
        case 'зелений':
            notice.textContent = 'йти'
            notice.style.color = 'darkgreen'
            break;
        case 'червоний':
            notice.textContent = 'стоп'
            notice.style.color = 'red'
            break;
        case 'жовтий':
            notice.textContent = 'чекати'
            notice.style.color = 'orange'
            break;
        default:
            notice.textContent = 'оберіть колір червоний зелений або жовтий'
    }
})


document.getElementById('calculateButton').addEventListener('click', function () {
    const number1 = Number.parseInt(document.getElementById('number1').value)
    const number2 = Number.parseInt(document.getElementById('number2').value)
    const operation = document.getElementById('operation').value
    const result = document.getElementById('result')
    let calcResult
    switch (operation) {
        case '+':
            calcResult = number1 + number2
            break;
        case '-':
            calcResult = number1 - number2
            break;
        case '*':
            calcResult = number1 * number2
            break;
        case '/':
            calcResult = number1 / number2
            break;
            default: 
            result.textContent = 'введіть числа'
    }
    result.textContent = "Результат " + calcResult;
})