package com.example.miniui;

import com.alibaba.fastjson.JSON;
import com.example.miniui.dao.UserMapper;
import com.example.miniui.entity.User;
import com.example.miniui.entity.nTitle;
import com.example.miniui.services.Userserviceimpl;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.UUID;

@SpringBootTest
public class RedisTest {
    @Autowired
    private RedisTemplate redisTemplate;
    @Autowired
    UserMapper userMapper;
    Logger logger = LoggerFactory.getLogger(RedisTest.class);

    @Test
    void contextLoad() {
        Random random = new Random();
        String str;
        for (int i = 0; i < 99999; i++) {
            nTitle nTitle = new nTitle(random.nextInt(1000) + 1, UUID.randomUUID().toString().replace("-", "").toLowerCase().substring(4, 20));
            userMapper.insertTitle(nTitle);
            logger.info("插入成功:" + i);
        }
//        List<User> users = userMapper.selectAll("");
//        for (User user:users)
//        {
//            str=String.valueOf(random.nextInt(1000000)+100000);
//            user.setPwd(str);
//            userMapper.updateByPrimaryKey(user);
//        }
    }
}
