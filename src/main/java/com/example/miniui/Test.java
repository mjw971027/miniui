package com.example.miniui;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.Calendar;
import java.util.Date;

public class Test {

    public static void main(String[] args) throws ClassNotFoundException, ParseException {
//        通过反射获取类的forname
        Class c1 = Class.forName("com.example.miniui.User");
        System.out.println(c1);
//        一个类只有一个class对象

        String str = "23:00";
//        System.out.println(str);
//        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
//        Date date = sdf.parse(str);
//        long selftime = 421 * 60 * 1000;
//        Date aftertime = new Date(date.getTime() + selftime);
//        System.out.println(new Date());
//        System.out.println(aftertime);
//        System.out.println(sdf.format(aftertime));
        String res = addTimeInterval(str, 5);
        String res2 = addTimeInterval2(str, "72");
        System.out.println(res2);
    }


    public static String addTimeInterval2(String time, String interval) {
        // 将字符串表示的时间解析为LocalTime对象
        LocalTime t = LocalTime.parse(time);
        // 将    字符串表示的间隔转换为分钟数
        long minutes = Long.parseLong(interval);
        // 将LocalTime对象加上间隔分钟数
        t = t.plus(minutes, ChronoUnit.MINUTES);
        // 返回新的时间，以字符串形式表示
        return t.toString();
    }


    public static String addTimeInterval(String time, int interval) {
        // 解析时间字符串，获取小时和分钟
        int hour = Integer.parseInt(time.split(":")[0]);
        int minute = Integer.parseInt(time.split(":")[1]);

        // 使用 Calendar 类计算时间间隔
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.HOUR_OF_DAY, hour);
        calendar.set(Calendar.MINUTE, minute);
        calendar.add(Calendar.MINUTE, interval);

        // 使用 SimpleDateFormat 类格式化时间
        SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm");
        return dateFormat.format(calendar.getTime());
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

class invokeHandler implements InvocationHandler {

    public User user;

    public invokeHandler(User user) {
        this.user = user;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        return null;
    }


}