class MyHashTable {
    constructor(length) {
        this.data = new Array(length);
    }

    // hash function
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    // insert value - O(1)
    set(key, value) {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    // retrieve data - O(1) // O(n) if there is hash collision
    get(key) {
        const address = this._hash(key);
        if(this.data[address]){
            for (let i = 0; i < this.data[address].length; i++) {
                let currenctBucket = this.data[address][i];
                if (currenctBucket) {
                    if (currenctBucket[0] === key) {
                        return currenctBucket[1];
                    }
                }
            }
        }
        return undefined;
    }

    //delete data - O(1) - // O(n) if there is collison
    delete(key){
        const address = this._hash(key);
        if(this.data[address]){
            for (let i = 0; i < this.data[address].length; i++) {
                let currenctBucket = this.data[address][i];
                if (currenctBucket) {
                    if (currenctBucket[0] === key) {
                        this.data[address].splice(i,1);
                        return;
                    }
                }
            }
        }
        return undefined;
    }

    // get all keys - O(n)
    keys() {
        const keyArr = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keyArr.push(this.data[i][j][0]);
                }
            }
        }
        return keyArr;
    }
}

const hashTable = new MyHashTable(2);
hashTable.set("grapes", 1000);
hashTable.set('apples', 50);
hashTable.set('mangoes', 50);
console.log(hashTable.get('grapes'));
hashTable.delete('apples')
console.log(hashTable.keys());