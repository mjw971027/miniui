package com.example.miniui.thread;

public class startThreed extends Thread {


    @Override
    public void run() {
        for (int i = 0; i < 20; i++) {
            System.out.println("辅助线程" + i);
        }
    }

    public static void main(String[] args) {

        startThreed startThreed = new startThreed();
        startThreed.start();

        for (int i = 0; i < 600; i++) {
            System.out.println("主线程" + i);

        }
    }
}
