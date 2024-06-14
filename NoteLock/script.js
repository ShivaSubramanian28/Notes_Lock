let loggedIn = false;

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Basic login check
    if (username === 'user' && password === 'password') {
        loggedIn = true;
        alert('Login successful');
        document.getElementById('login').style.display = 'none';
        document.getElementById('notes').style.display = 'block';
    } else {
        alert('Invalid username or password');
    }
}

function addNote(event) {
    event.preventDefault();
    if (!loggedIn) {
        alert('Please log in to add notes.');
        return;
    }

    const title = document.getElementById('noteTitle').value.trim();
    const text = document.getElementById('noteText').value.trim();
    const media = document.getElementById('noteMedia').files[0];
    const notesList = document.getElementById('notesList');

    const listItem = document.createElement('li');
    if (title) {
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        listItem.appendChild(titleElement);
    }
    if (text) {
        const textElement = document.createElement('p');
        textElement.textContent = text;
        listItem.appendChild(textElement);
    }
    if (media) {
        const mediaElement = document.createElement(media.type.startsWith('audio') ? 'audio' : 'video');
        mediaElement.controls = true;
        mediaElement.src = URL.createObjectURL(media);
        listItem.appendChild(mediaElement);
    }

    notesList.appendChild(listItem);

    document.getElementById('noteForm').reset();
}

document.getElementById('noteForm').addEventListener('submit', addNote);