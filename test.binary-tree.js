var expectedBt = {
    root: {
        data: 13,
        left: {
            data: 10,
            left: {
                data: 8,
                left: {
                    data: 6,
                    left: null,
                    right: {
                        data: 7,
                        left: null,
                        right: null
                    }
                },
                right: null
            },
            right: {
                data: 12,
                left: {
                    data: 11,
                    left: null,
                    right: null
                },
                right: null
            }
        },
        right: {
            data: 18,
            left: {
                data: 15,
                left: null,
                right: null
            },
            right: {
                data: 20,
                left: null,
                right: null
            }
        }
    }
};

var myExpectedTree = {
    root: {
        data: 13,
        left: {
            data: 10,
            left: {
                data: 8,
                left: {
                    data: 6,
                    left: {
                        data: 5,
                        left: {
                            data: 3,
                            left: null,
                            right: null
                        },
                        right: null
                    },
                    right: {
                        data: 7,
                        left: null,
                        right: null
                    }
                },
                right: {
                    data: 9,
                    left: null,
                    right: null
                }
            },
            right: {
                data: 12,
                left: {
                    data: 11,
                    right: null,
                    left: null
                },
                right: null
            }
        },
        right: {
            data: 18,
            left: {
                data: 15,
                left: {
                    data: 14,
                    left: null,
                    right: null
                },
                right: {
                    data: 16,
                    left: null,
                    right: {
                        data: 17,
                        left: null,
                        right: null
                    }
                }
            },
            right: {
                data: 20,
                left: {
                    data: 19,
                    left: null,
                    right: null
                },
                right: null
            }
        }
    }
};

