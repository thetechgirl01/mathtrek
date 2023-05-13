const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random() * 10);
// to create a random number we can we use math.random() 
//dont forget to add brackets because is a function.
//if you console.log(num1) using open div to span in your chrome 
//but in order to get random numbers between 0 to 10 you multiply by 10 
//we dont want decimals so we add math.ceil
// order to manipulate this headeder "what is 1 multiply by 1" 
//you need to bring it first to the js and return it. as the h1 tag has an id of "question" 
//we can return it using get element by id
//now we can manipulate it using.innertext
const questionEl = document.getElementById("question");

questionEl.innerText =`What is ${num1} 
multiply by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
      score++;
      updateLocalStorage();
    } else {
      score--;
      updateLocalStorage();
    }
  });
