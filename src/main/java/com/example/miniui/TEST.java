package com.example.miniui;

import org.omg.CORBA.portable.InvokeHandler;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TEST {

    public static void main(String[] args) throws ClassNotFoundException, ParseException {
//        通过反射获取类的forname
        Class c1 = Class.forName("com.example.miniui.User");
        System.out.println(c1);
//        一个类只有一个class对象

        String str = "08:00";
        System.out.println(str);
        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
        Date date = sdf.parse(str);
        long selftime = 421 * 60 * 1000;
        Date aftertime = new Date(date.getTime() + selftime);
        System.out.println(new Date());
        System.out.println(aftertime);
        System.out.println(sdf.format(aftertime));
    }
}

class User {
    private int id;
    private int age;
    private String name;

    public User(int id, int age, String name) {
        this.id = id;
        this.age = age;
        this.name = name;
    }

    public User() {
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", age=" + age +
                ", name='" + name + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

class invokehodel implements InvocationHandler {

    public User user;

    public invokehodel(User user) {
        this.user = user;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        return null;
    }
}