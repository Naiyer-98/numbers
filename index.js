function processNumber() {
    const inputField = document.getElementById('numInput');
    const messageDiv = document.getElementById('message');
    const num = parseInt(inputField.value);
  
    // Clear previous message
    messageDiv.innerHTML = '';
  
    // Check for non-numeric input
    if (isNaN(num)) {
      messageDiv.innerHTML = 'Please enter a valid number.';
      return;
    }
  
    // Check for negative numbers
    if (num < 0) {
      messageDiv.innerHTML = 'Enter a positive value.';
      return;
    }
  
    // Check if the number is even or odd
    if (num % 2 === 0) {
      // Show next 3 even numbers
      const nextEvenNumbers = [];
      for (let i = 1; i <= 3; i++) {
        nextEvenNumbers.push(num + (i * 2));
      }
      messageDiv.innerHTML = `Next 3 even numbers: ${nextEvenNumbers.join(', ')}`;
    } else {
      // Show next 3 odd numbers
      const nextOddNumbers = [];
      for (let i = 1; i <= 3; i++) {
        nextOddNumbers.push(num + (i * 2));
      }
      messageDiv.innerHTML = `Next 3 odd numbers: ${nextOddNumbers.join(', ')}`;
    }
  }
  