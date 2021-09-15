package com.example.miniui.factory;


//枚举本身就是一个类
public enum Enum {
    INSTANCE;

    public Enum getInstance() {
        return INSTANCE;
    }


}
