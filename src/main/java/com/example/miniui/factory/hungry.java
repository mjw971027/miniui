package com.example.miniui.factory;

public class hungry {
//    一下次全申请了，浪费空间

    private hungry() {
    }

    ;

    private final static hungry HUNGRY = new hungry();

    public hungry getHungry() {
        return HUNGRY;
    }
}
