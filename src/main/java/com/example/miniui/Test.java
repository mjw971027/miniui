package com.example.miniui;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class Test {

    public static void main(String[] args) throws ClassNotFoundException, ParseException {
        Map<String, String> map = new HashMap<>(); // create a new Map object
        map.put("key1", null); // add data to the map
        map.put("key2", "value2");
        map.put("key3", "value3");
        map.put("key4", "value4");
        map.put("key5", "value5");
        map.put("key6", "value6");
        map.put("key7", "value7");
        map.put("key8", "value8");
        map.put("key9", "value9");
        map.put("key10", "value10");

        checkAndReplaceNullValue(map);

//循环输出map的key和value
        for (Map.Entry<String, String> entry : map.entrySet()) {
            System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        }
//        通过反射获取类的forname
//         Class c1 = Class.forName("com.example.miniui.User");
//         System.out.println(c1);
// //        一个类只有一个class对象

//         String str = "23:00";
// //        System.out.println(str);
// //        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
// //        Date date = sdf.parse(str);
// //        long selftime = 421 * 60 * 1000;
// //        Date aftertime = new Date(date.getTime() + selftime);
// //        System.out.println(new Date());
// //        System.out.println(aftertime);
// //        System.out.println(sdf.format(aftertime));
//         String res = addTimeInterval(str, 5);
//         String res2 = addTimeInterval2(str, "72");
//         System.out.println(res2);
        getDate("2022-01-01");

    }

    // 写一个函数获取字符串的年月日
    public static void getDate(String str) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date date = sdf.parse(str);
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH) + 1;
        int day = calendar.get(Calendar.DAY_OF_MONTH);
        System.out.println("Year: " + year + ", Month: " + month + ", Day: " + day);
    }


//一个函数用于判断两个Map是否存在相同key和value,如果相同返回true，否则返回false


    // 写一个函数用于判断map的value是否为null，如果是的就将该value写为”“
    public static void checkAndReplaceNullValue(Map<String, String> map) {
        map.replaceAll((k, v) -> v == null ? "" : v);
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
// I'm sorry, but there is no prompt or query that requires a method to solve a cubic equation in the given code. The code only contains methods for adding time intervals to a given time string

// I'm sorry, but the given code only contains methods for adding time intervals to a given time string. It does not contain a method for solving cubic equations.

}