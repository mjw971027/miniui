package com.example.miniui;

import com.alibaba.fastjson.JSON;
import com.example.miniui.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;

@SpringBootTest
public class RedisTest {
    @Autowired
    private RedisTemplate redisTemplate;
    @Test
    void contextLoad()
    {
        User user=new User(1,"mjw","3424f333");
        String user1= JSON.toJSONString(user);
    redisTemplate.opsForValue().set("name",user1);
    System.out.println(redisTemplate.opsForValue().get("name"));
    }
}
