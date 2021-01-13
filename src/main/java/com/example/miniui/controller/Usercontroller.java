package com.example.miniui.controller;

import com.alibaba.fastjson.JSON;
import com.example.miniui.entity.User;
import com.example.miniui.services.Userserviceimpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


//这个control用于user。
@RestController
//一般用于返回json
public class Usercontroller {
    @Autowired
// 自动注入userserviceimpl
    Userserviceimpl userserviceimpl;

    @ResponseBody
    @RequestMapping(value = "/user")
// 这个得意思就是返回一个值，当user.html返回一个url为/user时
    public List<User> getall(String searchname) {
        List<User> res = userserviceimpl.qurryall(searchname);
        return res;
// 返回一个list里面是user，miniui会自动处理这个list
    }


    @ResponseBody
    @RequestMapping(value = "/savedata")
    public Map update(String data) {
        Map map = new HashMap();
        List<User> users = JSON.parseArray(data, User.class);
        if (users.size() > 0) {
            map = userserviceimpl.save(users);
        }

        return map;
    }

    @ResponseBody
    @RequestMapping(value = "/delete")
    public Map deleteuser(String data)
    {
        Map map=new HashMap();
        List<Integer> userid =JSON.parseArray(data,Integer.class);
        if (userid.size()>0)
        {
            map =userserviceimpl.deletebyid(userid);
        }
        return map;
    }
}
