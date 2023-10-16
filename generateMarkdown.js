const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  const licenseBadges = {
    GPL: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    Apache: '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    Mozilla: '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)',
    MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  for (const licensebadgeKey in licenseBadges) {
    if (licensebadgeKey.toLowerCase() === license.toLowerCase()) {
      return licenseBadges[licensebadgeKey]
    };
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    GPL: 'https://www.gnu.org/licenses/gpl.html',
    Apach: 'http://www.apache.org/licenses/LICENSE-2.0',
    Mozilla: 'https://mozilla.org/MPL/2.0/',
    MIT: 'https://www.mit.edu/~amini/LICENSE.md'
  }
  for (const licenseLinkKey in licenseLink) {
    if (licenseLinkKey.toLowerCase() === license.toLowerCase()) {
      return licenseLink[licenseLinkKey]
    };
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `This project is licensed under ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Badge](#badge)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  <a id="installation"></a>
  ${data.installation}

  ## Usage
  <a id="usage"></a>
  ${data.usage}

  ## Contributing
  <a id="contributing"></a>
  ${data.contributing}

  ## License
  <a id="license"></a>
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Badge
  <a id="badge"></a>
  ${renderLicenseBadge(data.license)}

  ## Tests
  <a id="tests"></a>
  ${data.tests}

  ## Questions
  <a id="questions"></a>
  ${data.github}
  ${data.email}
`;
};

module.exports = generateMarkdown;
