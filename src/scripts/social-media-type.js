function getSocialMediaType(string ){
    
    const regExp = /.*\.?(twitter\.com)\/([A-z0-9_]+\/?)/gm
    
    let m;

    while ((m = regExp.exec(string)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regExp.lastIndex) {
            regExp.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
        });
    }

}

export default getSocialMediaType
