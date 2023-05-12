package com.example.miniui.Filter;

import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Invocation;

import java.util.Properties;

public class MybatisInterceptor implements Interceptor {
    @Override
    public Object intercept(Invocation invocation) throws Throwable {
        // 在执行数据库操作之前执行的逻辑
        // 记录操作日志等

        // 执行原始的数据库操作
        Object result = invocation.proceed();

        // 在执行数据库操作之后执行的逻辑
        // 记录操作日志等

        return result;
    }

    @Override
    public Object plugin(Object target) {
        return Interceptor.super.plugin(target);
    }

    @Override
    public void setProperties(Properties properties) {
        Interceptor.super.setProperties(properties);
    }
}
