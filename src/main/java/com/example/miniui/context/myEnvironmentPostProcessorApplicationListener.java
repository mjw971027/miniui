package com.example.miniui.context;

import org.springframework.boot.env.EnvironmentPostProcessorApplicationListener;

public class myEnvironmentPostProcessorApplicationListener extends EnvironmentPostProcessorApplicationListener {
    public myEnvironmentPostProcessorApplicationListener() {
        super();
        System.out.println("加载监听器");
    }
}
