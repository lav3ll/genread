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

  const badges = {
    mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "apache-2.0":
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "gpl-3.0":
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "bsd-2-clause":
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "mpl-2.0":
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "lgpl-3.0":
      "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    "agpl-3.0":
      "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    unlicense:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    wtfpl:
      "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
  };

  const licenseBadge = badges[license];

  return `# ${title}

  ${shortDescription}
  
  ## Description
  
  ${description}


  ${licenseBadge}


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
