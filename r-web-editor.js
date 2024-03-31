class RWebEditor {
    constructor(baseElement) {
        console.log('생성자')
        console.log(baseElement)
        this.baseElement = baseElement
        this.init()
    }

    init() {
        const template = this.getTemplate()
        for(let ele of template) {
            this.baseElement.appendChild(ele)
        }
    }

    getTemplate() {
        const template = `<div>
            
        </div>`
        const parser = new DOMParser()
        const doc = parser.parseFromString(template, 'text/html')
        return [...doc.body.children];
    }

    
}

export { RWebEditor }