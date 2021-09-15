package com.example.miniui.thread;

public class testThread4 implements Runnable {
    private int ticketNums = 10;

    @Override
    public void run() {
        while (ticketNums > 0) {
            try {
                Thread.sleep(200);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(Thread.currentThread().getName() + "拿到了第几场票" + ticketNums--);
        }
    }

    public static void main(String[] args) {
        testThread4 thread4 = new testThread4();
        Thread t1 = new Thread(thread4, "小明");
        Thread t2 = new Thread(thread4, "老师");
        Thread t3 = new Thread(thread4, "小红");

        t1.start();
        t2.start();
        t3.start();

    }
}
