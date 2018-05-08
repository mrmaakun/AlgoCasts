// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    size(){
        var size = 0;
        var currentNode = this.head;
        while(currentNode){
            size++;
            currentNode = currentNode.next;
        }
        return size;
    }

    getFirst(){
        return this.head;
    }

    getLast(){

        var currentNode = this.head;

        if (!currentNode) {
            return currentNode
        }

        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;

    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        var secondNode = this.head.next;
        this.head = secondNode;
    }

    removeLast(){

        if (!this.head){
            return;
        }

        if (!this.head.next){
            this.head = null;
            return;
        }

        var previousNode = this.head;
        var currentNode = this.head.next;

        while(currentNode.next != null){
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
    }

    insertLast(data){

        if (!this.head){
            this.head = new Node(data);
            return;
        }
        this.getLast().next = new Node(data);
    }

    getAt(index){

        var currentNode = this.head;

        for(var i = 0; i < index; i++){
            if(!currentNode){
                return null;
            }
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    removeAt(index){

        if(!this.head){
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        var previousNode = this.head;
        var currentNode = this.head.next;

        if (!currentNode || !currentNode.next){
            return;
        }

        for (var i = 1; i < index; i++){

            if (!currentNode || !currentNode.next){
                return;
            }

            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    insertAt(data, index){

        if (index == 0){
            this.head = new Node(data, this.head);
            return;
        }

        var previousNode = this.head;
        var currentNode = this.head.next;

        if (!currentNode){
            previousNode.next = new Node(data);
            return;
        }
        

        for (var i = 1; i < index; i++){

            if (!currentNode){
                previousNode.next = new Node(data);
                return;
            }

            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = new Node(data, currentNode);

    }

    forEach(functionReference){

        var currentNode = this.head
        while(currentNode){
            functionReference(currentNode);
            currentNode = currentNode.next;
        }

    }
}



module.exports = { Node, LinkedList };