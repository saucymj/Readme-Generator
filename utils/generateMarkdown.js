// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return ` ![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return ' ';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return ` [${license}](https://choosealicense.com/licenses/${license}) `;
  } else {
    return ' ';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return ` ## [License](#table-of-contents)
  The application is covered under the following license:
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description

  ${data.motivation}

  ${data.problemSolve}

  ${data.learning}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributersRules}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any additional questions, feel free to reach me at:

  GitHub: https://github.com/${data.github}

 Email: ${data.email}




`;
}

module.exports = generateMarkdown;
