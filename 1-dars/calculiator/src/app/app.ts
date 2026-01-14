import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [FormsModule]
})
export class App {
  number1 : number | null = null;
  number2 : number | null = null;
  result  : number | null = null;;

  calculate(operator: '+' | '-' | '*' | '/') {
    const a = this.number1;
    const b = this.number2;

    if (a === null  || b === null) {
      this.result = null;
      return;
    }

    switch (operator) {
      case '+':
        this.result = a + b;
        break;
      case '-':
        this.result = a - b;
        break;
      case '*':
        this.result = a * b;
        break;
      case '/':
        this.result = b !== 0 ? a / b : NaN;
        break;
    }
  }
}
