package com.example.miniui;

import com.example.miniui.entity.TestUser;
import org.apache.commons.compress.utils.Lists;


import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class collections {
    public static void main(String[] args) {
        test();
    }

    public static void test() {
        List<TestUser> list = Lists.newArrayList();
        TestUser testUser = new TestUser();
        testUser.setId(2);/*主键*/
        testUser.setName("张三");/*姓名*/
        testUser.setClasses(1);/*班级*/
        testUser.setGrade(1);/*年级*/
        testUser.setScore(80);/*成绩*/
        list.add(testUser);

        TestUser testUser1 = new TestUser();
        testUser1.setId(1);
        testUser1.setName("李四");
        testUser1.setClasses(1);
        testUser1.setGrade(1);
        testUser1.setScore(60);
        list.add(testUser1);

        TestUser testUser2 = new TestUser();
        testUser2.setId(3);
        testUser2.setName("王二麻子");
        testUser2.setClasses(2);
        testUser2.setGrade(1);
        testUser2.setScore(90);
        list.add(testUser2);

        TestUser testUser3 = new TestUser();
        testUser3.setId(4);
        testUser3.setName("王五");
        testUser3.setClasses(2);
        testUser3.setGrade(1);
        testUser3.setScore(59.5);
        list.add(testUser3);

        TestUser testUser4 = new TestUser();
        testUser4.setId(8);
        testUser4.setName("小明");
        testUser4.setClasses(1);
        testUser4.setGrade(2);
        testUser4.setScore(79.5);
        list.add(testUser4);

        TestUser testUser5 = new TestUser();
        testUser5.setId(5);
        testUser5.setName("小红");
        testUser5.setClasses(2);
        testUser5.setGrade(2);
        testUser5.setScore(99);
        list.add(testUser5);

        TestUser testUser6 = new TestUser();
        testUser6.setId(7);
        testUser6.setName("小黑");
        testUser6.setClasses(2);
        testUser6.setGrade(2);
        testUser6.setScore(45);
        list.add(testUser6);

        TestUser testUser7 = new TestUser();
        testUser7.setId(6);
        testUser7.setName("小白");
        testUser7.setClasses(1);
        testUser7.setGrade(2);
        testUser7.setScore(88.8);
        list.add(testUser7);

        TestUser testUser8 = new TestUser();
        testUser8.setId(6);
        testUser8.setName("小白");
        testUser8.setClasses(1);
        testUser8.setGrade(2);
        testUser8.setScore(88.8);
        list.add(testUser8);


        /*去重，去除重复对象（每个属性的值都一样的），需要注意的是要先重写对象TestUser的equals和hashCode方法*/
        System.out.println("去重前：" + list);
        List<TestUser> distinctList = list.stream().distinct().collect(Collectors.toList());
        System.out.println("去重后：" + distinctList);

        /*排序，按id升续排列，如果要降续则改成：(a, b) -> b.getId() - a.getId(); a和b都是变量名（可以按自己意愿取名字），都是list中的对象的实例*/
        System.out.println("排序前：" + list);
        List<TestUser> sortList = list.stream().sorted((a, b) -> a.getId() - b.getId()).collect(Collectors.toList());
        System.out.println("排序后" + sortList);

        /*过滤，按照自己的需求来筛选list中的数据，比如我筛选出不及格的（小于60分）的人,t为实例*/
        System.out.println("过滤后：" + list);
        List<TestUser> filterList = list.stream().filter(t -> t.getScore() < 60).collect(Collectors.toList());
        System.out.println("过滤后" + filterList);

        /*map, 提取对象中的某一元素，例子中我取的是每个人的name，注意list中类型对应，如果取的是id或者班级，就应该是integer类型*/
        System.out.println("提取前：" + list);
        List<String> mapList = list.stream().map(t -> t.getName()).collect(Collectors.toList());
        System.out.println("提取后：" + mapList);

        /*统计，统计所有人分数的和, 主要我设置的分数属性是double类型的，所以用mapToDouble，如果是int类型的，则需要用mapToInt*/
        double sum = list.stream().mapToDouble(t -> t.getScore()).sum();
        int count = list.stream().mapToInt(t -> t.getId()).sum();

        /*分组， 按照字段中某个属性将list分组*/
        Map<Integer, List<TestUser>> map = list.stream().collect(Collectors.groupingBy(t -> t.getGrade()));
        System.out.println("按年级分组" + map);
        /*然后再对map处理，这样就方便取出自己要的数据*/
        for (Map.Entry<Integer, List<TestUser>> entry : map.entrySet()) {
            System.out.println("key:" + entry.getKey());
            System.out.println("value:" + entry.getValue());
        }

        /*多重分组，先按年级分组，再按班级分组*/
        Map<Integer/*年级id*/, Map<Integer/*班级id*/, List<TestUser>>> groupMap = list.stream().collect(Collectors.groupingBy(t -> t.getGrade(), Collectors.groupingBy(t -> t.getClasses())));
        System.out.println("按照年级再按班级分组：" + groupMap);
        System.out.println("取出一年级一班的list：" + groupMap.get(1).get(1));

        /*多重分组，一般多重分组后都是为了统计，比如说统计每个年级，每个班的总分数*/
        Map<Integer/*年级id*/, Map<Integer/*班级id*/, Double>> sumMap = list.stream().collect(Collectors.groupingBy(t -> t.getGrade(), Collectors.groupingBy(t -> t.getClasses(), Collectors.summingDouble(t -> t.getScore()))));
        System.out.println(sumMap);
        System.out.println("取出一年级一班的总分：" + sumMap.get(1).get(1));

        /*stream是链式的，这些功能是可以一起使用的，例如：计算每个年级每个班的及格人数*/
        Map<Integer/*年级*/, Map<Integer/*班级*/, Long/*人数*/>> integerMap = list.stream().filter(t -> t.getScore() >= 60).collect(Collectors.groupingBy(t -> t.getGrade(), Collectors.groupingBy(t -> t.getClasses(), Collectors.counting())));
        System.out.println("取出一年级一班及格人数：" + integerMap.get(1).get(1));
    }

}
