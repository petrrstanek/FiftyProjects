const output = document.querySelector('.output')
const input = document.querySelector('.input')
const output2 = document.querySelector('.output2')
const output3 = document.querySelector('.output3')

window.addEventListener('keydown', press, true)

function press(event){
    const keyButton = document.createElement('p')
    const codeButton = document.createElement('p')
    const codeKeyButton = document.createElement('p')

    keyButton.textContent = 'event.key';
    codeButton.textContent = 'event.code';
    codeKeyButton.textContent = 'event.keyCode';
    
    input.style.display = 'none';
    output.style.display = 'block';
    output2.style.display = 'block';
    output3.style.display = 'block';
    
    output.textContent = event.key;
    output2.textContent = event.code;
    output3.textContent = event.keyCode;
    

    output.append(keyButton);
    output2.append(codeButton);
    output3.append(codeKeyButton);  
}