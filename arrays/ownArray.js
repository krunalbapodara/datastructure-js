class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    get(index) {
        return this.data[index];
    }

    push(element) {
        this.data[this.length] = element;
        this.length++;
        return this.length;
    }

    pop() {
        let element = this.data[this.length];
        delete this.data[this.length - 1];
        this.length--;
        return element;
    }

    insert(index, element) {
        let obj = { ...this.data };
        obj[index] = element;
        for (let i = index; i < this.length; i++) {
            obj[i + 1] = this.data[i];
        }
        this.data = obj;
        this.length++;
        return element;
    }

    delete(index) {
        let element = this.data[index];
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return element;
    }
}

const newArray = new MyArray();
newArray.push(1);
newArray.push(5);
newArray.push(2);
newArray.push(9);
newArray.push(7);

newArray.get(2);

newArray.insert(1,11);

newArray.pop();

newArray.delete(0);