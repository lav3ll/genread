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

  ## Table of Contents

  Installation | Key Features | Tests | Credits | License |Questions
  
  ## Installation
  
  ${installation}
  
  [Click here to see live copy of the site](https://${gitUsername}.github.io/${repoName})
  
  [Link to ${repoName}](https://github.com/${gitUsername}/${repoName})
  
  ## Usage
  
  ${
    imgPath
      ? `[Screenhot of the front page of ${repoName}](${imgPath})`
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
