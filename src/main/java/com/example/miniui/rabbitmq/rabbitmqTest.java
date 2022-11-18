package com.example.miniui.rabbitmq;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.impl.ChannelN;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class rabbitmqTest {
    public static void main(String[] args) {
        ConnectionFactory connectionFactory = new ConnectionFactory();
        connectionFactory.setHost("192.168.8.105");
        connectionFactory.setPort(5672);
        connectionFactory.setUsername("admin");
        connectionFactory.setPassword("admin");
        connectionFactory.setVirtualHost("/test");

        try (Connection connection = connectionFactory.newConnection()) {
            Channel channel = connection.createChannel();
//            声明消息队列
            channel.queueDeclare("yyds1", true, false, false, null);

            channel.queueBind("yyds1", "amq.direct", "my-yyds");

            channel.basicPublish("amq.direct", "my-yyds", null, "hhhhasdafdeoj asd ".getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (TimeoutException e) {
            throw new RuntimeException(e);
        }
    }
}
