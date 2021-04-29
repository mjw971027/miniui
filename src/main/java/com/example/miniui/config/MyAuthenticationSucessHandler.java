package com.example.miniui.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.security.web.savedrequest.SavedRequest;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Component
public class MyAuthenticationSucessHandler implements AuthenticationSuccessHandler {
    private RequestCache requestCache = new HttpSessionRequestCache();
    private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();
    Logger logger = LoggerFactory.getLogger(MyAuthenticationSucessHandler.class);
    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {

        //response.setContentType("application/json;charset=utf-8");
        //response.getWriter().write(objectMapper.writeValueAsString(authentication));
        SavedRequest savedRequest = requestCache.getRequest(request, response);
        logger.info(authentication.getName() + "上线");
        if (savedRequest == null) {
            redirectStrategy.sendRedirect(request, response, "/index");
            response.getWriter().write("登录成功");
        } else {
            logger.info("直接转入网址：" + "" +
//                            "/index"
                            savedRequest.getRedirectUrl()
            );
            redirectStrategy.sendRedirect(request, response,
//                    "/index"
                    savedRequest.getRedirectUrl()
            );
        }

    }
}