const glob = require("glob")
const fs = require("fs")

const options = {};

glob("**/components/*/**.scss",options,function(err,matches){

    if(err){
        return
    }

    let matchesFileText = "";
    const regExp = /.*?src\/components\/(\w*)\/\_(.*).scss/;

    matches.forEach(function(value,index){
        let match = value.match(regExp)
        let builtString = `@import "${match[1]}/${match[2]}";`

        // Add new line on all matches except the last one
        if(index != matches.length-1) {
            builtString+="\n"
        }

        matchesFileText += builtString
        console.log(builtString)

        // Writing the component text inside the target file
        if(index == (matches.length-1)){
            writeComponentFile(matchesFileText)
        }
        
    })
})

function writeComponentFile(file){
    fs.writeFile("src/components/components.scss", file, function(err){
        if(err){
            console.log(err)
        }
    })
}

