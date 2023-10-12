function calculateAverage() {
    const inputElement = document.getElementById('marks');
    const outputElement = document.getElementById('output');
    const averageElement = document.getElementById('average');
  
    const inputNumbers = inputElement.value.trim().split(' ');
    let sum = 0;
  
    for (let i = 0; i < inputNumbers.length; i++) {
      const num = parseFloat(inputNumbers[i]);
  
      // Проверка на валидность числа
      if (!isNaN(num)) {
        sum += num;
      }
    }
  
    if (inputNumbers.length > 0) {
      const average = sum / inputNumbers.length;
        averageElement.classList.remove("hidden");
      outputElement.textContent = `${average.toFixed(2)}`;
    } else {
      outputElement.textContent = 'Введите допустимые числа.';
    }
  }
  