package com.example.miniui.controller;


import com.example.miniui.entity.User;
import com.example.miniui.services.Userservice;
import com.example.miniui.services.Userserviceimpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AnonymousAuthenticationFilter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
//这个用于页面跳转这个是用thymeleaf
@Controller
//可以直接跳转
public class Intentontroller {
    Logger logger = LoggerFactory.getLogger(Intentontroller.class);

    @RequestMapping(value = "/index")
    //get到url中得index
    public String index() {
        String str = "user";
        return str;
// 返回给thymeleaf一个user就是直接跳转到user.html
    }

    @RequestMapping("/loginPage")
    public String login(HttpServletResponse response) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication instanceof AnonymousAuthenticationToken) {
            return "lo_gin";
        } else {
            return "user";
        }
    }

    @RequestMapping("/errorPage")
    public String error() {
        return "errorPage";
    }

    @RequestMapping("/jsoup")
    public String jsoup() {
        return "jsoup";
    }

    @RequestMapping("/whoim")
    @ResponseBody
    public Object whoIm() {
        return SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    @RequestMapping(value = "/timeOut")
    public String sessionInvalid() {
        logger.info(SecurityContextHolder.getContext().getAuthentication().getName() + ":登录已过时");
        return "login_timeout";
    }

    @RequestMapping(value = "/logOutPage")
    public String logout() {
//        String name=SecurityContextHolder.getContext().getAuthentication().getName();
        return "logOut";
    }

    @RequestMapping(value = "/listbox")
    public String listbox() {
        return "innerlistbox";
    }

}
