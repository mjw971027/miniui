package com.example.miniui.exam;

import io.github.classgraph.json.Id;

import java.util.HashMap;

public class a8_28 {
    public static void main(String[] args) {
        String s1 = "google";
        String s2 = "aa";
        System.out.println(FirstNotRepeatingChar(s1));
        System.out.println(FirstNotRepeatingChar(s2));
    }

    public static String FirstNotRepeatingChar(String str) {
        // 用map统计
        HashMap<Character, Boolean> map = new HashMap();
        char[] chars = str.toCharArray();
        for (int i = 0; i < chars.length; i++) {
//            如果已经存在就添加它为false，反之添加它为true;
            if (map.containsKey(chars[i])) {
                map.put(chars[i], false);
            } else {
                map.put(chars[i], true);
            }
        }
        for (int i = 0; i < chars.length; i++) {
            if (map.get(chars[i])) {
                return map.toString();
            }
        }
        return map.toString();
    }

}
