package com.example.miniui.utils;

import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class ReflectionUtils {

    /**
     * 将实体类中的String类型属性为null的置为""
     *
     * @param o
     * @return
     */
    public static Object nullifyStrings(Object o) {
        Field[] declaredFields = o.getClass().getDeclaredFields();
        for (Field f : declaredFields) {
            f.setAccessible(true);
            String name = f.getName();
            if ("serialVersionUID".equals(name)) {
                continue;
            }
            //获取属性类型
            Class type = f.getType();
            try {
                //只操作String类型
                if (type.equals(String.class)) {
                    String value = (String) f.get(o);
                    //如果为空
                    if (value == null || value.trim().isEmpty()) {
                        //获取属性的set方法
                        Method method = o.getClass().getMethod("set" + name.replaceFirst(name.substring(0, 1), name.substring(0, 1).toUpperCase()), type);
//                        f.set(o, null);
                        //将值设为空串
                        method.invoke(o, "ceshi");
                    }
                }
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        return o;
    }


    /**
     * 含递归
     * 将实体类中的 String类型或对象 属性为null的置为""或空对象
     *
     * @param o
     * @return
     */
    public static Object nullifyObjectOrStrings(Object o) throws ClassNotFoundException {
        Field[] declaredFields = o.getClass().getDeclaredFields();
        for (Field f : declaredFields) {
            f.setAccessible(true);
            String name = f.getName();
            if ("serialVersionUID".equals(name)) {
                continue;
            }

            //获取属性类型
            Class type = f.getType();
            try {
                //获取属性的set方法
                String setterMethod = "set" + name.replaceFirst(name.substring(0, 1), name.substring(0, 1).toUpperCase());
                Method method = o.getClass().getMethod(setterMethod, type);
                //只操作String类型
                if (type.equals(String.class)) {
                    String value = (String) f.get(o);
                    //如果为空
                    if (value == null || value.trim().isEmpty()) {
//                        f.set(o, null);
                        //将值设为空串
                        method.invoke(o, "");
                    }
                } else {
                    Class<?> aClass = Class.forName(f.getGenericType().getTypeName());
                    Object createObj = aClass.newInstance();
                    //实体赋值
                    method.invoke(o, createObj);
                    nullifyObjectOrStrings(createObj);
                }
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        return o;
    }
}