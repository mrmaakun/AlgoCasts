// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2




const Stack = require('./stack');

/*

class Queue {
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
        this.stackOneActive = true;
    }

    add(element){

       if (this.stackOneActive) {
           if (!this.stack1.peek()) {
               this.stack1.push(element)
           } else {
               this.stack2.push(element)
           }
       } else {
            if (!this.stack2.peek()) {
                this.stack2.push(element)
            } else {
                this.stack1.push(element)
            }
       }

    }

    remove(){

        var frontOfQueue;
        if (this.stackOneActive){
            frontOfQueue = this.stack1.pop();
            while (this.stack2.peek()) {
                this.stack1.push(this.stack2.pop())
            }
            this.stack2.push(this.stack1.pop());
        } else {
            frontOfQueue = this.stack2.pop();
            while (this.stack1.peek()) {
                this.stack2.push(this.stack1.pop())
            }
            this.stack1.push(this.stack2.pop());
        }

        this.stackOneActive = !this.stackOneActive;
        return frontOfQueue;

    }

    peek(){
        if (this.stackOneActive) {
            return this.stack1.peek();
        } else {
            return this.stack2.peek();
        }
    }
}
*/

class Queue{
    constructor(){
        this.first = new Stack();
        this.second = new Stack();
    }

    add(element){
        this.first.push(element);
    }

    remove(){
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        var record = this.second.pop();

        while (this.second.peek()){
            this.first.push(this.second.pop());
        }

        return record;
        
    }

    peek(){
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        var record = this.second.peek();

        while (this.second.peek()){
            this.first.push(this.second.pop());
        }

        return record;

    }
}

module.exports = Queue;
