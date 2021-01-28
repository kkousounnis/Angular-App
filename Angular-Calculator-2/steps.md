# Step 1.
mkdir example-calculator

# Step. 2
npm i -g @angular/cli

# Step 3.
ng new example-calculator
(1st question for strict Yes)
(2nd question for routing No)
(3rd question for CSS, CSS)

# Step 4.
cd example-calculator

# Step 5.
ng serve

# Step 6.
ng generate component caclulator --skipTests

# Step 7.
fill src/app/calculator/calculator.component.html with the code from http://jsfiddle.net/ayoisaiah/c8b9zsaq/

# Step 8.
fill src/app/calculator.component.css with the following code
.calculator {
    border: 1px solid #ccc;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
  }

  .calculator-screen {
    width: 100%;
    font-size: 5rem;
    height: 80px;
    border: none;
    background-color: #252525;
    color: #fff;
    text-align: right;
    padding-right: 20px;
    padding-left: 10px;
  }

  button {
    height: 60px;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #c4c4c4;
    background-color: transparent;
    font-size: 2rem;
    color: #333;
    background-image: linear-gradient(to bottom,transparent,transparent 50%,rgba(0,0,0,.04));
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.05), inset 0 1px 0 0 rgba(255,255,255,.45), inset 0 -1px 0 0 rgba(255,255,255,.15), 0 1px 0 0 rgba(255,255,255,.15);
    text-shadow: 0 1px rgba(255,255,255,.4);
  }

  button:hover {
    background-color: #eaeaea;
  }

  .operator {
    color: #337cac;
  }

  .all-clear {
    background-color: #f0595f;
    border-color: #b0353a;
    color: #fff;
  }

  .all-clear:hover {
    background-color: #f17377;
  }

  .equal-sign {
    background-color: #2e86c0;
    border-color: #337cac;
    color: #fff;
    height: 100%;
    grid-area: 2 / 4 / 6 / 5;
  }

  .equal-sign:hover {
    background-color: #4e9ed4;
  }

  .calculator-keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 20px;
  }


# Step 9.
fill ./styles.css with the following code
html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

# Step 10.
start experimenting on ./src/app/calculator/calculator.component.html with the use of (click) on buttons

# Step 11.
implement the business logic of the calculator by defining the functions that perform what the user does on the backend on ./src/app/calculator/calculator.component.ts