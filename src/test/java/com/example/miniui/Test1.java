package com.example.miniui;


import com.example.miniui.controller.Usercontroller;
import org.apache.commons.codec.binary.StringUtils;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.io.IOException;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@SpringBootTest
public class Test1 {
    public static void main(String[] args) throws IOException {
//        ExcelTest excelTest=new ExcelTest();
//        excelTest.test1();
//        String str = "aaa";
//
//        String[] strArray = str.split(",");
//        for (String s : strArray) {
//            System.out.println(s);}


//        Date date = new Date();
////可以转成你想要的格式 yyyy/MM/dd HH:mm:ss 等等
//        SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
//        String dateString = format.format(date);
//        System.out.println(dateString);
//        List<String> list= Arrays.asList("aaa",  "bbb", "ccc", "ddd");
//        String str= String.join(" ", list);
//        System.out.println(str);
//        String str="12312";
//        int x=1323;
//        BigDecimal bigDecimal=new BigDecimal(x);
//        System.out.println(bigDecimal);
//        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
//        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        System.out.println('2' - '0');
    }
    private MockMvc mvc;

    @Before
    public void setUp() {
        mvc = MockMvcBuilders.standaloneSetup(new Usercontroller()).build();


//    @Test
//    public void testUserController() throws Exception {
//        // 测试UserController
//        RequestBuilder request;
//
//        // 1、get查一下user列表，应该为空
//        request = get("/users/");
//        mvc.perform(request)
//                .andExpect(status().isOk())
//                .andExpect(content().string(equalTo("[]")));
//
    }

}
