import { ListNode } from './list-node.js';

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

export { arrayToList, listToArray };
