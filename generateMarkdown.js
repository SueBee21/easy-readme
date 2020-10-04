// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  
${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
${data.installation}
  
  
  ## Usage 
  
 ${data.usage}
  
  
  ## Credits
  
${data.credits}
  
  
  ## License
  
 ${data.license ==="MIT"?"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)":data.license==="IBM"?"[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)":"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"}

  
  ## Badges
  
  ${data.badge==="Last Commit"?"[![GitHub last comm(https://img.shields.io/github/last-commit/google/skia.svg?style=flat)]()":date.badge==="Pull Request"?"[![GitHub pull requests](https://img.shields.io/github/issues-pr/cdnjs/cdnjs.svg?style=flat)]()":"[![Issues](https://img.shields.io/github/issues-raw/tterb/PlayMusic.svg?maxAge=25000)](https://github.com/tterb/Hyde/issues)"}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
${data.testing}
  
## Questions
${data.githubProfile}
${data.email}
`;
}

module.exports = generateMarkdown;
