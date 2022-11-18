package com.example.miniui.rabbitmq;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component  //注册为Bean
public class TestListener {
    private final static Logger logger = LoggerFactory.getLogger(TestListener.class);

    @RabbitListener(queues = "yyds1", messageConverter = "jacksonConverter")   //定义此方法为队列yyds的监听器，一旦监听到新的消息，就会接受并处理
    public void test(User1 message) {
        logger.info(message.toString());
//        return new String(message);
    }
}