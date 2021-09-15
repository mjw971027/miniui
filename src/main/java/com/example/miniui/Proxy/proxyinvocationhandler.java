package com.example.miniui.Proxy;

import com.example.miniui.entity.User;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

public class proxyinvocationhandler implements InvocationHandler {

    private User user;

    public void setUser(User user) {
        this.user = user;
    }

    public Object getProxy() {
        return Proxy.newProxyInstance(this.getClass().getClassLoader(), user.getClass().getInterfaces(), this);
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
//        反射机制原理
        Object res = method.invoke(user, args);
        return res;
    }
}
