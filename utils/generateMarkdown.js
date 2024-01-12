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
    email,
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
  
  ## Contributing
  
  ${contributing}
  
  ## License
  
  ${license}

  ##Questions

  [Link to ${repoName}](https://github.com/${gitUsername})

  Pleae email ${email} for any questions about ${title}.

`;
}

module.exports = generateMarkdown;
