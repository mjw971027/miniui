package com.example.miniui.factory;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.CyclicBarrier;
import java.util.concurrent.Semaphore;

public class singlefactory {
    public static void main(String[] args) {
        single object = com.example.miniui.factory.single.getInstance();

        object.showMessage();
    }


}

class single {
    public static single res = new single();


    private single() {

    }

    public static single getInstance() {
        return res;
    }

    public void showMessage() {
        System.out.println("hello world!");
    }
}
