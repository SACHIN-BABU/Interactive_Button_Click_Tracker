# Interactive_Button_Click_Tracker
## Date:11-07-2025
## Sachin B
## 212222060207

## Objective:
To implement a counter using JavaScript closures and demonstrate how variables maintain their state across function calls, emphasizing the concepts of function scope and lexical closures.

## Tasks:

#### 1. Structure the HTML Layout:
Create a simple interface with:

A heading like ```<h1>ClickCounter</h1>```

A ```<button>``` labeled “Click Me”

A ```<p> or <div>``` to display the number of clicks

#### 2. Style with CSS:
Center the layout and apply padding and background color

Use large fonts for the click display

Add hover effects on the button

#### 3. Write JavaScript with Closure:
Create a function createCounter() that returns another function

The inner function should increment and return a count variable stored in the outer function’s scope

Use this closure to track how many times the button has been clicked

Update the DOM each time the button is clicked using the closure function
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>ClickCounter</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>ClickCounter</h1>
    <button id="clickBtn">Click Me</button>
    <p id="countDisplay">Clicked: 0 times</p>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## CSS Code:
```
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #74ebd5, #9face6);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-attachment: fixed;
  background-size: cover;
}

.container {
  background: rgba(255, 255, 255, 0.95);
  padding: 30px 20px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 300px;
}

h1 {
  color: #2d3436;
  margin-bottom: 20px;
}

button {
  padding: 12px 20px;
  font-size: 16px;
  background-color: #00b894;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: #019875;
}

#countDisplay {
  font-size: 22px;
  margin-top: 20px;
  color: #2c3e50;
  font-weight: bold;
}
```
## JavaScript Code:
```
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const countClicks = createCounter();
const button = document.getElementById("clickBtn");
const display = document.getElementById("countDisplay");

button.addEventListener("click", () => {
  const clicks = countClicks();
  display.textContent = `Clicked: ${clicks} times`;
});
```
## Output:
<img width="1919" height="874" alt="image" src="https://github.com/user-attachments/assets/80b45e7e-5279-46f2-ad9a-cb8bdfff2508" />


## Result:
A mini module using JavaScript closure and scope is successfully implemented to build an interactive button click tracker that updates in real time without exposing internal variables.
