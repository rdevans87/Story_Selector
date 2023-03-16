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

function getCharacterDevelopmentTemplate() {
  let template = `
    <label for="protagonist-name">Protagonist's Name:</label>
    <input type="text" id="protagonist-name" placeholder="Enter the protagonist's name">

    <label for="antagonist-name">Antagonist's Name:</label>
    <input type="text" id="antagonist-name" placeholder="Enter the antagonist's name">

    <label for="protagonist-description">Protagonist's Description:</label>
    <textarea id="protagonist-description" placeholder="Enter a description of the protagonist"></textarea>

    <label for="antagonist-description">Antagonist's Description:</label>
    <textarea id="antagonist-description" placeholder="Enter a description of the antagonist"></textarea>
  `;
  return template;
}

// Function to get the dialogue template
function getDialogueTemplate() {
  let template = `
    <div id="speakers-container">
      <div class="speaker-group">
        <label for="speaker-1">Speaker:</label>
        <input type="text" class="speaker-input" placeholder="Enter the name of the speaker">
      </div>
    </div>
    <label for="dialogue-1">Dialogue:</label>
    <textarea class="dialogue-input" placeholder="Enter the dialogue"></textarea>
    <button type="button" onclick="addSpeaker()">Add Speaker</button>
  `;
  return template;
}

// Function to add a new speaker and dialogue input field
function addSpeaker() {
  const speakersContainer = document.getElementById('speakers-container');
  const speakerGroup = document.createElement('div');
  speakerGroup.classList.add('speaker-group');
  const speakerLabel = document.createElement('label');
  speakerLabel.textContent = 'Speaker:';
  const speakerInput = document.createElement('input');
  speakerInput.type = 'text';
  speakerInput.classList.add('speaker-input');
  speakerInput.placeholder = 'Enter the name of the speaker';
  const removeSpeakerButton = document.createElement('button');
  removeSpeakerButton.type = 'button';
  removeSpeakerButton.textContent = 'Remove Speaker';
  removeSpeakerButton.onclick = () => {
    speakerGroup.remove();
  }
  speakerGroup.appendChild(speakerLabel);
  speakerGroup.appendChild(speakerInput);
  speakerGroup.appendChild(removeSpeakerButton);
  speakersContainer.appendChild(speakerGroup);

  // Add a new dialogue input field
  const dialogueInput = document.createElement('textarea');
  dialogueInput.classList.add('dialogue-input');
  dialogueInput.placeholder = 'Enter the dialogue';
  speakersContainer.appendChild(dialogueInput);
}

// Function to get the novel writing template
function getNovelTemplate() {
  let template = `
    <label for="novel-title">Title:</label>
    <input type="text" id="novel-title" placeholder="Enter the title of your novel">

    <label for="novel-genre">Genre:</label>
    <input type="text" id="novel-genre" placeholder="Enter the genre of your novel">

    <label for="novel-summary">Summary:</label>
    <textarea id="novel-summary" placeholder="Enter a summary of your novel"></textarea>

    <label for="chapter-1">Chapter 1:</label>
    <input type="text" id="chapter-1" placeholder="Enter the title of chapter 1">

    <label for="chapter-1-content">Chapter 1 Content:</label>
    <textarea id="chapter-1-content" placeholder="Enter the content of chapter 1"></textarea>

    <label for="chapter-2">Chapter 2:</label>
    <input type="text" id="chapter-2" placeholder="Enter the title of chapter 2">

    <label for="chapter-2-content">Chapter 2 Content:</label>
    <textarea id="chapter-2-content" placeholder="Enter the content of chapter 2"></textarea>

    <button type="button" onclick="addChapter()">Add Chapter</button>
  `;
  return template;
}

// Function to add a new chapter and content input field
function addChapter() {
  const chapterCount = document.querySelectorAll('input[id^="chapter"]').length + 1;
  const chapterInput = document.createElement('input');
  chapterInput.type = 'text';
  chapterInput.id = `chapter-${chapterCount}`;
  chapterInput.placeholder = `Enter the title of chapter ${chapterCount}`;
  const contentInput = document.createElement('textarea');
  contentInput.id = `chapter-${chapterCount}-content`;
  contentInput.placeholder = `Enter the content of chapter ${chapterCount}`;
  const template = document.getElementById('selectedStory');
  template.insertBefore(chapterInput, template.lastElementChild);
  template.insertBefore(contentInput, template.lastElementChild);
}

function getOnePagerTemplate() {
  let template = `
    <label for="project-title">Title:</label>
    <input type="text" id="project-title" placeholder="Enter the title of your project">

    <label for="logline">Logline:</label>
    <textarea id="logline" placeholder="Enter the logline for your project"></textarea>

    <label for="synopsis">Synopsis:</label>
    <textarea id="synopsis" placeholder="Enter the synopsis for your project"></textarea>

    <label for="tone">Tone:</label>
    <input type="text" id="tone" placeholder="Enter the tone of your project">

    <label for="themes">Themes:</label>
    <textarea id="themes" placeholder="Enter the themes of your project"></textarea>

    <label for="characters">Characters:</label>
    <textarea id="characters" placeholder="Enter the characters in your project"></textarea>

    <label for="setting">Setting:</label>
    <textarea id="setting" placeholder="Enter the setting for your project"></textarea>
  `;
  return template;
}