function calculateAverage() {
    const inputElement = document.getElementById('marks');
    const outputElement = document.getElementById('output');
    const h2Elements = document.getElementsByTagName('h2'); // Получаем коллекцию элементов <h2>
  
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
      
      // Убираем класс "hidden" у каждого элемента <h2>
      for (let i = 0; i < h2Elements.length; i++) {
        h2Elements[i].classList.remove("hidden");
      }
      
      outputElement.textContent = `${average.toFixed(2)}`;
    } else {
      outputElement.textContent = 'Введите допустимые числа.';
    }
  }
  