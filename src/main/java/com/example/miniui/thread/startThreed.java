package com.example.miniui.thread;

import org.springframework.scheduling.annotation.Async;

import java.util.Hashtable;

public class startThreed extends Thread {


    @Override
    public void run() {
        for (int i = 0; i < 20; i++) {
            System.out.println("辅助线程" + i);
        }
    }

    public static void main(String[] args) {


        startnewTest startnewTest1 = new startnewTest();
        Thread thread1 = new Thread(startnewTest1, "test1");
        Thread thread2 = new Thread(startnewTest1, "test2");
        Thread thread3 = new Thread(startnewTest1, "test3");
        thread1.start();
        thread2.start();
        thread3.start();

//        System.out.println("使用关键字synchronized");
//        SyncThread syncThread = new SyncThread();
//        Thread thread1 = new Thread(syncThread, "SyncThread1");
//        Thread thread2 = new Thread(syncThread, "SyncThread2");
//        thread1.start();
//        thread2.start();
    }
}

class startnewTest implements Runnable {
    private static int x;


    private static int changed = -1;
    private static String currentName = "";

    public startnewTest() {
        x = 0;
    }


    @Override
    public void run() {

        for (int i = 0; i < 333; i++) {
            synchronized (this) {
                try {
                    if (!currentName.equals(Thread.currentThread().getName())) {
                        currentName = Thread.currentThread().getName();
                        System.out.println(Thread.currentThread().getName() + ":" + Thread.currentThread().getState());
                        changed++;
                    }
                    x++;
//                System.out.println(Thread.currentThread().getName() + ":输出一数字" + x--);

                    Thread.sleep(0);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
        }
        System.out.println("changed:" + changed);
        System.out.println("yunxing:" + x);
    }
}

class SyncThread implements Runnable {
    private static int count;

    public SyncThread() {
        count = 0;
    }

    public void run() {
        synchronized (this) {
            for (int i = 0; i < 5; i++) {
                try {
                    System.out.println("线程名:" + Thread.currentThread().getName() + ":" + (count++));
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    public int getCount() {
        return count;
    }
}
