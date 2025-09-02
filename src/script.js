window.addEventListener('load', async () => {
    console.log('Page loaded! Starting extension code...');

    // Create a sample button
    const button = document.createElement("button");
    button.textContent = "Click Me";

    // Format the button using CSS (see script.css)
    button.classList.add("sample-button");

    button.addEventListener('click', () => {
        console.log('Button clicked!')
    })

    // Add it to the page after the Reddit logo
    const beforeElement = document.body.querySelector('faceplate-tracker[noun="reddit_logo"]');
    beforeElement.insertAdjacentElement('afterend', button);
})