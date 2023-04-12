// Function to select a story and display it on the page
// Add event listener to the form
document.getElementById('add-story-form').addEventListener('submit', (event) => {
  // Prevent the page from refreshing
  event.preventDefault();
  
  // Call the selectStory function to display the selected story on the page
  selectStory();
});


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
  // Display the saved story on the page
  document.getElementById('title-display').innerHTML = title;
  document.getElementById('storyGenre-display').innerHTML = storyGenre;
  document.getElementById('storyType-display').innerHTML = storyType;
  document.getElementById('screenplayFormat-display').innerHTML = screenplayFormat || '-';

// Check if saved data exists in localStorage
const savedStory = JSON.parse(localStorage.getItem('story'));

// If saved data exists, display it on the page
if (savedStory) {
  const savedResultsDiv = document.getElementById('savedResults');
  savedResultsDiv.innerHTML = `
    <h2>Saved Results</h2>
    <p><strong>Title:</strong> ${savedStory.title}</p>
    <p><strong>Story Genre:</strong> ${savedStory.storyGenre}</p>
    <p><strong>Story Type:</strong> ${savedStory.storyType}</p>
    <p><strong>Screenplay Format:</strong> ${savedStory.screenplayFormat}</p>
  `;
}




function downloadResults() {
  const story = JSON.parse(localStorage.getItem('story'));

  if (!story) {
    alert('No story saved to local storage');
    return;
  }

  const filename = `story-${Date.now()}.txt`;
  const file = new Blob([JSON.stringify(story)], {type: 'text/plain'});
  const a = document.createElement('a');
  const url = URL.createObjectURL(file);
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
}


// Function to start over and clear the form and selected story
function startOver() {
  document.getElementById('add-story-form').reset();
  document.getElementById('selectedStory').innerHTML = '';
  localStorage.removeItem('story');
  alert('Form and selected story cleared');
}