describe('BinaryTree', () => {
    describe('#constructor', () => {
        it('assigns null to root', () => {
            var bt = new BinaryTree();
            expect(bt.root).to.equal(null);
            expect(bt.isEmpty()).to.equal(true);
        });
    });

    describe('#insert(data)', () => {
        var bt;

        beforeEach(() => {
            bt = new BinaryTree();

            bt.insert(13);
            bt.insert(10);
            bt.insert(8);
            bt.insert(18);
            bt.insert(12);
            bt.insert(null);
            bt.insert(11);
            bt.insert(15);
            bt.insert(6);
            bt.insert(undefined);
            bt.insert(20);
            bt.insert(16);
            bt.insert(7);
            bt.insert(13);
            bt.insert(10);
            bt.insert(8);
            bt.insert(9);
            bt.insert(5);
            bt.insert(7);
            bt.insert(3);
            bt.insert(6);
            bt.insert(15);
            bt.insert(16);
            bt.insert(17);
            bt.insert(19);
            bt.insert(18);
            bt.insert(20);
            bt.insert(14);

            var btCop = JSON.parse(JSON.stringify(myExpectedTree));
            var b = JSON.parse(JSON.stringify(bt));
            b.should.deep.equal(btCop);
        });

        it('creates new node with passed data and inserts it to correct place', () => {
            bt.root.data.should.equal(13);
            bt.root.left.data.should.equal(10);
            bt.root.right.data.should.equal(18);
            bt.root.left.left.data.should.equal(8);
            bt.root.left.right.data.should.equal(12);
            bt.root.right.left.data.should.equal(15);
            bt.root.right.right.data.should.equal(20);
            bt.root.left.left.left.data.should.equal(6);
            bt.root.left.left.left.right.data.should.equal(7);
            bt.root.left.right.left.data.should.equal(11);
            bt.root.left.left.left.left.data.should.equal(5);
            bt.root.left.left.left.left.left.data.should.equal(3);
            bt.root.right.left.right.right.data.should.equal(17);
        });

    });

    describe('#contains(data)', () => {
        var bt;

        beforeEach(() => {
            bt = new BinaryTree();

            bt.insert(13);
            bt.insert(10);
            bt.insert(8);
            bt.insert(18);
            bt.insert(12);
            bt.insert(null);
            bt.insert(11);
            bt.insert(15);
            bt.insert(6);
            bt.insert(undefined);
            bt.insert(20);
            bt.insert(16);
            bt.insert(7);
            bt.insert(13);
            bt.insert(10);
            bt.insert(8);
            bt.insert(9);
            bt.insert(5);
            bt.insert(7);
            bt.insert(3);
            bt.insert(6);
            bt.insert(15);
            bt.insert(16);
            bt.insert(17);
            bt.insert(19);
            bt.insert(18);
            bt.insert(20);
            bt.insert(14);
        });

        it('returns true if passed data found in binary tree, otherwise if not', () => {
            bt.contains(3).should.equal(true);
            bt.contains(9).should.equal(true);
            bt.contains(16).should.equal(true);
            bt.contains(-9).should.equal(false);

            bt.contains(18).should.equal(true);
            bt.contains(13).should.equal(true);
            bt.contains(7).should.equal(true);
            bt.contains(20).should.equal(true);
            bt.contains(0).should.equal(false);
            bt.contains(null).should.equal(false);
            bt.contains(undefined).should.equal(false);
        });
    });

    describe('#remove(data)', () => {
        var bt;
        var btCopy;

        beforeEach(() => {
            bt = new BinaryTree();

            bt.insert(13);
            bt.insert(10);
            bt.insert(8);
            bt.insert(18);
            bt.insert(12);
            bt.insert(null);
            bt.insert(11);
            bt.insert(15);
            bt.insert(6);
            bt.insert(undefined);
            bt.insert(20);
            bt.insert(16);
            bt.insert(7);
            bt.insert(9);
            bt.insert(5);
            bt.insert(7);
            bt.insert(3);
            bt.insert(15);
            bt.insert(16);
            bt.insert(17);
            bt.insert(19);
            bt.insert(18);
            bt.insert(20);
            bt.insert(14);

            btCopy = JSON.parse(JSON.stringify(myExpectedTree));
        });

        it('does nothing if passed data not found', () => {
            sinon.spy(bt, 'contains');

            bt.remove(-8);
            bt.should.deep.equal(btCopy);

            bt.remove(0);
            bt.should.deep.equal(btCopy);

            bt.remove(null);
            bt.should.deep.equal(btCopy);

            bt.remove(undefined);
            bt.should.deep.equal(btCopy);

        });

        it('removes node which contains passed data', () => {
            sinon.spy(bt, 'contains');


            //delete node without children
            bt.remove(17);
            btCopy.root.right.left.right.right = null;
            bt.should.deep.equal(btCopy);

            bt.remove(7);
            btCopy.root.left.left.left.right = null;
            bt.should.deep.equal(btCopy);

            bt.remove(14);
            btCopy.root.right.left.left = null;
            bt.should.deep.equal(btCopy);

            //delete node with one child
            bt.remove(20);
            bt.root.right.right.data.should.equal(19);
            btCopy.root.right.right = btCopy.root.right.right.left;
            btCopy.root.right.right.left = null;
            bt.should.deep.equal(btCopy);

            bt.remove(12);
            bt.root.left.right.data.should.equal(11);
            btCopy.root.left.right = btCopy.root.left.right.left;
            btCopy.root.left.right.left = null;
            bt.should.deep.equal(btCopy);

            bt.remove(15);
            bt.root.right.left.data.should.equal(16);
            btCopy.root.right.left = btCopy.root.right.left.right;
            bt.should.deep.equal(btCopy);

            //delete node with 2 children
            bt.remove(8);
            bt.root.left.left.data.should.equal(9);
            btCopy.root.left.left.right.left = btCopy.root.left.left.left;
            btCopy.root.left.left = btCopy.root.left.left.right;
            bt.should.deep.equal(btCopy);

            /////////////////
            bt.remove(18);
            btCopy.root.right.right.left = btCopy.root.right.left;
            btCopy.root.right = btCopy.root.right.right;
            bt.should.deep.equal(btCopy);


            //delete root node
            bt.remove(13);
            btCopy.root.right.left.left = btCopy.root.left;
            btCopy.root.right.left.right = btCopy.root.right;
            btCopy.root = btCopy.root.right.left;
            btCopy.root.right.left = null;
            bt.should.deep.equal(btCopy);
        });
    });

    describe('#size()', () => {
        it('returns number of elements in tree', () => {
            var bt = new BinaryTree();

            bt.size().should.equal(0);

            bt.insert(13);
            bt.insert(10);
            bt.insert(8);
            bt.insert(18);
            bt.insert(12);
            bt.insert(null);
            bt.insert(11);
            bt.insert(15);
            bt.insert(6);
            bt.insert(undefined);
            bt.insert(20);
            bt.insert(16);
            bt.insert(7);
            bt.insert(9);
            bt.insert(5);
            bt.insert(7);
            bt.insert(3);
            bt.insert(15);
            bt.insert(16);
            bt.insert(17);
            bt.insert(19);
            bt.insert(18);
            bt.insert(20);
            bt.insert(14);
            bt.insert(0);
            bt.size().should.equal(18);

            bt.remove(8);
            bt.remove(18);
            bt.remove(20);
            bt.remove(0);
            bt.remove(null);

            bt.size().should.equal(14);
        });
    });

    describe('#isEmpty()', () => {
        it('returns true if tree is empty, false if not', () => {
            var bt = new BinaryTree();

            bt.isEmpty().should.equal(true);

            bt.insert(5);
            bt.isEmpty().should.equal(false);

            bt.remove(5);
            bt.isEmpty().should.equal(true);

            bt.insert(0);
            bt.isEmpty().should.equal(false);

            bt.remove(0);
            bt.isEmpty().should.equal(false);

        });
    });

});
