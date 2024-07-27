const path = require('path');



const normalizePath = path.normalize("C:/Users/dhols/Desktop/WT lab/Lab 17.txt");
console.log ("normalizePath ::",normalizePath);


const joinPath =path.join("C:/Users/dhols/Desktop/WT lab/Lab 17","abc.txt");
console.log ("joinPath ::",joinPath);



const extName =path.extname("C:/Users/dhols/Desktop/WT lab/Lab___17.txt");
console.log ("extention name ::",extName);

const baseName =path.basename("C:/Users/dhols/Desktop/WT lab/Lab 17");
console.log ("base name ::",baseName);


const directoryPath =path.dirname("C:/Users/dhols/Desktop/WT lab/Lab 17");
console.log ("directory name::",directoryPath);
