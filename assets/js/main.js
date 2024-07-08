
window.addEventListener('load', async function () {
  addCopyButton()
  console.log("Loaded")
})


function addCopyButton() {
  // Find all divs with the class 'code-container'
  const codeContainers = document.querySelectorAll('.code-container');

  codeContainers.forEach(container => {
    // Create a copy button
    const copyButton = document.createElement('button');
    copyButton.innerText = 'Copy';
    copyButton.className = 'copy-button';

    // Append the button to the container
    container.appendChild(copyButton);

    // Add click event listener to the button
    copyButton.addEventListener('click', function () {
      // Clone the container and remove the copy button from the clone
      const clone = container.cloneNode(true);
      const buttonInClone = clone.querySelector('.copy-button');
      if (buttonInClone) {
        clone.removeChild(buttonInClone);
      }

      // Create a temporary textarea to hold the text to be copied
      const tempTextarea = document.createElement('textarea');
      tempTextarea.value = clone.innerText;
      document.body.appendChild(tempTextarea);

      // Select the text and copy it to the clipboard
      tempTextarea.select();
      document.execCommand('copy');

      // Remove the temporary textarea
      document.body.removeChild(tempTextarea);

      // Optionally, provide feedback to the user
      copyButton.innerText = 'Copied!';
      setTimeout(() => {
        copyButton.innerText = 'Copy';
      }, 2000);
    });
  });
}