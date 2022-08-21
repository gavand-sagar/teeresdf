class Stack {

    #collection = []

    push(item) {
        this.#collection.push(item)
    }

    pop() {
        if (this.#collection.length == 0) {
            throw 'Stack underflow'
        }
        this.#collection.pop()
    }

    top() {
        let lastIndex = this.#collection.length - 1;
        return this.#collection[lastIndex]
    }

    length() {
        return this.#collection.length
    }

}

module.exports = {
    Stack
}
