// Function to select a story and display it on the page
function selectStory() {
  // Get the selected story type and screenplay format (if applicable)
  const storyType = document.getElementById('storyType').value;
  const screenplayFormat = document.getElementById('screenplayFormat')?.value;

  // Check if a story type has been selected
  if (!storyType) {
    alert('Please select a story type');
    return;
  }

  // Generate the selected story text
  let selectedStory = '';
  if (storyType === 'Screenplay' && screenplayFormat) {
    selectedStory = `Selected Story: ${screenplayFormat} ${storyType}`;
  } else {
    selectedStory = `Selected Story: ${storyType}`;
  }

  // Display the selected story on the page
  document.getElementById('selectedStory').innerHTML = `<h2>${selectedStory}</h2>`;
}

// Show the screenplay formats dropdown if the Screenplay option is selected
document.getElementById('storyType').addEventListener('change', (event) => {
  const screenplayFormatsDiv = document.querySelector('.screenplay-formats');
  if (event.target.value === 'Screenplay') {
    screenplayFormatsDiv.style.display = 'block';
  } else {
    screenplayFormatsDiv.style.display = 'none';
  }
});

// Function to save the story to local storage
function saveResults() {
  const title = document.getElementById('title').value;
  const storyGenre = document.getElementById('storyGenre').value;
  const storyType = document.getElementById('storyType').value;
  const screenplayFormat = document.getElementById('screenplayFormat')?.value;

  const story = {
    title,
    storyGenre,
    storyType,
    screenplayFormat
  };

  localStorage.setItem('story', JSON.stringify(story));
  alert('Story saved to local storage');
}

// Function to start over and clear the form and selected story
function startOver() {
  document.getElementById('add-story-form').reset();
  document.getElementById('selectedStory').innerHTML = '';
  localStorage.removeItem('story');
  alert('Form and selected story cleared');
}

function displayCharacterTemplate() {
  // Get the title and story genre entered by the user
  const title = document.getElementById('title').value;
  const storyGenre = document.getElementById('storyGenre').value;

  // Check if title and story genre inputs are not empty
  if (!title || !storyGenre) {
    alert('Please enter both title and story genre');
    return;
  }

  // Create the character development template
  const template = `
    <h2>${title} (${storyGenre})</h2>
    <h3>Character Development</h3>
    <label for="character-name">Character Name:</label>
    <input type="text" id="character-name" placeholder="Enter the character's name">
    <br>
    <label for="occupation">Occupation:</label>
    <input type="text" id="occupation" placeholder="Enter the character's occupation">
    <br>
    <label for="personality">Personality Traits:</label>
    <textarea id="personality" placeholder="Enter the character's personality traits"></textarea>
    <br>
    <label for="background">Background:</label>
    <textarea id="background" placeholder="Enter the character's background"></textarea>
    <br>
    <button type="button" onclick="saveCharacterTemplate()">Save Template</button>
  `;

  // Display the character development template on the page
  document.getElementById('selectedStory').innerHTML = template;
}