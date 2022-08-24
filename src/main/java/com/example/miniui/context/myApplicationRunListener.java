package com.example.miniui.context;

import org.springframework.boot.ConfigurableBootstrapContext;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringApplicationRunListener;

public class myApplicationRunListener implements SpringApplicationRunListener {


    public myApplicationRunListener(SpringApplication application, String[] args) {


    }

    @Override
    public void starting(ConfigurableBootstrapContext bootstrapContext) {
        System.out.println("启用运行监听器");
    }
}
