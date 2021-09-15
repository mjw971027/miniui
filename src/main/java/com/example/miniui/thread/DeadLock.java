package com.example.miniui.thread;

import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.locks.AbstractQueuedSynchronizer;

//多个线程拥有对方所需要的资源不放，形成死锁
public class DeadLock {
    public static void main(String[] args) {
        Makeup m1 = new Makeup(0, "1hao");
        Makeup m2 = new Makeup(1, "2hao");
        m1.start();
        m2.start();
    }
}

//口红
class Lipstick {
}

//镜子
class Mirror {
}

class Makeup extends Thread {
    static Lipstick lipstick = new Lipstick();
    static Mirror mirror = new Mirror();
    int choice;
    String name;

    Makeup(int choice, String name) {
        this.choice = choice;
        this.name = name;
    }

    @Override
    public void run() {
//      makeup()
        try {
            makeup();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    //互相拿到对方的资源 产生死锁。
    public void makeup() throws InterruptedException {
        if (choice == 0) {
            synchronized (lipstick) {
                System.out.println(this.name + "获得口红的锁");
                Thread.sleep(1000);
                synchronized (mirror) {
                    System.out.println(this.name + "获得镜子的锁");
                }
            }
        } else {
            synchronized (mirror) {
                System.out.println(this.name + "获得镜子的锁");
                Thread.sleep(2000);
                synchronized (lipstick) {
                    System.out.println(this.name + "获得口红的锁");
                }
            }
        }
    }
}