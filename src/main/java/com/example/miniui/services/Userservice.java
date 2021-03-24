package com.example.miniui.services;

import com.example.miniui.dao.UserMapper;
import com.example.miniui.entity.User;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import com.github.pagehelper.Page;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public interface Userservice {
    public List<User> qurryall(String name);
    public Map save(List<User> users);
    public Map deletebyid(List<Integer> ints);
    public List<Map> selectNTitle(int id);
    public Page<HashMap> getuserlist(Integer pageSize, Integer pageNum, String searchname);
}
