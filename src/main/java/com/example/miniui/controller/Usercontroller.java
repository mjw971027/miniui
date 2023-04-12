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
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLEncoder;
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

    @RequestMapping(value = "/userListBox1")
    public List<User> userListBox1(String name) {
        if (name == null) {
            name = "";
        }
        return userserviceimpl.qurryall(name);
    }

    @RequestMapping(value = "/userListBox2")
    public List<User> userListBox2() {
        return userserviceimpl.selectAll();
    }

    @RequestMapping(value = "/savalist")
    public Map savelist(String data) {
        Map map = new HashMap();
        List<User> users = JSON.parseArray(data, User.class);
        map = userserviceimpl.savelist(users);
        return map;
    }

    @RequestMapping("/download")
    public void downloadFile(HttpServletResponse response) {
        try {
            InputStream inputStream = this.getClass().getResourceAsStream("/data/五小成果.docx");
            //强制下载不打开
            response.setContentType("application/force-download");
            OutputStream out = response.getOutputStream();
            //使用URLEncoder来防止文件名乱码或者读取错误
            response.setHeader("Content-Disposition", "attachment; filename=" + URLEncoder.encode("wuxiao.docx", "UTF-8"));
            int b = 0;
            byte[] buffer = new byte[1000000];
            while (b != -1) {
                b = inputStream.read(buffer);
                if (b != -1) {
                    out.write(buffer, 0, b);
                }
            }
            inputStream.close();
            out.close();
            out.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
