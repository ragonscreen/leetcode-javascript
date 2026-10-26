import { describe, expect, test } from 'bun:test';

import { MyLinkedList, MyLinkedList1 } from './0707_design-linked-list.js';

describe('MyLinkedList', () => {
        test('default test 1', () => {
                const myLinkedList = new MyLinkedList();

                expect(myLinkedList.addAtHead(1)).toBeNil();
                expect(myLinkedList.deleteAtIndex(0)).toBeNil();
                expect(myLinkedList.addAtTail(2)).toBeNil();
                expect(myLinkedList.get(0)).toStrictEqual(2);
        });

        test('default test 2', () => {
                const myLinkedList = new MyLinkedList();

                expect(myLinkedList.addAtHead(0)).toBeNil();
                expect(myLinkedList.addAtHead(3)).toBeNil();
                expect(myLinkedList.addAtTail(5)).toBeNil();
                expect(myLinkedList.addAtIndex(2, 3)).toBeNil();
                expect(myLinkedList.get(1)).toStrictEqual(0);
                expect(myLinkedList.get(1)).toStrictEqual(0);
                expect(myLinkedList.addAtTail(2)).toBeNil();
                expect(myLinkedList.addAtIndex(2, 3)).toBeNil();
                expect(myLinkedList.addAtTail(5)).toBeNil();
                expect(myLinkedList.addAtHead(6)).toBeNil();
                expect(myLinkedList.addAtTail(3)).toBeNil();
        });

        test('default test 3', () => {
                const myLinkedList = new MyLinkedList();

                expect(myLinkedList.addAtHead(9)).toBeNil();
                expect(myLinkedList.addAtTail(2)).toBeNil();
                expect(myLinkedList.addAtTail(3)).toBeNil();
                expect(myLinkedList.addAtHead(2)).toBeNil();
                expect(myLinkedList.addAtIndex(1, 0)).toBeNil();
                expect(myLinkedList.addAtTail(7)).toBeNil();
                expect(myLinkedList.addAtIndex(1, 6)).toBeNil();
                expect(myLinkedList.get(0)).toStrictEqual(2);
                expect(myLinkedList.addAtHead(9)).toBeNil();
                expect(myLinkedList.get(3)).toStrictEqual(0);
                expect(myLinkedList.addAtHead(9)).toBeNil();
        });
});

describe('MyLinkedList1', () => {
        test('default test 1', () => {
                const myLinkedList = new MyLinkedList1();

                expect(myLinkedList.addAtHead(1)).toBeNil();
                expect(myLinkedList.deleteAtIndex(0)).toBeNil();
                expect(myLinkedList.addAtTail(2)).toBeNil();
                expect(myLinkedList.get(0)).toStrictEqual(2);
        });

        test('default test 2', () => {
                const myLinkedList = new MyLinkedList1();

                expect(myLinkedList.addAtHead(0)).toBeNil();
                expect(myLinkedList.addAtHead(3)).toBeNil();
                expect(myLinkedList.addAtTail(5)).toBeNil();
                expect(myLinkedList.addAtIndex(2, 3)).toBeNil();
                expect(myLinkedList.get(1)).toStrictEqual(0);
                expect(myLinkedList.get(1)).toStrictEqual(0);
                expect(myLinkedList.addAtTail(2)).toBeNil();
                expect(myLinkedList.addAtIndex(2, 3)).toBeNil();
                expect(myLinkedList.addAtTail(5)).toBeNil();
                expect(myLinkedList.addAtHead(6)).toBeNil();
                expect(myLinkedList.addAtTail(3)).toBeNil();
        });

        test('default test 3', () => {
                const myLinkedList = new MyLinkedList1();

                expect(myLinkedList.addAtHead(9)).toBeNil();
                expect(myLinkedList.addAtTail(2)).toBeNil();
                expect(myLinkedList.addAtTail(3)).toBeNil();
                expect(myLinkedList.addAtHead(2)).toBeNil();
                expect(myLinkedList.addAtIndex(1, 0)).toBeNil();
                expect(myLinkedList.addAtTail(7)).toBeNil();
                expect(myLinkedList.addAtIndex(1, 6)).toBeNil();
                expect(myLinkedList.get(0)).toStrictEqual(2);
                expect(myLinkedList.addAtHead(9)).toBeNil();
                expect(myLinkedList.get(3)).toStrictEqual(0);
                expect(myLinkedList.addAtHead(9)).toBeNil();
        });
});
