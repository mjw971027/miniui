package com.example.miniui.services;
import com.example.miniui.dao.UserMapper;
import com.example.miniui.entity.User;
import com.example.miniui.untils.PageHelperUtil;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.Page;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class Userserviceimpl implements Userservice {
    @Autowired
    UserMapper userMapper;
    @Autowired
    CacheManager cacheManager;

    Logger logger = LoggerFactory.getLogger(Userserviceimpl.class);

    @Override
    public List<User> qurryall(String searchname) {
        List<User> list = userMapper.selectAll(searchname);
        return list;
    }

    @Override
    public Map save(List<User> users) {
        Map map = new HashMap();
        map.put("flag", 0);
        String error = "";
        Logger logger = LoggerFactory.getLogger(Userserviceimpl.class);
        for (User user : users) {
            if (userMapper.checkid(user.getId()) > 0 && userMapper.findExistIdexcptit(user.getId()) == 0) {
                map.put("msg", "REPEATING");
                userMapper.updateByPrimaryKey(user);
                logger.info(user.getName() + "修改");
            } else if (userMapper.findExistIdexcptit(user.getId()) > 0) {
                logger.info(user.getName() + "重复");
                error = error + user.getName() + ":name重复//";

            } else {
                logger.info(user.getName() + "增加");
                userMapper.insert(user);
            }
        }
        map.put("msg",error);
        return map;
    }
    @Override
    public Map deletebyid(List<Integer> integers) {
        Map map=new HashMap();
        map.put("flag",0);
        for (int int1:integers)
        {
            if (userMapper.checkid(int1)>0)
            {
                userMapper.deleteByPrimaryKey(int1);
                Logger logger=LoggerFactory.getLogger(Userserviceimpl.class);
                logger.info("删除成功id为"+int1);
                map.put("flag",1);
            } else {
                Logger logger=LoggerFactory.getLogger(Userserviceimpl.class);
                logger.info("本就不存在，无法删除");
            }
        }
        return map;
    }

    @Override
    public List<Map> selectNTitle(int id)
    {
        List<Map> map=userMapper.selectNTitle(id);
//        logger.info("cacheType"+cacheManager.getClass());
        return map;
    }

    @Override
    public Page<HashMap> getuserlist(Integer pageNum, Integer pageSize, String searchname) {
        if (pageNum != null & pageSize != null) {
            PageHelper.startPage(pageNum + 1, pageSize);
        }
        Page<HashMap> list = userMapper.selectAllByPage(searchname);
        return list;
    }
//    @Override
//    public Page<HashMap> getuserlist1(String searchname, HttpServletRequest request) {
//        Page<HashMap> list=new PageHelperUtil().getPageHelperList(searchname,request);
//    }
}