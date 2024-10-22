async function getWordInfo(word) {
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Check if the word was found and data is valid
    if (!data || data.title === "No Definitions Found") {
      return { error: "Word not found" };
    }

    const wordData = data[0]; // Take the first result
    const meanings = wordData.meanings;

    const meaningInfo = meanings.map(meaning => ({
      partOfSpeech: meaning.partOfSpeech,
      definition: meaning.definitions[0].definition,
      example: meaning.definitions[0].example || 'No example available.',
      synonyms: meaning.definitions[0].synonyms || ['No synonyms available']
    }));

    const phonetics = wordData.phonetics.map(phonetic => phonetic.text || phonetic.audio || 'No phonetic info available');

    const result = {
      word: wordData.word,
      meanings: meaningInfo,
      phonetics: phonetics.length ? phonetics : ['No phonetic sounds available']
    };

    return result;

  } catch (error) {
    console.error("Error fetching word data:", error);
    return { error: "An error occurred while fetching the word information." };
  }
}

// Function to display the fetched data in HTML
function displayWordInfo(wordInfo) {
  const vocabContainer = document.getElementById('vocab-container');

  vocabContainer.innerHTML = '';

  if (wordInfo.error) {
    const errorCard = document.createElement('div');
    errorCard.className = 'vocab-card';
    errorCard.textContent = wordInfo.error;
    vocabContainer.appendChild(errorCard);
    return;
  }

  const vocabCard = document.createElement('div');
  vocabCard.className = 'vocab-card';

  // Close button
  const closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', () => {
    vocabContainer.innerHTML = '';
  });
  vocabCard.appendChild(closeButton);

  const header = document.createElement('div');
  header.className = 'vocab-header';
  header.innerHTML = `
        <p class="vocab-word">${wordInfo.word}</p>
        <p class="vocab-translation">[${wordInfo.phonetics.join(', ')}]</p>
    `;
  vocabCard.appendChild(header);

  wordInfo.meanings.forEach(meaning => {
    const meaningDiv = document.createElement('p');
    meaningDiv.className = 'vocab-meaning';
    meaningDiv.innerHTML = `${meaning.definition}`;
    vocabCard.appendChild(meaningDiv);

    const partOfSpeech = document.createElement('div');
    partOfSpeech.className = 'part-of-speech';
    partOfSpeech.innerHTML = `<span class="tag">${meaning.partOfSpeech}</span>`;
    vocabCard.appendChild(partOfSpeech);

    const synonymsDiv = document.createElement('div');
    synonymsDiv.className = 'synonyms';
    
    meaning.synonyms.forEach(syn => {
      const synSpan = document.createElement('span');
      synSpan.className = 'syn';
      synSpan.textContent = syn;
      synonymsDiv.appendChild(synSpan);
    });
    vocabCard.appendChild(synonymsDiv);

    const examplesDiv = document.createElement('div');
    examplesDiv.className = 'examples';
    examplesDiv.innerHTML = `<strong>Example:</strong>`;
    const exampleParagraph = document.createElement('p');
    exampleParagraph.className = 'example';
    exampleParagraph.textContent = meaning.example;
    examplesDiv.appendChild(exampleParagraph);
    vocabCard.appendChild(examplesDiv);
  });

  const phoneticsDiv = document.createElement('div');
  phoneticsDiv.className = 'phonetics';
  phoneticsDiv.innerHTML = `<strong>Pronunciation:</strong> ${wordInfo.phonetics.join(', ')}`;
  vocabCard.appendChild(phoneticsDiv);

  vocabContainer.appendChild(vocabCard);
}



document.addEventListener('selectionchange', function() {
  if (window.getSelection().toString() !== '') {
    // User has selected some text
    const selectedText = window.getSelection().toString();
    triggerFunction(selectedText);
  }
});

function triggerFunction(selectedText) {
  // Your desired function to be executed
  console.log("Selected text:", selectedText);
  
  //Fetch word info on button click
  
    if (selectedText) {
      getWordInfo(selectedText).then(wordInfo => displayWordInfo(wordInfo));
    }
  
}

  