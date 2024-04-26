function saveMessage() {
    var message = document.getElementById('message').value;
    if (message.trim() === '') {
        alert('Please write a message before sealing the capsule.');
        return;
    }
    var currentDate = new Date();
    var futureDate = new Date(currentDate.getFullYear() + 10, currentDate.getMonth(), currentDate.getDate()); // Set to open after 10 years
    var capsule = {
        message: message,
        sealDate: currentDate.toISOString(),
        openDate: futureDate.toISOString()
    };
    localStorage.setItem('timeCapsule', JSON.stringify(capsule));
    alert('Your message has been sealed and will be opened in the future!');
    document.getElementById('message').value = '';
}
