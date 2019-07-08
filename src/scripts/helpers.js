export function mapClasses(className, baseClass) {

    let classes = className.split(" ")

    if (containsNoClass()){
        return baseClass
    }

    else if(containsOneClass()){
        return `${baseClass} ${baseClass}--${className}`
    }
  
    else return buildClassesString()
  
  // Check Functions
  
  function containsNoClass(){
    return (className === baseClass)
  }
  
  function containsOneClass(){
   return (classes.length === 1)
  }
  
  function buildClassesString(){
    return baseClass + classes.map(element => {
            return ` ${baseClass}--${element}`
    }).join("")
  }
}
