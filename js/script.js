let message = '';
let output = '';
let vowels = ['a', 'e', 'i', 'o' ,'u'];
let replacement = ['ai', 'enter', 'imes', 'ober', 'ufat'];

function textAreaBackground() {
    document.getElementById('text-input').style.background = '#130d47';
    document.getElementById('text-input').style.filter = 'saturate(125%)';
}

function BlockOutputArea() {
    document.getElementById("text-output").disabled="false";
}

function verifyMessage() {
    message = document.getElementById('text-input').value;
    let regex = /^[a-z\s\d[\\\]^]+$/;

    if (!regex.test(message)) {
        document.getElementById('text-input').value = '';  
        document.getElementById('text-output').style.background = 'url(../infografico-encriptador/img/score-screen.png)'; 
        document.getElementById('text-output').style.filter = 'saturate(200%)';    
        document.getElementById('text-output').style.backgroundSize = 'contain';
        document.getElementById('text-output').style.backgroundPosition = 'center';
        alert('Solo se permiten letras minúsculas y sin acentos.')
    }
}

function controls(controlsParameter) {
    switch (controlsParameter) {
        case 'A':

            verifyMessage()
            message = document.getElementById('text-input').value;
            output = '';

            for (let i = 0; i < message.length; i++) {
                let character = message[i];
                if (vowels.includes(character)) {
                    let vowelsIndex = vowels.indexOf(character);
                    output += replacement[vowelsIndex];
                } else {
                    output += character;
                }     
            }

            if (output !== "") {
                document.getElementById('text-output').value = output;
                document.getElementById('text-output').style.background = '#000000';                
            }

            break;    
        case 'B':

            verifyMessage()
            message = document.getElementById('text-input').value.toLowerCase();       

            for (let i = 0; i < message.length; i++) {
                if (message.includes(replacement[i])) {
                    message = message.replaceAll(replacement[i], vowels[i]);  
                } 
            }

            document.getElementById('text-output').value = message;
            
            break;              
        case 'Reset':
            document.getElementById('text-input').value = '';  
            document.getElementById('text-input').style.background = 'url(../infografico-encriptador/img/start-screen.png)'; 
            document.getElementById('text-input').style.filter = 'saturate(200%)';    
            document.getElementById('text-input').style.backgroundSize = 'contain';

            document.getElementById('text-output').value = '';  
            document.getElementById('text-output').style.background = 'url(../infografico-encriptador/img/score-screen.png)'; 
            document.getElementById('text-output').style.filter = 'saturate(200%)';    
            document.getElementById('text-output').style.backgroundSize = 'contain';
            document.getElementById('text-output').style.backgroundPosition = 'center';
            break;
        default:
            break;
    }
}

function buttonDelete() {
    document.getElementById('text-output').value = '';  
    document.getElementById('text-output').style.background = 'url(../infografico-encriptador/img/score-screen.png)'; 
    document.getElementById('text-output').style.filter = 'saturate(200%)';    
    document.getElementById('text-output').style.backgroundSize = 'contain';
    document.getElementById('text-output').style.backgroundPosition = 'center';
}

function buttonCopy() {
    let copyText = document.getElementById('text-output');
    navigator.clipboard.writeText(copyText.value);
}

BlockOutputArea();

