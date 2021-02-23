package com.example.miniui.controller;

import io.swagger.annotations.Api;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;
@Api(tags = "mjw2")
@RestController
public class CookieController {
    @GetMapping(value = "SetCookies")
    public String SetCookie(HttpServletResponse response) {
        Cookie cookie = new Cookie("sessionId", "CookieInfo");
        response.addCookie(cookie);
        return "Add Cookie success!";
    }

//    @DeleteMapping(value = "DeleteCookies")
//    public Map DeleteCookies( @CookieValue("sessionId") String CookieName)
//    {
//        Map map=new HashMap();
//        map.put("flag",0);
//        Cookie cookie = new Cookie("sessionId", "CookieInfo");
//        cookie.setMaxAge(0);
//        map.put("flag",1);
//        return map;
//    }

    @GetMapping(value = "GetCookies")
    public String getCookies(HttpServletRequest request) {
        //HttpServletRequest 装请求信息类
        //HttpServletRespionse 装相应信息的类
        //   Cookie cookie=new Cookie("sessionId","CookieTestInfo");
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("sessionId")) {
                    return "Get Cookie success:"+cookie.getValue();
                }
            }
        }
        return null;
    }

    @GetMapping("/testCookieValue")
    public Map testCookieValue(@CookieValue("sessionId") String sessionId ) {
        Map map=new HashMap();
        map.put("flag",0);
//前提是已经创建了或者已经存在cookie了，那么下面这个就直接把对应的key值拿出来了。
        System.out.println("testCookieValue,sessionId="+sessionId);
        map.put("flag",1);
        map.put("msg",sessionId);
        return map;
    }
}
