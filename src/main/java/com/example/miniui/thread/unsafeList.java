package com.example.miniui.thread;

public class unsafeList implements Runnable {
    private int ticketNums = 10;
    private boolean flag = true;

    @Override
    public void run() {
        while (flag) {
            try {
                buy();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    private synchronized void buy() throws InterruptedException {
        if (ticketNums <= 0) {
            flag = false;
            return;
        }
//        Thread.sleep(100);
        System.out.println(Thread.currentThread().getName() + "拿到了第几场票" + ticketNums--);

    }

    public static void main(String[] args) {
        unsafeList thread4 = new unsafeList();
        new Thread(thread4, "小明").start();
        new Thread(thread4, "老师").start();
        new Thread(thread4, "小红").start();


    }
}
