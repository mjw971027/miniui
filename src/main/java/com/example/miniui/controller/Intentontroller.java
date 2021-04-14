package com.example.miniui.controller;


import com.example.miniui.entity.User;
import com.example.miniui.services.Userservice;
import com.example.miniui.services.Userserviceimpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
//这个用于页面跳转这个是用thymeleaf
@Controller
//可以直接跳转
public class Intentontroller {

    @RequestMapping(value = "/index")
    //get到url中得index
    public String index() {
        String str = "user";
        return str;
// 返回给thymeleaf一个user就是直接跳转到user.html
    }

    @RequestMapping("/loginPage")
    public String login() {
        return "lo_gin";
    }

    @RequestMapping("error")
    public String error() {
        return "error";
    }

    @RequestMapping("/whoim")
    @ResponseBody
    public Object whoIm() {
        return SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }
}
