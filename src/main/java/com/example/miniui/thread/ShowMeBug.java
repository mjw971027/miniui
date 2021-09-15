package com.example.miniui.thread;

import java.util.Arrays;

public class ShowMeBug {
    public static void main(String[] args) {
        // System.out.println("Hello World!");

    }

    public static void quiksort() {
        int[] arr = {1, 5, 6, 7, 8, 4, 2};
        qk(arr, 0, arr.length - 1);
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }

    public static void qk(int[] arr, int left, int right) {
        if (left < right) {
            int index = qk2(arr, left, right);
            qk(arr, left, index - 1);
            qk(arr, index + 1, right);
        }
    }

    public static int qk2(int[] arr, int left, int right) {
        int tmp = arr[left];
        int i = left;
        int j = right;
        while (i != j) {
            while (i < j && arr[j] >= tmp) {
                j--;
            }
            while (i < j && arr[i] <= tmp) {
                i++;
            }
            if (i < j) {
                int buffer = arr[i];
                arr[i] = arr[j];
                arr[j] = buffer;
            }
        }
        arr[left] = arr[j];
        arr[j] = tmp;
        return j;
    }

    public static void maopao() {
        int[] arr = {1, 5, 6, 7, 8, 4, 2};
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    int tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
        }
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }

    public static void select() {

        int[] arr = {1, 5, 6, 7, 8, 4, 2};
        // 总共要经过 N-1 轮比较
        for (int i = 0; i < arr.length - 1; i++) {
            int min = i;

            // 每轮需要比较的次数 N-i
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }

            // 将找到的最小值和i位置所在的值进行交换
            if (i != min) {
                int tmp = arr[i];
                arr[i] = arr[min];
                arr[min] = tmp;
            }

        }
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }

    }

    public class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    public ListNode reverseList(ListNode head) {
        ListNode pre = null;
        while (head != null) {
            ListNode tmp = head.next;
            head.next = pre;
            pre = head;
            head = tmp;
        }
        return pre;
    }


}
