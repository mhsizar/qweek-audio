// Event listener for dragover event to add styling
document.getElementById('dropZone').addEventListener('dragover', function(event) {
    event.preventDefault();
    this.classList.add('dragover');
});

// Event listener for dragleave event to remove styling
document.getElementById('dropZone').addEventListener('dragleave', function(event) {
    this.classList.remove('dragover');
});

// Event listener for drop event to handle file drop
document.getElementById('dropZone').addEventListener('drop', function(event) {
    event.preventDefault();
    this.classList.remove('dragover');

    if (event.dataTransfer.files.length) {
        const file = event.dataTransfer.files[0];
        document.getElementById('audioUpload').files = event.dataTransfer.files;
        updateAudioPlayer(file);
        displayUploadSuccess(file);
        displayKeywords(['keyword1', 'keyword2', 'keyword3', 'keyword4', 'keyword5', 'keyword6', 'keyword7', 'keyword8', 'keyword9', 'keyword10']);  // Plugging in dummy keywords for now
    }
});

// Event listener for dropZone click to trigger file input click
document.getElementById('dropZone').addEventListener('click', function() {
    document.getElementById('audioUpload').click();
});

// Function to update the audio player with the selected file
function updateAudioPlayer(file) {
    const audioPlayer = document.getElementById('audioPlayer');
    const url = URL.createObjectURL(file);
    audioPlayer.src = url;
    audioPlayer.load();
}

// Function to display upload success message and file name
function displayUploadSuccess(file) {
    const fileName = file.name;
    const uploadMessage = document.getElementById('upload-message');
    const audioFileName = document.getElementById('audio-file-name');
    const replaceAudioFile = document.getElementById('replace-audio-file');
    const dropZone = document.getElementById('dropZone');

    // Hide drop zone and show success message and file name
    dropZone.style.display = 'none';
    document.getElementById('outputBox').style.display = 'none';
    uploadMessage.style.display = 'block';
    audioFileName.style.display = 'block';
    replaceAudioFile.style.display = 'block';
    uploadMessage.innerHTML = 'Audio file uploaded successfully! Click the file name to play.';
    audioFileName.innerHTML = `<a href="#" onclick="document.getElementById('audioPlayer').play(); return false;"><strong>${fileName}</strong></a>`;
    replaceAudioFile.innerHTML = `<br><a href="#" onclick="resetUpload(); return false;">Click here to upload a new file</a>`;
    uploadMessage.style.color = 'white';
    uploadMessage.style.marginTop = '20px';
}

// Function to display the keywords in the keywords bar
function displayKeywords(keywords) {
    const keywordMessage = document.getElementById('keywords-message');
    const keywordsContainer = document.getElementById('keywords-container');

    // Hide the defualt message and display the keywords
    keywordMessage.style.display = 'none';
    keywordsContainer.innerHTML = keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join(' ');
    keywordsContainer.style.display = 'block';
}

// Function to update the output box with content
function updateOutput(content) {
    const outputBox = document.getElementById('outputBox');
    outputBox.style.display = 'flex';
    outputBox.innerText = content;
}

// Function to reset the upload and show the drop zone again
function resetUpload() {
    const uploadMessage = document.getElementById('upload-message');
    const audioFileName = document.getElementById('audio-file-name');
    const replaceAudioFile = document.getElementById('replace-audio-file');
    const dropZone = document.getElementById('dropZone');
    const audioPlayer = document.getElementById('audioPlayer');
    const keywordsContainer = document.getElementById('keywords-container');
    const keywordMessage = document.getElementById('keywords-message');

    // Clear the file input
    document.getElementById('audioUpload').value = '';

    // Reset the audio player
    audioPlayer.src = '';
    audioPlayer.load();

    // Hide success message and file name, show drop zone
    uploadMessage.style.display = 'none';
    audioFileName.style.display = 'none';
    replaceAudioFile.style.display = 'none';
    dropZone.style.display = 'flex';
    document.getElementById('outputBox').style.display = 'none';

    // Clear keywords
    keywordsContainer.innerHTML = '';
    keywordMessage.style.display = 'block';
}

// Hide output box initially
document.getElementById('outputBox').style.display = 'none';

// Event listener for file input change
document.getElementById('audioUpload').addEventListener('change', function(event) {
    if (event.target.files.length) {
        const file = event.target.files[0];
        updateAudioPlayer(file);
        displayUploadSuccess(file);
        displayKeywords(['keyword1', 'keyword2', 'keyword3', 'keyword4', 'keyword5', 'keyword6', 'keyword7', 'keyword8', 'keyword9', 'keyword10']);  // Plugging in dummy keywords for now
    }
});

// Event listener for transcript button click
document.getElementById('transcriptBtn').addEventListener('click', () => {
    if (document.getElementById('audioUpload').files.length === 0) {
        updateOutput('Please upload an audio file!');
    } else {
        updateOutput('Generating transcript...');
        // Add API call here to generate transcript
    }
});

// Event listener for summary button click
document.getElementById('summaryBtn').addEventListener('click', () => {
    if (document.getElementById('audioUpload').files.length === 0) {
        updateOutput('Please upload an audio file!');
    } else {
        updateOutput('Summary feature is under construction. Please check back later.');
        // Add API call here for summary when ready
    }
});

// Event listener for important points button click
document.getElementById('importantPointsBtn').addEventListener('click', () => {
    if (document.getElementById('audioUpload').files.length === 0) {
        updateOutput('Please upload an audio file!');
    } else {
        updateOutput('Important points feature is under construction. Please check back later.');
        // Add API call here for important points when ready
    }
});