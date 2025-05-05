
export class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.capacity = initialCapacity;
        this.loadFactor = loadFactor;
        this.size = 0;
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode =
                (hashCode * primeNumber + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let pair of bucket) {
            if (pair.key === key) {
                pair.value = value;
                return;
            }
        }

        bucket.push({ key, value });
        this.size++;

        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }
    }

    resize() {
        console.log('Resizing triggered!');
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let pair of bucket) {
            if (pair.key === key) {
                return pair.value;
            }
        }

        return null;
    }

    has(key) {
        return this.get(key) !== null;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                this.size--;
                return true;
            }
        }

        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
        this.size = 0;
    }

    keys() {
        const keysArray = [];
        for (let bucket of this.buckets) {
            for (let pair of bucket) {
                keysArray.push(pair.key);
            }
        }

        return keysArray;
    }

    values() {
        const valuesArray = [];

        for (let bucket of this.buckets) {
            for (let pair of bucket) {
                valuesArray.push(pair.value);
            }
        }

        return valuesArray;
    }

    entries() {
        const entriesArray = [];
        for (let bucket of this.buckets) {
            for (let pair of bucket) {
                entriesArray.push([pair.key, pair.value]);
            }
        }

        return entriesArray;
    }
}
