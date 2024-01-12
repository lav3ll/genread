// function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    license,
    contributing,
    tests,
    questions,
  } = data;
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
