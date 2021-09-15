package com.example.miniui.thread;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.locks.ReentrantLock;

public class lockThread implements Runnable {
    private int ticketNums = 10;
    private boolean flag = true;
    private final ReentrantLock lock = new ReentrantLock();

    @Override
    public void run() {
        while (flag) {
            lock.lock();
            try {
                buy();
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                lock.unlock();
            }
        }
    }

    private void buy() {
        if (ticketNums <= 0) {
            flag = false;
            return;
        }
        System.out.println(Thread.currentThread().getName() + "拿到了第几场票" + ticketNums--);

    }

    public static void main(String[] args) {
        lockThread thread4 = new lockThread();
        new Thread(thread4, "小明").start();
        new Thread(thread4, "老师").start();
        new Thread(thread4, "小红").start();


    }
}
