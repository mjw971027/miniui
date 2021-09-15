package com.example.miniui.thread;

public class lamda {
    public static void main(String[] args) {
        Love love = (int a) -> {
            System.out.println("shuchu-->" + a);
        };
//简化括号
        love = a -> {
            System.out.println("shuchu-->" + a);
        };
//           简化花括号
        love = a -> System.out.println("shuchu-->" + a);
        love.love(2);
    }
}

interface Love {
    void love(int a);
}