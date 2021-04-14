package com.example.miniui.controller;

import com.alibaba.fastjson.JSON;
import com.example.miniui.entity.User;
import com.example.miniui.services.Userserviceimpl;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Api(tags = "mjw")
//这个control用于user
@RestController
//一般用于返回json
public class Usercontroller {
    @Autowired
//自动注入userserviceimpl
    Userserviceimpl userserviceimpl;

    Logger logger = LoggerFactory.getLogger(Usercontroller.class);


    @RequestMapping(value = "/user")
//这个得意思就是返回一个值，当user.html返回一个url为/user时
    public List<User> getall(String searchname) {
        if (searchname == null) {
            searchname = "";
        }
        return userserviceimpl.qurryall(searchname);
//返回一个list里面是user，miniui会自动处理这个list
    }

    @RequestMapping(value = "/userlist")
    public PageInfo<HashMap> getuserlist(@RequestParam(value = "pageIndex", defaultValue = "0") Integer pageNum,
                                         @RequestParam(value = "pageSize", defaultValue = "10") Integer pageSize,
                                         String searchname) {
        PageInfo<HashMap> page = new PageInfo<>(userserviceimpl.getuserlist(pageNum, pageSize, searchname));
        return page;

    }
//    @RequestMapping(value = "/userlist")
//    public PageInfo<HashMap> getuserlist1(HttpServletRequest request,
//                                          String searchname) {
//        PageInfo<HashMap> page = new PageInfo<>(userserviceimpl.getuserlist1(searchname,request));
//        return page;
//
//    }


    @PostMapping(value = "/savedata")
    public Map update(String data) {
        Map map = new HashMap();
        List<User> users = JSON.parseArray(data, User.class);
        if (users.size() > 0) {
            map = userserviceimpl.save(users);
        }

        return map;
    }


    @PostMapping(value = "/delete")
    public Map deleteuser(String data) {
        Map map = new HashMap();
        List<Integer> userid = JSON.parseArray(data, Integer.class);
        if (userid.size() > 0) {
            map = userserviceimpl.deletebyid(userid);
        }
        return map;
    }


    @RequestMapping(value = "/getNTitle")
    public List<Map> selectNTitle(int id) {
        return userserviceimpl.selectNTitle(id);
    }

    @RequestMapping("/hello")
    public String index1() {
        return "Hello World";
    }
}
