package com.example.miniui.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * @author MrBird
 */
@Component
public class MyLogOutSuccessHandler implements LogoutSuccessHandler {
    private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();
    Logger logger = LoggerFactory.getLogger(MyLogOutSuccessHandler.class);

    @Override
    public void onLogoutSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {
        httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
        httpServletResponse.setContentType("application/json;charset=utf-8");
        httpServletResponse.getWriter().write("下线成功");
        logger.info("状态码：" + HttpStatus.UNAUTHORIZED.value() + "|||||" + authentication.getName() + "下线");
        redirectStrategy.sendRedirect(httpServletRequest, httpServletResponse, "/logOutPage");
    }

}
