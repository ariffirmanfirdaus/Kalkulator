let display = document.getElementById('display');
let currentInput = ''; // Menyimpan nilai input sementara

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculate() {
    try {
        let expression = currentInput.replace(/÷/g, '/').replace(/×/g, '*'); // Menangani ÷ dan ×
        const result = Function('"use strict";return (' + expression + ')')();
        display.value = result;
        addToHistory(expression, result); // Menambahkan operasi ke histori
        currentInput = result.toString(); // Menyimpan hasil perhitungan sebagai input sementara
    } catch (error) {
        display.value = 'Error: ' + error.message; // Menampilkan pesan kesalahan yang lebih deskriptif
    }
}

function calculatePercentage() {
    display.value = eval(currentInput + '/100');
    currentInput = display.value; // Menyimpan hasil persentase sebagai input sementara
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function addToHistory(expression, result) {
    const historyList = document.getElementById('history-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${expression} = ${result}`;
    historyList.appendChild(listItem);

}

function toggleHistory() {
    const history = document.getElementById('history');
    if (history.style.display === 'none' || history.style.display === '') {
        history.style.display = 'block';
    } else {
        history.style.display = 'none';
    }
}

