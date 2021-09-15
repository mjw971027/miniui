package com.example.miniui.thread;

//利用线程次数正常停止，
//利用标志位停止
public class teststop implements Runnable {
    //    设置标志位
    private boolean flag = true;

    @Override
    public void run() {
        int i = 0;
        while (flag) {
            System.out.println("输出i：" + i++);
        }
        ;

    }

    //    2设置公开方法停止标志位
    public void stop() {
        this.flag = false;
    }

    public static void main(String[] args) {
        teststop teststop = new teststop();
        new Thread(teststop).start();
        for (int i = 0; i < 1000; i++) {
            System.out.println("主线程:" + i);
            if (i == 900) {
                teststop.stop();
                System.out.println("线程该停止了");
            }
        }
    }
}
