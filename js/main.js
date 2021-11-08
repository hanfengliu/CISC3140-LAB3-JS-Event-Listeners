const input = document.getElementById('input');
const output = document.getElementById('output');
const button = document.getElementById('button');
const listItem = document.getElementById('list').children;

// called when there are input typed into the input field
input.addEventListener('input', function(e){
	e.preventDefault();
	output.style.display='block';
	button.disabled = false;
	let value = input.value;

    // check if there if there are at least 8 character
    if(value.length > 7){
        listItem[0].classList.add("text-white");
        listItem[0].classList.remove("text-secondary");
    } else {
        listItem[0].classList.add("text-secondary");
        listItem[0].classList.remove("text-white");
    }

    // check if there are any uppercase letter
	if(/[A-Z]/.test(value)){
    	listItem[1].classList.add("text-white");
    	listItem[1].classList.remove("text-secondary");
  	} else {
  		listItem[1].classList.add("text-secondary");
    	listItem[1].classList.remove("text-white");
  	}

    // check if there are any lowercase letter
    if(/[a-z]/.test(value)){
        listItem[2].classList.add("text-white");
        listItem[2].classList.remove("text-secondary");
    } else {
        listItem[2].classList.add("text-secondary");
        listItem[2].classList.remove("text-white");
    }

    // check if there are any number
    if(/[0-9]/.test(value)){
        listItem[3].classList.add("text-white");
        listItem[3].classList.remove("text-secondary");
    } else {
        listItem[3].classList.add("text-secondary");
        listItem[3].classList.remove("text-white");
    }

    // check if there are any special character
    if(/[^A-Za-z0-9]/.test(value)){
        listItem[4].classList.add("text-white");
        listItem[4].classList.remove("text-secondary");
    } else {
        listItem[4].classList.add("text-secondary");
        listItem[4].classList.remove("text-white");
    }
})

// called when the button is clicked
button.addEventListener('click', function(e){
    let value = input.value;

    // check if all condition match
    if(value.length > 7&&/[A-Z]/.test(value)&&/[a-z]/.test(value)&&/[0-9]/.test(value)&&/[^A-Za-z0-9]/.test(value)){
        alert("All condition match");
    }
    else{
        alert("Try again, not all condition match");
    }
})