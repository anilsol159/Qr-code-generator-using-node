import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Hello Enter your Link or text here: ",
        name: "url"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.url;
    generateQr(url);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

function generateQr(url){
 
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    writeTextToFile(url);
}

function writeTextToFile(text){
    console.log(text);
    fs.writeFile("qrData.txt",text,(error)=>{
        if(error){
            throw error;
        }
        console.log("Successfully saved in file.")
    });
    
    
}