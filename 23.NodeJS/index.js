/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "node:fs"

// Step 1
const questions = [

    {
      type: 'input',
      name: 'url',
      message: "",
    },

    ]

inquirer
  .prompt(questions)
  .then((answers) => {
    const url = answers.url
    console.log(url);

    // Step 2 - Create a QR
    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('url.png'));

    // Step 3 -Save at txt file
    fs.writeFile("url.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



