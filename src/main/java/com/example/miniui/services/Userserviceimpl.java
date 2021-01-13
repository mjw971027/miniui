package com.example.miniui.services;



import com.example.miniui.dao.UserMapper;
import com.example.miniui.entity.User;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class Userserviceimpl implements Userservice{
@Autowired
UserMapper userMapper;

    @Override
    public List<User> qurryall(String searchname) {
        List<User> list=userMapper.selectAll(searchname);
        return list;
    }

    @Override
    public Map save(List<User> users) {
        Map map=new HashMap();
        map.put("flag",0);
        String id;
        for (User user:users)
        {
            if (userMapper.checkid(user.getId())>0)
            {
                map.put("msg","REPEATING");
                userMapper.updateByPrimaryKey(user);
                Logger logger= LoggerFactory.getLogger(Userserviceimpl.class);
                logger.info(user.getName()+"修改");
                map.put("flag",1);
                return map;
            }
            if (userMapper.checkname(user)>0)
            {
                map.put("msg","REPEATING NAME");
                map.put("flag",2);
                return map;
            }
            Logger logger= LoggerFactory.getLogger(Userserviceimpl.class);
            logger.info(user.getName()+"增加");
            map.put("flag",1);
            userMapper.insert(user);
        }
        return map;
    }

    @Override
    public Map deletebyid(List<Integer> integers) {
        Map map=new HashMap();
        map.put("flag",0);
        String id;
        for (int int1:integers)
        {
            if (userMapper.checkid(int1)>0)
            {
                userMapper.deleteByPrimaryKey(int1);
                Logger logger=LoggerFactory.getLogger(Userserviceimpl.class);
                logger.info("删除成功id为"+int1);
                map.put("flag",1);
            }
            else {
                Logger logger=LoggerFactory.getLogger(Userserviceimpl.class);
                logger.info("本就不存在，无法删除");
            }
        }
        return map;
    }
}
