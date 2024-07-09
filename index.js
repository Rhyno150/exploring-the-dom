const myMessage = document.querySelector('.myMessage');
const theMessageButton = document.querySelector('.theMessageButton');
const clearMessageButton = document.querySelector('.clearMessageButton');
const inputBox = document.querySelector('.theInputValue');
const fruitList = document.querySelector('.fruits');
const fruitInput = document.querySelector('.inputFruit');
const addFruitButton = document.querySelector('.addFruitButton');

theMessageButton.addEventListener('click', function () {
    alert("button clicked!")

    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;





    }
});




clearMessageButton.addEventListener('click', function () {
    myMessage.innerText = '';
});

myMessage.addEventListener('click', function () {
    myMessage.classList.toggle('darkmode')

})

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

const fruitsList = document.querySelector(".fruits"); // Get the UL element

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  const li = document.createElement('li');
  li.innerText = fruit;
  fruitList.appendChild(li);
}

//addFruitButton.addEventListener('click', function () {
  //  const li = document.createElement('li');
  // li.innerText = fruitInput.value;
 //  fruitList.appendChild(li);
//})
addFruitButton.addEventListener('click', function () {
    // 1. Get the fruit name from the input element
    const fruitName = document.querySelector('.inputFruit').value;  // Assuming input has class 'inputFruit'
  
    // 2. Validate input (optional)
    if (!fruitName.trim()) {
      return; // Exit the function if no fruit name is entered
    }
  
    // 3. Create a new list item (li) element
    const li = document.createElement('li');
    li.innerText = fruitName;
  
    // 4. Append the list item to the fruit list
    fruitList.appendChild(li);
  
    // 5. (Optional) Clear the input field after adding
    document.querySelector('.inputFruit').value = "";
  });
  


  


