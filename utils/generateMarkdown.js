// Variables for each confirm prompt and the licenses section of the README 
let contents;
let contributing;
let licensesSection;
let imagesSection;
// Licenses with corresponding license badge links, ideal for Markdown
const licenses = [
  { 
    name: "N/A (none)",
    link: "This project has no licensing requirements."
  },
  { 
    name: "Apache 2.0 License",
    link: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  },
  { 
    name: "Boost Software License 1.0",
    link: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  },
  { 
    name: "IBM Public License Version 1.0",
    link: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  },
  { 
    name: "Creative Commons (CC0)",
    link: "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
  },
  { 
    name: "GNU GPL v3",
    link: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  },
  { 
    name: "IBM Public License Version 1.0",
    link: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  },
  { 
    name: "ISC License (ISC)",
    link: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  },
  { 
    name: "The MIT License",
    link: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  },
  { 
    name: "Mozilla Public License 2.0",
    link: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  },
  { 
    name: "Perl (The Artistic License 2.0)",
    link: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
  },
  { 
    name: "Unlicense",
    link: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  },
  { 
    name: "Zlib",
    link: "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
  },
];
// Exporting a licenses array to index.js to avoid repeating license names
function getLicenseNames(license) {
  return license.name
};
const licenseNames = licenses.map(getLicenseNames);
// Function to get the license link for the user's response to the license prompt
function getLicenseLink(res) {
  for (i = 0; i < licenses.length; i++) {
    if (res.license === licenses[i].name) {
      licensesSection = `${licenses[i].name}: ${licenses[i].link}`
    }
  }
  return licensesSection;
};

// Function that generates README based on user input
function generateMarkdown(data) {
  // First, get all licenses and corresponding badges required by the user
  getLicenseLink(data);

  // Conditionals for each confirm prompt (table of contents, contributing, and images)
  if (data.tableContents === true) {
    contents = `
## Table of Contents
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Licenses](#Licenses)
  -[Contributors](#Contributors)
  -[Testing](#Testing)
  -[Questions](#Questions)
  `
  };
  if (data.contributing === true) {
    contributing = `${data.howToContribute}`
  };
  if (data.images === true) {
    for (var i=0 ; i < data.imagesNumber ; i++) {
      imagesSection += `<img src = "./example${i}" width=100% >\n` 
    }
  }
  // Then, return the README content
  return `
# ${data.title}

${contents}

## Description
${data.description}
    
## Installation
${data.installation}
    
## Usage
${data.usage}
    
## Licenses
${licensesSection}
    
## Contributing
${contributing}

## Testing
${data.testing}

## Images
${imagesSection}
IMPORTANT: You'll need to add relative paths to these images' src attributes!

## Questions
To submit questions about this project, please visit my GitHub profile here: https://github.com/${data.username}
`;
}

module.exports = {
  generateMarkdown,
  licenseNames
}

