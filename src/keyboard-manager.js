export class KeyboardManager {

    constructor() {
        document.addEventListener('keydown', (event) => this.keyDownHandler(event));
        document.addEventListener('keyup', (event) => this.keyUpHandler(event));
        this.keyDown = {};
    }

    keyDownHandler(event) {
        event.preventDefault()
        this.keyDown[event.code] = true;
    }

    keyUpHandler(event) {
        event.preventDefault()
        this.keyDown[event.code] = false;
    }

}
