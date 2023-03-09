function extractFile(path) {
    let pathEl = path.split('\\');
    let fileEl = pathEl.pop().split('.');
    let extension = fileEl.pop();
    let fileName = fileEl.join('.'); 
  
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
  }
  
  extractFile('C:\\Internal\\training-internal\\Template.pptx');