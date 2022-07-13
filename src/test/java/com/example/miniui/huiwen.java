package com.example.miniui;


import java.util.*;

import io.swagger.models.auth.In;
import org.apache.commons.lang3.StringUtils;

public class huiwen {
    public static void main(String[] args) {
        int[] num = {3, 2, 3, 2, 2, 2};
//        int[] res = nextGreaterElements(num);
//        boolean res2 = divideArray(num);
//        List<String> dictionary = new ArrayList<>();
//        dictionary.add("cat");
//        dictionary.add("rat");
//        dictionary.add("bat");
//        String sentence = "the cattle was rattled by the battery";
//        String res = replaceWords(dictionary, sentence);
//        int[][] test = {{0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0},
//                {0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0},
//                {0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0},
//                {0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0},
//                {0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0},
//                {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0},
//                {0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0},
//                {0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0}};
//
//        int x = maxAreaOfIsland(test);
        int[] nums = {1, 2, 2};
        huiwen huiwen = new huiwen();
        List<List<Integer>> lists = huiwen.permute(nums);
        System.out.println(lists);

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

    //    dfs算法
    public static int dfs(int[][] grid, int cur_i, int cur_j) {
        if (cur_i < 0 || cur_j < 0 || cur_i == grid.length || cur_j == grid[0].length || grid[cur_i][cur_j] == 0) {
            return 0;
        }
//        必要的一步，将此时的点数归于0。
//        相当于做个标记
        grid[cur_i][cur_j] = 0;
        int[] di = {0, 0, 1, -1};
        int[] dj = {1, -1, 0, 0};
        int ans = 1;
        for (int i = 0; i < 4; i++) {
            ans = ans + dfs(grid, cur_i + di[i], cur_j + dj[i]);
        }
        return ans;
    }

    public static int maxAreaOfIsland(int[][] grid) {
        int ans = 0;
        for (int i = 0; i != grid.length; ++i) {
            for (int j = 0; j != grid[0].length; ++j) {
                ans = Math.max(ans, dfs(grid, i, j));
            }
        }
        return ans;
    }

    private int bfs(int n, int[][] flights, int src, int dst, int k) {
        int INF = 1000007;

        // 整理题目给定的flights，转换成每个节点的子节点有哪些
        List<int[]>[] g = new List[n];
        for (int i = 0; i < n; i++) {
            g[i] = new ArrayList<>();
        }

        for (int[] flight : flights) {
            g[flight[0]].add(new int[]{flight[1], flight[2]});
        }

        // 表示src到i到最小价格
        int[] ans = new int[n];
        Arrays.fill(ans, INF);
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{src, 0});
        // 退出条件加上 k 的限制
        while (!queue.isEmpty() && k + 1 > 0) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int[] poll = queue.poll();
                for (int[] path : g[poll[0]]) {
                    int distance = poll[1] + path[1];
                    // 剪枝1，小于 i 之前记录的最小值，且小于 dst 之前记录的最小值
                    if (distance < ans[path[0]] && distance < ans[dst]) {
                        ans[path[0]] = distance;
                        // 剪枝2，到 dst 了就不用继续往下了
                        if (path[0] != dst) {
                            queue.offer(new int[]{path[0], distance});
                        }
                    }
                }
            }
            k--;
        }

        return ans[dst] >= INF ? -1 : ans[dst];
    }

    public static boolean digits(int n) {
        if (n == 2 || n == 5 || n == 6 || n == 9) {
            return true;
        } else {
            return false;
        }
    }

    //    将一个数分解为不同位上的每个数
    public static int[] getIntNum(int n) {
        int temp = n;
        int mod = 10;
        int[] nums = new int[String.valueOf(n).length()];
        for (int i = 0; i < nums.length; i++) {
            nums[i] = temp % mod;
            temp = (temp - nums[i]) / mod;
        }
        return nums;
    }

    //    简单的链表求中间，快慢指针
    public ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    //找到k个最接近x的数
    public static List<Integer> findClosestElements(int[] arr, int k, int x) {
        int size = arr.length;

        int left = 0;
        int right = size - 1;

        int removeNums = size - k;
        while (removeNums > 0) {
            if (x - arr[left] <= arr[right] - x) {
                right--;
            } else {
                left++;
            }
            removeNums--;
        }

        List<Integer> res = new ArrayList<>();
        for (int i = left; i < left + k; i++) {
            res.add(arr[i]);
        }
        return res;
    }

    //斐波那契数列
    public static void febo(int n) {

        double first = 1;
        double second = 1;
        for (int i = 0; i < n; i++) {
            double tmp = first + second;
            first = second;
            second = tmp;

            System.out.println(tmp);
        }
    }

    class Solution {
        public List<List<Integer>> permute(int[] nums) {
            List<List<Integer>> res = new ArrayList<List<Integer>>();

            List<Integer> output = new ArrayList<Integer>();
            for (int num : nums) {
                output.add(num);
            }

            int n = nums.length;
            backtrack(n, output, res, 0);
            return res;
        }

        public void backtrack(int n, List<Integer> output, List<List<Integer>> res, int first) {
            // 所有数都填完了
            if (first == n) {
                res.add(new ArrayList<Integer>(output));
            }
            for (int i = first; i < n; i++) {
                // 动态维护数组
                Collections.swap(output, first, i);
                // 继续递归填下一个数
                backtrack(n, output, res, first + 1);
                // 撤销操作
                Collections.swap(output, first, i);
            }
        }
    }

    public List<List<Integer>> permute(int[] nums) {
        int len = nums.length;
        // 使用一个动态数组保存所有可能的全排列
        List<List<Integer>> res = new ArrayList<>();
        if (len == 0) {
            return res;
        }

        boolean[] used = new boolean[len];
        Deque<Integer> path = new ArrayDeque<>(len);

        dfs2(nums, len, 0, path, used, res);
        return res;
    }

    private void dfs(int[] nums, int len, int depth,
                     Deque<Integer> path, boolean[] used,
                     List<List<Integer>> res) {
        if (depth == len) {
            res.add(new ArrayList<>(path));
            return;
        }

        for (int i = 0; i < len; i++) {
            if (!used[i]) {
                path.addLast(nums[i]);
                used[i] = true;

                System.out.println("  递归之前 => " + path);
                dfs(nums, len, depth + 1, path, used, res);

                used[i] = false;
                path.removeLast();
                System.out.println("递归之后 => " + path);
            }
        }
    }

    private void dfs2(int[] nums, int len, int depth,
                      Deque<Integer> path, boolean[] used,
                      List<List<Integer>> res) {
        if (depth == len) {
            res.add(new ArrayList<>(path));
            return;
        }

        for (int i = 0; i < len; i++) {
            if (used[i] || (i > 0 && nums[i] == nums[i - 1] && !used[i - 1])) {
                continue;
            }
            path.addLast(nums[i]);
            used[i] = true;
            dfs2(nums, len, depth + 1, path, used, res);
            used[i] = false;
            path.removeLast();

        }
    }

    private void dfs3(int[] nums, int len, int depth,
                      Deque<Integer> path, boolean[] used,
                      List<List<Integer>> res) {
        if (depth == len) {
            res.add(new ArrayList<>(path));
            return;
        }

        for (int i = 0; i < len; i++) {
            path.addLast(nums[i]);
            used[i] = true;
            dfs3(nums, len, depth + 1, path, used, res);
            used[i] = false;
            path.removeLast();

        }
    }


}
