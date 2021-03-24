package com.example.miniui;

import com.alibaba.fastjson.JSON;
import com.example.miniui.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class RedisTest {
    @Autowired
    private RedisTemplate redisTemplate;
    @Test
    void contextLoad()
    {
        User user=new User();
      user.setName("dasdas");
      user.setId(1);
      System.out.println(user.getId()+user.getName()+user.getPwd());
    }
}
