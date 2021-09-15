package com.example.miniui.thread;

public class startThreed3 implements Runnable {

    @Override
    public void run() {
        for (int i = 0; i < 20; i++) {
            System.out.println("辅助线程" + i);
        }
    }

    public static void main(String[] args) {

        startThreed3 startThreed3 = new startThreed3();

        Thread t1 = new Thread(startThreed3);

        t1.start();
        for (int i = 0; i < 600; i++) {
            System.out.println("主线程" + i);

        }
    }
}
