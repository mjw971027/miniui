package com.example.miniui.thread;

import java.util.concurrent.atomic.AtomicInteger;

public class TreadTets11 {
    static AtomicInteger x = new AtomicInteger();

    //    static int x=0;
    public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
            Thread t1 = new Thread(new Runnable() {
                @Override
                public void run() {
//                    synchronized (TreadTets11.class){
                    while (x.get() < 1000) {
                        System.out.println("threadname:" + Thread.currentThread().getName() + "num:" + x.incrementAndGet());
                    }
//                    }
                }
            });
            t1.start();
        }
    }
}
