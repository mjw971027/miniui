package com.example.miniui.config;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;


@Aspect
@Component
public class AopConfig {
    private Logger logger = LoggerFactory.getLogger(AopConfig.class);

    @Pointcut("execution( * com.example.miniui.controller.*.*(..) )")
    public void myPointcut() {

    }

    @Around("myPointcut()")
    public Object applicationAroud(ProceedingJoinPoint point) throws Throwable {
        String menthodsName = point.getSignature().getName();
        String classNmae = point.getTarget().getClass().getName();
        ObjectMapper m = new ObjectMapper();
        Object[] args = point.getArgs();
        if (Objects.nonNull(args)) {
            List<Object> argsList = Arrays.asList(args);
            // 将 HttpServletResponse 和 HttpServletRequest 参数移除，不然会报异常
            List<Object> collect = argsList.stream().filter(o -> !(o instanceof HttpServletResponse || o instanceof HttpServletRequest)).collect(Collectors.toList());
            collect.toArray(args);
        }
        logger.info("调用前：" + classNmae + "方法名:" + menthodsName + "args=" + m.writeValueAsString(args));
        Object obj = point.proceed();
        logger.info("调用后：" + classNmae + "方法名:" + menthodsName + "args=" + m.writeValueAsString(args));
        return obj;
    }
}
