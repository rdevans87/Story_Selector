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
  // }
  
  // // Function to get the novel writing template
  // function getNovelTemplate() {
  //   let template = `
  //     <label for="novel-title">Title:</label>
  //     <input type="text" id="novel-title" placeholder="Enter the title of your novel">
  
  //     <label for="novel-genre">Genre:</label>
  //     <input type="text" id="novel-genre" placeholder="Enter the genre of your novel">
  
  //     <label for="novel-summary">Summary:</label>
  //     <textarea id="novel-summary" placeholder="Enter a summary of your novel"></textarea>
  
  //     <label for="chapter-1">Chapter 1:</label>
  //     <input type="text" id="chapter-1" placeholder="Enter the title of chapter 1">
  
  //     <label for="chapter-1-content">Chapter 1 Content:</label>
  //     <textarea id="chapter-1-content" placeholder="Enter the content of chapter 1"></textarea>
  
  //     <label for="chapter-2">Chapter 2:</label>
  //     <input type="text" id="chapter-2" placeholder="Enter the title of chapter 2">
  
  //     <label for="chapter-2-content">Chapter 2 Content:</label>
  //     <textarea id="chapter-2-content" placeholder="Enter the content of chapter 2"></textarea>
  
  //     <button type="button" onclick="addChapter()">Add Chapter</button>
  //   `;
  //   return template;
  // }
  
  // // Function to add a new chapter and content input field
  // function addChapter() {
  //   const chapterCount = document.querySelectorAll('input[id^="chapter"]').length + 1;
  //   const chapterInput = document.createElement('input');
  //   chapterInput.type = 'text';
  //   chapterInput.id = `chapter-${chapterCount}`;
  //   chapterInput.placeholder = `Enter the title of chapter ${chapterCount}`;
  //   const contentInput = document.createElement('textarea');
  //   contentInput.id = `chapter-${chapterCount}-content`;
  //   contentInput.placeholder = `Enter the content of chapter ${chapterCount}`;
  //   const template = document.getElementById('selectedStory');
  //   template.insertBefore(chapterInput, template.lastElementChild);
  //   template.insertBefore(contentInput, template.lastElementChild);
  // }
  
  // function getOnePagerTemplate() {
  //   let template = `
  //     <label for="project-title">Title:</label>
  //     <input type="text" id="project-title" placeholder="Enter the title of your project">
  
  //     <label for="logline">Logline:</label>
  //     <textarea id="logline" placeholder="Enter the logline for your project"></textarea>
  
  //     <label for="synopsis">Synopsis:</label>
  //     <textarea id="synopsis" placeholder="Enter the synopsis for your project"></textarea>
  
  //     <label for="tone">Tone:</label>
  //     <input type="text" id="tone" placeholder="Enter the tone of your project">
  
  //     <label for="themes">Themes:</label>
  //     <textarea id="themes" placeholder="Enter the themes of your project"></textarea>
  
  //     <label for="characters">Characters:</label>
  //     <textarea id="characters" placeholder="Enter the characters in your project"></textarea>
  
  //     <label for="setting">Setting:</label>
  //     <textarea id="setting" placeholder="Enter the setting for your project"></textarea>
  //   `;
  //   return template;
  // }
  
  // // Function to get the query letter template
  // function getQueryLetterTemplate() {
  //   let template = `
  //     <label for="agent-name">Agent Name:</label>
  //     <input type="text" id="agent-name" placeholder="Enter the name of the agent you are querying">
  
  //     <label for="agency-name">Agency Name:</label>
  //     <input type="text" id="agency-name" placeholder="Enter the name of the agency the agent represents">
  
  //     <label for="agent-address">Agent Address:</label>
  //     <input type="text" id="agent-address" placeholder="Enter the address of the agent">
  
  //     <label for="date">Date:</label>
  //     <input type="date" id="date" placeholder="Enter the date">
  
  //     <label for="project-title">Project Title:</label>
  //     <input type="text" id="project-title" placeholder="Enter the title of your project">
  
  //     <label for="logline">Logline:</label>
  //     <textarea id="logline" placeholder="Enter the logline for your project"></textarea>
  
  //     <label for="synopsis">Synopsis:</label>
  //     <textarea id="synopsis" placeholder="Enter the synopsis for your project"></textarea>
  
  //     <label for="bio">Bio:</label>
  //     <textarea id="bio" placeholder="Enter your bio"></textarea>
  //   `;
  //   return template;
  // }
  
  
  function getTemplate(storyType, screenplayFormat) {
    let template = '';
  
    switch (storyType) {
      case 'Character Development':
        template = `
          <label for="character-name">Character Name:</label>
          <input type="text" id="character-name" placeholder="Enter the character's name">
          
          <label for="occupation">Occupation:</label>
          <input type="text" id="occupation" placeholder="Enter the character's occupation">
          
          <label for="backstory">Backstory:</label>
          <textarea id="backstory" placeholder="Enter the character's backstory"></textarea>
        `;
        break;
  
      case 'Dialogue':
        template = `
          <label for="character">Character:</label>
          <input type="text" id="character" placeholder="Enter the character speaking">
          
          <label for="dialogue">Dialogue:</label>
          <textarea id="dialogue" placeholder="Enter the character's dialogue"></textarea>
          
          <button type="button" id="add-dialogue" onclick="addDialogue()">Add Dialogue</button>
        `;
        break;
  
      case 'Novel':
        template = `
          <label for="chapter-title">Chapter Title:</label>
          <input type="text" id="chapter-title" placeholder="Enter the chapter title">
          
          <label for="chapter-body">Chapter Body:</label>
          <textarea id="chapter-body" placeholder="Enter the chapter content"></textarea>
        `;
        break;
  
      case 'One-Pager':
        template = `
          <label for="logline">Logline:</label>
          <textarea id="logline" placeholder="Enter the logline"></textarea>
          
          <label for="synopsis">Synopsis:</label>
          <textarea id="synopsis" placeholder="Enter the synopsis"></textarea>
        `;
        break;
  
      case 'Query Letter':
        template = `
          <label for="recipient">Recipient:</label>
          <input type="text" id="recipient" placeholder="Enter the recipient's name">
          
          <label for="pitch">Pitch:</label>
          <textarea id="pitch" placeholder="Enter the pitch"></textarea>
        `;
        break;
  
      case 'Script Notes':
        template = `
          <textarea id="note" placeholder="Enter your note"></textarea>
          <button type="button" id="add-note" onclick="addNote()">Add Note</button>
          <div id="notes-container"></div>
        `;
        break;
  
      default:
        template = '';
    }
  
    // If screenplay format is selected, add it to the template
    if (screenplayFormat) {
      template += `<p>Screenplay Format: ${screenplayFormat}</p>`;
    }
  
    return template;
  }
  
  // Function to display the selected story template
  function selectStory() {
    // Get the user's selections
    const storyType = document.getElementById('storyType').value;
    const screenplayFormat = document.getElementById('screenplayFormat')?.value;
  
    // Check if a story type has been selected
    if (!storyType) {
      alert('Please select a story type');
      return;
    }
  
    // Generate the selected story template
    const selectedTemplate = getTemplate(storyType, screenplayFormat);
  
    // Display the selected story template on the page
    document.getElementById('selectedStory').innerHTML = selectedTemplate;
  }
  
  // Function to add dialogue to the page
  function addDialogue() {
    const character = document.getElementById('character').value;
    const dialogue = document.getElementById('dialogue').value;
  
    // Check if character and dialogue inputs are not empty
    if (!character || !dialogue) {
      alert('Please enter both character and dialogue');
      return;
    }
  
    // Create new input fields for character and dialogue
    const newCharacterInput = document.createElement('input');
    newCharacterInput.type = 'text';
    newCharacterInput.placeholder = 'Enter the character speaking';
  
    const newDialogueInput = document.createElement('textarea');
    newDialogueInput.placeholder = "Enter the character's dialogue";
  
    // Add the new input fields to the page
    document.getElementById('selectedStory').appendChild(newCharacterInput);
    document.getElementById('selectedStory').appendChild(newDialogueInput);}}
  