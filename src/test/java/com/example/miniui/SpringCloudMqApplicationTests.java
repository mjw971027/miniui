package com.example.miniui;

import org.junit.jupiter.api.Test;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

@SpringBootTest
class SpringCloudMqApplicationTests {

    //RabbitTemplate为我们封装了大量的RabbitMQ操作，已经由Starter提供，因此直接注入使用即可
    @Resource
    RabbitTemplate template;

    @Test
    void publisher() {
        //使用convertAndSend方法一步到位，参数基本和之前是一样的
        //最后一个消息本体可以是Object类型，真是大大的方便
        Object res = template.convertSendAndReceive("amq.direct", "my-yyds1", "Hello World!");
        System.out.println(res);
    }

}