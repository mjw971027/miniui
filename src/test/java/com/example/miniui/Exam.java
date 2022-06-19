package com.example.miniui;

import java.util.Arrays;
import java.util.Scanner;

// 注意类名必须为 Main, 不要有任何 package xxx 信息


public class Exam {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // 注意 hasNext 和 hasNextLine 的区别
        while (in.hasNextLine()) { // 注意 while 处理多个 case
            String a = in.nextLine();
            String str = a.replace(" ", "");
            char[] arrayCh = str.toCharArray();
            Arrays.sort(arrayCh);
            String sortedStr = new String(arrayCh);  //加上这句
            System.out.println(sortedStr);
        }
    }
}
