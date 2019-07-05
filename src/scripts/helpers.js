export function mapClasses(className, itemName){
    let classes = className.split(" ")
    return itemName + classes.map(element => {
        if (element === className) {
            return null
        } else {
            return ` ${itemName}--${element}`
        }
    }).join("")
}
