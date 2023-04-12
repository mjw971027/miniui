package com.example.miniui;

import com.example.miniui.config.MyAuthenticationSucessHandler;
import com.example.miniui.entity.TestUser;
import com.example.miniui.utils.ReflectionUtils;
import com.example.miniui.entity.User;
import org.apache.poi.ss.formula.functions.T;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.spi.LoggerFactoryBinder;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class NullstrTest {
    public static Map null_vals(Map my_map) {
        Map<String, Object> supplierMap = my_map;
        supplierMap.forEach((key, value) -> {
            if (value == null) {
                supplierMap.put(key, "");
            }
        });


        return my_map;
    }

    public static void main(String[] args) {
//        Logger logger = LoggerFactory.getLogger(NullstrTest.class);
//        logger.info("开始");
//        Map<String, String> params=new HashMap<>();
//        params.put("ccc","null");
//        params.put("bbb","");
//        params.put("aaa",null);
//        params.put("213","null");
//        params.put("bbb423","");
//        params.put("aeqaa",null);
//        params.put("ccwerwc","null");
//        params.put("bbdsfb","");
//        params.put("aaadfa",null);
//        null_vals(params);
//        logger.info("结束");

        Map<String, Integer> map = new HashMap<>();
        map.put("a", null);
        map.put("b", 2);
        map.put("c", 3);
        map.put("d", 4);
        map.put("e", 5);
        System.out.println(map);
        nullturnS(map);
        System.out.println(map);
    }

    /**
     * 把对象中的 String 类型的null字段，转换为空字符串
     *
     * @param <T> 待转化对象类型
     * @param cls 待转化对象
     * @return 转化好的对象
     */
    public static <T> T noNullStringAttr(T cls) {
        Field[] fields = cls.getClass().getDeclaredFields();
        if (fields == null || fields.length == 0) {
            return cls;
        }
        for (Field field : fields) {
            if ("String".equals(field.getType().getSimpleName())) {
                field.setAccessible(true);
                try {
                    Object value = field.get(cls);
                    if (value == null) {
                        field.set(cls, "");
                    }
                } catch (IllegalArgumentException | IllegalAccessException e) {
                    e.printStackTrace();
                }
            }
        }
        return cls;
    }

    public static Map nullturnS(Map map) {
        map.forEach((key, value) -> {
            if (value == null) {
                map.put(key, " ");
            }
        });
        return map;
    }

}
