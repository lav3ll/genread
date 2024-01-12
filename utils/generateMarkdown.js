// function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    shortDescription,
    installation,
    repoName,
    gitUsername,
    usage,
    license,
    contributing,
    tests,
    questions,
    imgPath,
  } = data;
  return `# ${title}

  ${shortDescription}
  
  ## Description
  
  ${description}
  
  ## Installation
  
  ${installation}
  
  [Click here to see live copy of the site](https://${gitUsername}.github.io/${repoName})
  
  [Link to planisphere](https://github.com/${gitUsername}/${repoName})
  
  ## Usage
  
  ${
    imgPath
      ? `[Screenhot of the front page of planisphere](${imgPath})`
      : `No image provided`
  }
  
  **Key Features:**
  
  ${usage}
  
  **Tests:**
  
  ${tests}
  
  ## Credits
  
  ${contributing}
  
  ## License
  
  ${license}

  contact ${questions} for any questions about ${title}.

`;
}

module.exports = generateMarkdown;
