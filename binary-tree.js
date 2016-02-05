'use strict';

/**
 * binary tree class
 * implements function of binary tree(tree will be like Set)
 * version 1.0
 */
class BinaryTree {

    /**
     * init binary tree
     */
    constructor() {
        this.root = null;
    }

    /**
     * add new value to binary tree
     * @param data - adding value
     */
    insert(data) {
        if (data && !this.contains(data)) {
            if (this.root == null) {
                this.root = new Node(data, null, null);
            }
            else {
                this._insertValue(this.root, data);
            }
        }
    }

    /**
     * additional function for adding value(based on recursion)
     * @param node - node for inserting value
     * @param data - adding value
     * @private
     */
    _insertValue(node, data) {
        if (node.data > data) {
            if (node.left != null) {
                this._insertValue(node.left, data);
            }
            else {
                node.left = new Node(data, null, null);
            }
        }
        else {
            if (node.right != null) {
                this._insertValue(node.right, data);
            } else {
                node.right = new Node(data, null, null);
            }
        }
    }

    /**
     * check existing node value in the binary tree
     * @param data - checking value
     * @returns {boolean} return true - if value is exist in the tree and return false - if no exist value in the tree
     */
    contains(data) {
        if (!data) {
            return false;
        }
        var found = false, current = this.root;
        while (!found && current) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found;
    }

    /**
     * remove data from tree
     * @param data -  deleting value
     */
    remove(data) {
        var deletingNode = this.findNode(data);
        var parent = this.findNodeParent(data);

        if (deletingNode != null) {
            if (data == this.root.data) {
                if (this.root.left != null && this.root.right == null) {
                    var t = this.root.left;
                    while (t.right != null) {
                        t = t.right;
                    }
                    var b = this.findNode(t.data);
                    var e = this.findNodeParent(t.data)
                    if (b.left != null) {
                        e.right = b.left;
                    }
                    b.left = this.root.left;
                    b.right = null;
                    this.root = b;
                    return;
                } else if (this.root.right != null && this.root.left == null) {
                    var t = this.root.right;
                    while (t.left != null) {
                        t = t.left;
                    }
                    var b = this.findNode(t.data);
                    var e = this.findNodeParent(t.data);
                    if (b.right != null) {
                        e.left = b.right;
                    }
                    e.left = null;
                    b.right = this.root.right;
                    b.left = null;
                    this.root = b;
                    return;
                } else if (this.root.left == null && this.root.right == null) {
                    this.root = null;
                    return;
                }

            }
            var childCount = (deletingNode.left !== null ? 1 : 0) + (deletingNode.right !== null ? 1 : 0);
            switch (childCount) {
                case 0:
                {
                    if (parent.data < data) {
                        parent.right = null;
                    } else if (parent.data > data) {
                        parent.left = null;
                    } else if (parent.data = this.root.data) {
                        this.root = null;
                    }
                    break;
                }
                case 1:
                {
                    if (parent.data < data) {
                        parent.right = deletingNode.left || deletingNode.right;
                    } else if (parent.data > data) {
                        parent.left = deletingNode.left || deletingNode.right;
                    }
                    break;
                }
                case 2:
                {
                    var g = deletingNode.right;
                    var par = deletingNode.right;
                    while (g.left != null) {
                        par = g;
                        g = g.left;
                    }
                    var co = (g.left !== null ? 1 : 0) + (g.right !== null ? 1 : 0);
                    g.left = deletingNode.left;
                    if (co == 0) {
                        if (par.data != g.data) {
                            par.left = null;
                            g.right = par;
                        }
                    } else if (co == 1) {
                        if (par.data != g.data) {
                            par.left = g.right;
                            g.right = par;
                        }
                    }
                    if (this.root.data == parent.data && this.root.data == data) {
                        g.left = this.root.left;
                        g.right = this.root.right;
                        this.root = g;
                    } else {
                        if (parent.data > data) {
                            parent.left = g;
                        } else {
                            parent.right = g;
                        }
                    }
                    break;
                }
            }

        }
    }

    /**
     * search node in the tree
     * @param data - value node  for searching
     * @returns {*} - node or null
     */
    findNode(data) {
        if (!data) {
            return null;
        }
        var current = this.root;
        while (current != null) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            } else {
                return current;
            }
        }
    }

    /**
     * search parent for define node
     * @param data - value node for which search parent
     * @returns {null|Node|*}
     */
    findNodeParent(data) {
        var current = this.root, parent = this.root;
        while (current != null) {
            if (data < current.data) {
                parent = current;
                current = current.left;
            } else if (data > current.data) {
                parent = current;
                current = current.right;
            } else {
                return parent;
            }
        }
    }

    /**
     * return count node of tree
     * @returns {number} - count nodes
     */
    size() {
        var s = function (node) {
            if (node == null) {
                return 0;
            }
            return 1 + s(node.left) + s(node.right);
        };
        return s(this.root);
    }

    /**
     * check empty tree
     * @returns {boolean}
     */
    isEmpty() {
        if (this.size() == 0) {
            return true;
        }
        return false;
    }

    /**
     * Go through all tree
     *
     */
    traverse() {
        var current, pre;
        if (this.root == null) {
            return;
        }
        current = this.root;
        while (current != null) {
            if (current.left == null) {
                console.log(current.data);
                current = current.right;
            } else {
                pre = current.left;
                while (pre.right != null && pre.right != current) {
                    pre = pre.right;
                }
                if (pre.right == null) {
                    pre.right = current;
                    current = current.left;
                }
                else {
                    pre.right = null;
                    console.log(current.data);
                    current = current.right;
                }

            }

        }
    }
}
