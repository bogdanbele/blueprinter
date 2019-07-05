export function mapClasses(className, itemName) {

    let classes = className.split(" ")

    if (itemName === className) {
        return `${itemName}`
    }

    else if (classes.length === 1) {
        return `${itemName} ${itemName}--${className}`
    }
    else return itemName + classes.map(element => {
            return ` ${itemName}--${element}`
    }).join("")
}