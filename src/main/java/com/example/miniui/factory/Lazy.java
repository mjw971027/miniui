package com.example.miniui.factory;

public class Lazy {
    private Lazy() {
    }

    ;
    private volatile static Lazy lazy;

    public static Lazy getInstance() {
//双重锁式的懒汉式
        if (lazy == null) {
            synchronized (Lazy.class) {
                if (lazy == null) {
                    lazy = new Lazy();
                }
            }
        }
        return lazy;
    }
//    如果不加锁，并发下不安全

    public static void main(String[] args) {
        Lazy lazy = Lazy.getInstance();
    }
}


