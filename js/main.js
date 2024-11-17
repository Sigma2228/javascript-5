document.getElementById('drinkSelect').addEventListener('change', function() {
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