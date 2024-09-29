 // Task 1: Cuboid Surface Area and Volume
 function calculateCuboid() {
    let a = 10.4, b = 13.5, c = 8.2;
    let surfaceArea = 2 * (a * b + b * c + c * a);
    let volume = a * b * c;
    document.getElementById('task1Output').textContent = `Surface Area: ${surfaceArea.toFixed(2)}, Volume: ${volume.toFixed(2)}`;
}

// Task 2: Remaining Seconds in a Day
function calculateRemainingSeconds() {
    let currentHours = 14, currentMinutes = 34, currentSeconds = 42;
    let totalSecondsInDay = 24 * 60 * 60;
    let elapsedSeconds = (currentHours * 60 * 60) + (currentMinutes * 60) + currentSeconds;
    let remainingSeconds = totalSecondsInDay - elapsedSeconds;
    document.getElementById('task2Output').textContent = `Remaining Seconds: ${remainingSeconds}`;
}

// Task 3: Body Mass Index (BMI)
function calculateBMI() {
    let mass = 81.2, height = 1.78;
    let bmi = mass / (height * height);
    document.getElementById('task3Output').textContent = `BMI: ${bmi.toFixed(2)}`;
}

// Task 4: Grade Based on Score
function getGrade() {
    let score = document.getElementById('scoreInput').value;
    let grade = (score >= 90) ? 'A' : (score >= 80) ? 'B' : (score >= 70) ? 'C' : (score >= 60) ? 'D' : 'F';
    document.getElementById('task4Output').textContent = `Grade: ${grade}`;
}

// Task 5: Leap Year Checker
function checkLeapYear() {
    let year = document.getElementById('yearInput').value;
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    document.getElementById('task5Output').textContent = isLeap ? `${year} is a Leap Year` : `${year} is not a Leap Year`;
}

// Task 6: Rock, Paper, Scissors Game
function playGame() {
    let p1 = parseInt(document.getElementById('player1').value);
    let p2 = parseInt(document.getElementById('player2').value);
    if (p1 === p2) {
        document.getElementById('task6Output').textContent = "It's a tie!";
    } else if ((p1 === 1 && p2 === 3) || (p1 === 2 && p2 === 1) || (p1 === 3 && p2 === 2)) {
        document.getElementById('task6Output').textContent = "Player 1 wins!";
    } else {
        document.getElementById('task6Output').textContent = "Player 2 wins!";
    }
}

// Task 7: Print Letters of a String
function printLetters() {
    let str = document.getElementById('stringInput').value;
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i] + "<br>";
    }
    document.getElementById('task7Output').innerHTML = result
    ;
}

// Task 8: Factorial of a Number
function calculateFactorial() {
    let num = parseInt(document.getElementById('factorialInput').value);
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById('task8Output').textContent = `${num}! = ${factorial}`;
}

// Task 9: Average of Digits
function averageDigits() {
    let number = document.getElementById('digitInput').value;
    let sum = 0;
    for (let digit of number) {
        sum += parseInt(digit);
    }
    let avg = sum / number.length;
    document.getElementById('task9Output').textContent = `The average of digits is ${avg}`;
}

// Task 10: Draw a Square with Diagonal
function drawSquare() {
    let size = parseInt(document.getElementById('squareSize').value);
    let square = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || i === j) {
                square += '%';
            } else {
                square += ' ';
            }
        }
        square += '\n';
    }
    document.getElementById('task10Output').textContent = square;
}

// Task 11: Print Letters Until Non-Letter
function printUntilNonLetter() {
    let str = document.getElementById('letterString').value;
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!/[a-zA-Z]/.test(str[i])) {
            break;
        }
        result += str[i] + '<br>';
    }
    document.getElementById('task11Output').innerHTML = result;
}

// Task 12: Print Numbers (Skip Divisible by 3 in Sequence)
function printSkippedNumbers() {
    let result = '';
    let divisibleBy3Counter = 1;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            if (divisibleBy3Counter % 3 === 0) {
                divisibleBy3Counter = 1;
                continue;
            } else {
                divisibleBy3Counter++;
            }
        }
        result += i + ', ';
    }
    document.getElementById('task12Output').textContent = result.slice(0, -2);
}

// Task 13: Print Divisors of Numbers from 10 to 30
function printDivisors() {
    let result = '';
    for (let num = 10; num <= 30; num++) {
        result += `${num}: `;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                result += i + ', ';
            }
        }
        result = result.slice(0, -2) + '\n'; 
    }
    document.getElementById('task13Output').textContent = result;
}

// Task 14: FizzBuzz
function fizzBuzz() {
    let result = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            result += 'fizzbuzz, ';
        } else if (i % 3 === 0) {
            result += 'fizz, ';
        } else if (i % 5 === 0) {
            result += 'buzz, ';
        } else {
            result += i + ', ';
        }
    }
    document.getElementById('task14Output').textContent = result.slice(0, -2);
}