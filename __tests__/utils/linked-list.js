import { ListNode } from '../../src/data-structures/linked-list/LinkedListNode.js';

const arrayToList = (array) => {
        return array.reduceRight((acc, cur) => new ListNode(cur, acc), null);
};

const listToArray = (list) => {
        const array = [];
        let node = list;

        while (node?.val !== null && typeof node?.val !== 'undefined') {
                array.push(node.val);
                node = node.next;
        }

        return array;
};

const createCycle = (list, pos) => {
        if (pos === -1) {
                return list;
        }

        let curr = list;
        let anchor = null;
        let p = 0;

        while (curr.next) {
                if (p === pos) {
                        anchor = curr;
                }

                curr = curr.next;
                p++;
        }

        curr.next = anchor;

        return list;
};

export { arrayToList, createCycle, listToArray };
