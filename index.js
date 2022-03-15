// 1. select the target element
// 2. store it in a variable
// 3. add event listener to the target element

//hoisting
// DRY

let targetElement = document.querySelector('#input')
let log = document.getElementById('log');
let tweetBtn = document.getElementById('tweet')
let formElement = document.getElementById('tweet-form');
let tweetListing = document.querySelector('#listing')

let tweetHtml = (elementValue) => {
   return `<li class="sublisting">${elementValue}</li>`
}

let formSubmitHandler = (event) => {
    event.preventDefault();
    let elementValue = targetElement.value;
    
    // let listItem = document.createElement('li')
    // listItem.textContent = elementValue
    // listItem.innerText = elementValue
    // tweetListing.appendChild(listItem)

    tweetListing.innerHTML = tweetListing.innerHTML + tweetHtml(elementValue)
    

    // console.log(elementValue)
}
  
  

let logKey = (event) => {
    let elementValue = targetElement.value;//.replace(/\s+/g, '');
    let result = `Total length of text in input: ${elementValue.length}`;
    
    if (elementValue.length > 0){
        // enable the post button
        tweetBtn.disabled = false
    }
    //check if content is not empty and
    //check if the length of content is less than 140 chars

    if (elementValue.length > 140){
        result = `Characters limit exceeded!  Current length: ${elementValue.length}`;
        tweetBtn.disabled = true
    }


    log.textContent = result;
}

let disablePost = (event) => {
    let elementValue = targetElement.value;
    if (elementValue.length < 1){
        tweetBtn.disabled = true
    }    
}

  
formElement.addEventListener('submit', formSubmitHandler);
targetElement.addEventListener("change", disablePost);
targetElement.addEventListener('keyup', logKey);