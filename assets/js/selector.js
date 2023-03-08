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
    if (event.target.value === 'Screenplay')


    {let savedStory = JSON.parse(localStorage.getItem('story')) || {};}
    

  })
