package com.example.miniui.thread;

public class TestDaem {


    public static void main(String[] args) {
        god god = new god();
        you you = new you();
        Thread thread = new Thread(god);
        thread.setDaemon(true);
//        true,------false是默认的用户线程
        thread.start();
        new Thread(you).start();
    }
}

//你
class you implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 36500; i++) {
            System.out.println("活得的第" + i);
        }
        System.out.println("再见世界！");
    }
}

//上帝
class god implements Runnable {

    @Override
    public void run() {
        while (true) {
            System.out.println("上帝保佑你");
        }

    }
}