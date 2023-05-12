package com.example.miniui.config;

import com.example.miniui.Filter.MybatisInterceptor;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
@MapperScan("com.example.mapper")
public class MyBatisConfig {
    @Bean
    public MybatisInterceptor loggingInterceptor() {
        return new MybatisInterceptor();
    }

    @Bean
    public SqlSessionFactory sqlSessionFactory(DataSource dataSource, MybatisInterceptor loggingInterceptor) throws Exception {
        SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource);

        // 设置拦截器
        sessionFactory.setPlugins(new Interceptor[]{loggingInterceptor});

        // 其他配置...

        return sessionFactory.getObject();
    }
}

