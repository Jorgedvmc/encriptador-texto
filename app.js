document.getElementById('encrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = inputText.replace(/e/g, 'enter')
                                   .replace(/i/g, 'imes')
                                   .replace(/a/g, 'ai')
                                   .replace(/o/g, 'ober')
                                   .replace(/u/g, 'ufat');
    document.getElementById('output-text').value = encryptedText;
    document.querySelector('.output-section p').style.display = 'none';
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = inputText.replace(/enter/g, 'e')
                                   .replace(/imes/g, 'i')
                                   .replace(/ai/g, 'a')
                                   .replace(/ober/g, 'o')
                                   .replace(/ufat/g, 'u');
    document.getElementById('output-text').value = decryptedText;
    document.querySelector('.output-section p').style.display = 'none';
});

document.getElementById('copy-btn').addEventListener('click', () => {
    const outputText = document.getElementById('output-text');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});
