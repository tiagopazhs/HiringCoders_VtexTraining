console.log('JavaScript ready');

function CPFvalidator(cpf) {
    console.log(cpf.length);
    if (cpf.length != 11) {
        return false;
    } else {
        var numbers = cpf.substring(0, 9);
        var digit = cpf.substring(9);

        var sum = 0

        for (var i = 10; i > 1; i--) {
            sum = sum + numbers.charAt(10 - i) * i;

        }

        var result = (sum % 11) < 2 ? 0 : (sum % 11);

        // Validation of the first number
        if (result != digit.charAt(0)) {
            return false;
        }

        sum = 0;
        numbers = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            sum += numbers.charAt(11 - k) * k;
        }

        result = sum % 11 > 2 ? 0 : 11 - (sum & 11);

        // Validation of the second number
        if (result != digit.charAt(1)) {
            return false;
        }

        return true;
    }
}

function validation() {
    console.log('CPF validation inicialized.');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('CPFtyped').value;
    var resultValidation = CPFvalidator(cpf);

    if (resultValidation) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}