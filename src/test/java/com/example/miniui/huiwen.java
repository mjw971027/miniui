package com.example.miniui;


import java.util.*;

import org.apache.commons.lang3.StringUtils;
public class huiwen {
    public static void main(String[] args) {
        int[] num = {3, 2, 3, 2, 2, 2};
//        int[] res = nextGreaterElements(num);
//        boolean res2 = divideArray(num);
        List<String> dictionary = new ArrayList<>();
        dictionary.add("cat");
        dictionary.add("rat");
        dictionary.add("bat");
        String sentence = "the cattle was rattled by the battery";
        String res = replaceWords(dictionary, sentence);
        return;
    }

    public String mostCommonWord(String paragraph, String[] banned) {
        String[] str = paragraph.split(" ");
        Map map = new HashMap();
        for (int i = 0; i < str.length; i++) {

        }
        return "";
    }

    public static int[] nextGreaterElements(int[] nums) {
        int[] nums2 = new int[nums.length];
        int[] sub = nums;
        int[] dd = new int[nums.length + nums.length];
        System.arraycopy(nums, 0, dd, 0, nums.length);
        System.arraycopy(sub, 0, dd, nums.length, sub.length);
        for (int i = 0; i < nums.length; i++) {
            boolean flag = false;
            int max = nums[i];
            for (int j = i + 1; j < dd.length; j++) {
                if (max < dd[j]) {
                    max = dd[j];
                    flag = true;
                    break;
                }
            }
            if (flag) {
                nums2[i] = max;
            } else {
                nums2[i] = -1;
            }
        }
        return nums2;
    }

    public static int numSplits(String s) {
        int sum = 0;
        int num = s.length();
        for (int i = 1; i < s.length(); i++) {
            String s1 = s.substring(0, i);
            String s2 = s.substring(i, num);
            if (diffWord(s1) == diffWord(s2)) {
                sum++;
            }
        }
        return sum;
    }

    public static int diffWord(String s) {
        char[] arry = s.toCharArray();
        Set<Object> haoma = new LinkedHashSet<Object>();

        for (int i = 0; i < arry.length; i++) {
            haoma.add(arry[i]);
        }
        return haoma.size();
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

    //    删除链的中间那一个节点。
    public static ListNode deleteMiddle(ListNode head) {
        //快慢指针
        ListNode slow = head, fast = head.next;
        if (fast == null) return null;
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        slow.next = slow.next.next;
        return head;
    }

    public static boolean divideArray(int[] nums) {
        Arrays.sort(nums);
        int slow = 0;
        int fast = 1;
        if (nums.length % 2 == 0) {
            while (nums.length > fast) {
                if (nums[slow] == nums[fast]) {
                    slow = slow + 2;
                    fast = slow + 1;
                } else {
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    }

    public static String replaceWords(List<String> dictionary, String sentence) {
        String[] res = sentence.split(" ");
        String[] end2 = new String[res.length];
        List<String> list = new ArrayList<String>();
        for (int i = 0; i < res.length; i++) {
            for (int j = 0; j < dictionary.size(); j++) {
                System.out.println(res[i].indexOf(dictionary.get(j).toString()));
                if (res[i].indexOf(dictionary.get(j).toString()) == 0) {
                    end2[i] = dictionary.get(j).toString();
                    break;
                } else if (res[i].indexOf(dictionary.get(j).toString()) == -1) {
                    if (j == dictionary.size() - 1) {
                        end2[i] = res[i];
                    }
                }
            }
        }
        String end = Arrays.toString(end2);
        return end;
    }

}
