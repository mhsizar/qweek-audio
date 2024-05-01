function updateAudioPlayer(file) {
    const audioPlayer = document.getElementById('audioPlayer');
    const url = URL.createObjectURL(file);
    audioPlayer.src = url;
    audioPlayer.load(); 
}

document.getElementById('audioUpload').addEventListener('change', function(event) {
    if (event.target.files.length) {
        updateAudioPlayer(event.target.files[0]);
    }
});

document.getElementById('dropZone').addEventListener('click', function() {
    document.getElementById('audioUpload').click();
});

document.getElementById('dropZone').addEventListener('dragover', function(event) {
    event.preventDefault();
    this.classList.add('dragover');
});

document.getElementById('dropZone').addEventListener('dragleave', function(event) {
    this.classList.remove('dragover');
});


document.getElementById('dropZone').addEventListener('drop', function(event) {
    event.preventDefault();
    this.classList.remove('dragover');
    
    if (event.dataTransfer.files.length) {
        const file = event.dataTransfer.files[0];
        document.getElementById('audioUpload').files = event.dataTransfer.files;
        updateAudioPlayer(file);
    }
});

document.getElementById('outputBox').style.display = 'none';

function updateOutput(content) {
    const outputBox = document.getElementById('outputBox');
    outputBox.style.display = 'flex'; 
    outputBox.innerText = content; 
}

document.getElementById('transcriptBtn').addEventListener('click', () => {
    updateOutput('Displaying transcript...');
});


document.getElementById('summaryBtn').addEventListener('click', () => {
    updateOutput('Displaying summary...');
});


document.getElementById('importantPointsBtn').addEventListener('click', () => {
    updateOutput('Displaying important points...');
});

