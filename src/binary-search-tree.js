const { Node } = require('../extensions/list-tree.js');


// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/



module.exports = class BinarySearchTree {
    Root = null;
    
    root() {
        return this.Root;
    } 

    add(data) {
        let node = new Node(data);        
        if (!this.Root) {
            this.Root = node;            
            return;
        }

        let current = this.Root;
        while (current.left || current.right) {
            if (current.data < data && current.right) {
                current = current.right;
            } else
            if (current.data > data && current.left) {
                current = current.left;
            } else {
                break;
            }
        }     

        if (data > current.data) {
            current.right = node;
        } else {
            current.left = node;        
        }
    }

    has(data) {
        return this.find(data) ? true : false;
    }

    find(data) {
        let current = this.Root;
    
        if (!current) {
            return null;
        }

        while (current.left || current.right) {
            if (current.data < data && current.right) {
                current = current.right;
            } else
            if (current.data > data && current.left) {
                current = current.left;
            } else {
                if (current.data != data) {
                    return null;
                } else {
                    return current;
                }
            }
        }

        if (current.data != data) {
            return null;
        } else {
            return current;
        }
    }

    remove(data, node, previouss) {
        let current = this.Root;
        let previous = current; 

        if (!node) {                
            if (!current) {
                return;
            }

            while (current.left || current.right) {
                if (current.data < data && current.right) {
                    previous = current;
                    current = current.right;
                } else
                if (current.data > data && current.left) {
                    previous = current;
                    current = current.left;
                } else {
                    if (current.data != data) {
                        return;
                    } else {
                        break;
                    }
                }
            }

            if (current.data != data) {
                return;
            } 
        }

        if (node) {
            current = node;
            previous = previouss;            
        }

        

        if (!current.left && !current.right) {
            if (current.data < previous.data) {
                previous.left = null;
            } else {
                previous.right = null;
            }
        } else
        if (!current.left || !current.right) {            
            if (current.left) {
                if (current.data < previous.data) {
                    previous.left = current.left;                    
                } else {
                    previous.right = current.left;
                } 
                current.left = null;
            } else
            if (current.right) {
                console.log(current);
                if (current.data < previous.data) {
                    previous.left = current.right;                    
                } else {
                    previous.right = current.right;
                } 
                current.right = null;
            } 
        } else
        if (current.left && current.right) {
            let previous = current;
            let minRightNode = current.right;                        
            while (minRightNode.left) {       
                previous = minRightNode;         
                minRightNode = minRightNode.left;                
            }            

            current.data = minRightNode.data;
            this.remove(minRightNode.data, minRightNode, previous);
        }

    }

    min() {
        let current = this.Root;
        if(!current) {
            return null;
        }

        while (current.left) {
            current = current.left;
        }
        
        return current.data;
    }

    max() {
        let current = this.Root;
        if(!current) {
            return null;
        }

        while (current.right) {
            current = current.right;
        }
        
        return current.data;
    }

}