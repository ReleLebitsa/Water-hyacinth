// Chatbot functionality
document.getElementById('chatbot-button').addEventListener('click', function() {
    document.getElementById('chatbot-popup').style.display = 'block';
});

document.getElementById('close-chatbot').addEventListener('click', function() {
    document.getElementById('chatbot-popup').style.display = 'none';
});

// Modal functionality
document.querySelector('.nav a[href="#upload"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('upload-modal').style.display = 'block';
});

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('upload-modal').style.display = 'none';
});

// Tab functionality
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

// Default tab open
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tablinks').click();
});


