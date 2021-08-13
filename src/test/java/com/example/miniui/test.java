package com.example.miniui;

import java.util.*;

import static java.lang.Math.pow;

public class test {
    public static void main(String[] args) {
//        ListNode listNode3= new ListNode(2);
//        ListNode listNode2= new ListNode(1,listNode3);
//        ListNode listNode1= new ListNode(1,listNode2);
//        ListNode res=removeDuplicateNodes(listNode1);
        return;
    }

    public static ListNode removeDuplicateNodes(ListNode head) {
        HashSet<Integer> sites = new HashSet<Integer>();
        if (head == null) {
            return head;
        }
        while (head != null) {
            sites.add(head.val);
            head = head.next;
        }
        ListNode res = new ListNode(0);
        ListNode end = res;
        for (int i : sites) {
            ListNode res1 = new ListNode(0);
            res.val = i;
            res.next = res1;
            res = res.next;
        }
        while (end.next.next != null) {
            end = end.next;
        }
        return end;
    }

    public static boolean isUnique(String astr) {
        HashSet<String> sites = new HashSet<String>();
        if (astr == null) {
            return false;
        }
        for (int i = 0; i < astr.length(); i++) {
            String s = String.valueOf(astr.charAt(i));
            sites.add(s);
        }
        if (astr.length() == sites.size()) {
            return true;
        } else {
            return false;
        }

    }

    public static class ListNode {
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

}
