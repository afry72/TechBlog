const newPostButton = document.getElementById('new-post');

const newPostHandler = async (event) => {
    event.preventDefault();
    const title = document.getElementById('new-post-title').value.trim();
    const content = document.getElementById('new-post-content').value.trim();
    const state = document.getElementById('state-choice').value;

    if (state === "Choose State") {
        alert('failed to make post, must select a state');
        return;
    }

    if (title && content && state) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({title, content, state,}),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert('failed to make post');
        }
    }
}

newPostButton.addEventListener('submit', newPostHandler);