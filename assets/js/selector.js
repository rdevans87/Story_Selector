// Define variables for HTML elements
const screenplayFormatInput = document.getElementById('screenplayFormat');
const storyTypeInput = document.getElementById('storyType');
const screenplayFormatLabel = document.getElementById('screenplayFormatLabel');

// Hide screenplay format dropdown by default
screenplayFormatInput.style.display = 'none';
screenplayFormatLabel.style.display = 'none';
// Add event listener to story type dropdown
storyTypeInput.addEventListener('change', () => {
  // Show screenplay format dropdown if "Screenplay" is selected
  if (storyTypeInput.value === 'Screenplay') {
    screenplayFormatInput.style.display = 'block';
    screenplayFormatLabel.style.display = 'block';
  } else {
    screenplayFormatInput.style.display = 'none';
    screenplayFormatLabel.style.display = 'none';
  }
});


// Display the selected story template
function displayTemplate(template) {
  selectedStory.innerHTML = template;
}

// Handle the submit button click
function selectStory() {
  const title = document.getElementById('title').value;
  const storyGenre = document.getElementById('storyGenre').value;
  const storyType = document.getElementById('storyType').value;
  // Save the results to local storage
function saveResults() {
  const title = document.getElementById('title').value;
  const storyGenre = document.getElementById('storyGenre').value;
  const storyType = document.getElementById('storyType').value;
  const screenplayFormat = document.getElementById('screenplayFormat')?.value;

  // Get the selected story data
  const selectedStory = {
    title,
    storyGenre,
    storyType,
    screenplayFormat,
  };

  // Save the selected story to local storage
  localStorage.setItem('selectedStory', JSON.stringify(selectedStory));
  alert('Results saved successfully!');
}

// Download the results as a text file
function downloadResults() {
  const title = document.getElementById('title').value;
  const storyGenre = document.getElementById('storyGenre').value;
  const storyType = document.getElementById('storyType').value;
  const screenplayFormat = document.getElementById('screenplayFormat')?.value;

  // Generate the logline text
 

// Start over and clear the saved results from local storage
function startOver() {
  localStorage.removeItem('selectedStory');
  alert('Results cleared successfully!');
  window.location.reload();
}

// Display the saved results on page load
window.onload = function () {
  const savedStory = JSON.parse(localStorage.getItem('selectedStory'));

  if (savedStory) {
    document.getElementById('title').value = savedStory.title;
    document.getElementById('storyGenre').value = savedStory.storyGenre;
    document.getElementById('storyType').value = savedStory.storyType;
    document.getElementById('screenplayFormat').value = savedStory.screenplayFormat;
    selectStory();
  }
}

  
// Handle the submit button click
document.getElementById('submit').addEventListener('click', () => {
  // Get the user inputs
  title = titleInput.value;
  storyGenre = storyGenreInput.value;
  storyType = storyTypeInput.value;

  // Check if a title and story genre have been entered
  if (!title || !storyGenre) {
    alert('Please enter a title and story genre');
    return;
  }

  // Check if a story type has been selected
  if (!storyType) {
    alert('Please select a story type');
    return;
  }

  // Check if screenplay format is required and has been selected
  if (storyType === 'Screenplay' && !screenplayFormatInput.value) {
    alert('Please select a screenplay format');
    return;
  }

  // Generate the selected story text
  let selectedStoryText = `Title: ${title}\nStory Genre: ${storyGenre}\nStory Type: ${storyType}\n`;
  if (storyType === 'Screenplay') {
    screenplayFormat = screenplayFormatInput.value;
    selectedStoryText += `Screenplay Format: ${screenplayFormat}\n`;
  }

  selectedStoryText += storyTemplates[storyType];

  // Display the selected story template
  displayTemplate(selectedStoryText);
});

// Handle the save button click
document.getElementById('save').addEventListener('click', () => {
  // Get the current saved stories from local storage or create a new empty array
  let savedStories = JSON.parse(localStorage.getItem('stories')) || [];

  // Create a new saved story object and add it to the saved stories array
  let newSavedStory = {
    title,
    storyGenre,
    storyType,
    screenplayFormat,
    selectedStoryText: selectedStory.innerHTML
  };

  savedStories.push(newSavedStory);

  // Save the updated saved stories array to local storage
  localStorage.setItem('stories', JSON.stringify(savedStories));

  // Display a confirmation message
  alert('Story saved!');
});

// Handle the download button click
document.getElementById('download').addEventListener('click', () => {
  // Get the current saved stories from local storage or return an error message
  let savedStories = JSON.parse(localStorage.getItem('stories'));
  if (!savedStories) {
    alert('No saved stories found');
    return;
  }

  // Convert the saved stories to a formatted string
  let savedStoriesText = '';
  savedStories.forEach((story, index) => {
    savedStoriesText += `Story ${index + 1}\nTitle: ${story.title}\nStory Genre: ${story.storyGenre}\nStory Type: ${story.storyType}\n`;
    if (story.storyType === 'Screenplay') {
      savedStoriesText += `Screenplay Format: ${story.screenplayFormat}\n`;
    }
    savedStoriesText += `${story.selectedStoryText}\n\n`;
  });

  // Create a new Blob object with the saved stories text
  let blob = new Blob([savedStoriesText], {type: 'text/plain'});

  // Create a temporary URL for the blob object and create a link to download it
  let url = URL.createObjectURL(blob);
  let link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'saved-stories.txt');
  link.click();
});

// Handle the start over button click
document.getElementById('startOver').addEventListener('click', () => {
  // Clear the input fields and selected story
  titleInput.value = '';
  storyGenreInput.value = '';
  storyTypeInput.value = '';

})}

}
