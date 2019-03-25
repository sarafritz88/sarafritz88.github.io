// get the inputs
const inputs = [].slice.call(document.querySelectorAll('.block input'));

// listen for changes
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate(e) {

    document.documentElement.style.setProperty(`--${this.id}`, this.value );
    let one = base1.value;
    let two = base2.value;
    let three = base3.value;
    let four = base4.value;

    document.querySelector('.list').innerHTML = one +", "+ two + ", "+ three +", "+ four;

}

let clipboard = new Clipboard('.copy-letter-button');
