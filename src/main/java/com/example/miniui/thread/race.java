package com.example.miniui.thread;

public class race implements Runnable {
    private static String winner;

    @Override
    public void run() {
        for (int i = 0; i <= 100; i++) {
            boolean flag = gameOver(i);
            if (flag) {
                break;
            }
            System.out.println(Thread.currentThread().getName() + "跑了" + i + "步");
        }
    }

    private boolean gameOver(int steps) {
        if (winner != null) {
            return true;
        } else {
            if (steps >= 100) {
                winner = Thread.currentThread().getName();
                System.out.println("winner:" + winner);
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        race r1 = new race();
        race r2 = new race();

        Thread t1 = new Thread(r1, "兔子");
        Thread t2 = new Thread(r1, "乌龟");

        t1.start();
        t2.start();
    }
}
