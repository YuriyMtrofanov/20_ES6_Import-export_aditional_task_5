export function createHTMLElement(tag, className, text){
    const newElement = document.createElement(tag)
    donateItem.className = className
    donateItem.textContent = text
    return newElement
}