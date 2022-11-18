package com.example.miniui.rabbitmq;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.spi.LoggerFactoryBinder;

import java.io.IOException;
import java.util.Random;
import java.util.concurrent.TimeoutException;

public class rabbitTest2 {
    private final static Logger logger = LoggerFactory.getLogger(rabbitTest2.class);

    public static void main(String[] args) {
        testPublish();
    }

    public static void testPublish() {
        ConnectionFactory connectionFactory = new ConnectionFactory();

        connectionFactory.setHost("192.168.8.105");
        connectionFactory.setPort(5672);
        connectionFactory.setUsername("admin");
        connectionFactory.setPassword("admin");
        connectionFactory.setVirtualHost("/test");

        try (Connection connection = connectionFactory.newConnection()) {
            Channel channel = connection.createChannel();
            for (int i = 0; i < 999999; i++) {
                String res = "test" + String.valueOf(new Random().nextInt(10000000));
                channel.basicPublish("amq.direct", "my-yyds", null, res.getBytes());
                logger.info(res);
//                                Thread.sleep(20);
            }

        } catch (IOException e) {

            throw new RuntimeException(e);
        } catch (TimeoutException e) {
            throw new RuntimeException(e);
        }
    }
}
