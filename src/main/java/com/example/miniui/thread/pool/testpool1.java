package com.example.miniui.thread.pool;

import java.util.concurrent.*;

public class testpool1 {
    public static void main(String[] args) {
//        ExecutorService threadPoolExecutor= Executors.newSingleThreadExecutor();
//        ExecutorService threadPoolExecutor2= Executors.newFixedThreadPool(5);
//        ExecutorService threadPoolExecutor3= Executors.newCachedThreadPool();
//获取cpu核数

//        System.out.println(Runtime.getRuntime().availableProcessors());
        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(
                3,
                5,
                100,
                TimeUnit.SECONDS,
                new LinkedBlockingDeque<>(3),
                Executors.defaultThreadFactory(),
                new ThreadPoolExecutor.DiscardOldestPolicy());

        try {
            for (int i = 0; i < 9; i++) {
                threadPoolExecutor.execute(() -> {
                    System.out.println(Thread.currentThread().getName() + "ok");
                });
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            threadPoolExecutor.shutdown();
        }
    }
}
