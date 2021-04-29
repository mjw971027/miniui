package com.example.miniui.config;

import com.example.miniui.implement.Myuser;
import com.example.miniui.services.SysUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    private SysUserService userService;

    Logger logger = LoggerFactory.getLogger(MyUserDetailsService.class);

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //这里可以可以通过username（登录时输入的用户名）然后到数据库中找到对应的用户信息，并构建成我们自己的UserInfo来返回。
        com.example.miniui.entity.User sysUser = userService.findUserByName(username);
        logger.info("登录名是：" + username);
        if (sysUser == null) {
            return new Myuser();
        } else {
//            return new User(username,new BCryptPasswordEncoder().encode(sysUser.getPwd()),roles("ROLE_ADMIN"));
            return new User(username, new BCryptPasswordEncoder().encode(sysUser.getPwd()), AuthorityUtils.commaSeparatedStringToAuthorityList("vip1"));
        }
        //由于权限参数不能为空，所以这里先使用AuthorityUtils.commaSeparatedStringToAuthorityList方法模拟一个admin的权限，该方法可以将逗号分隔的字符串转换为权限集合。
//数据库中的密码是加密后的
    }

    private List<SimpleGrantedAuthority> roles(String authority) {
        List<SimpleGrantedAuthority> roles = new ArrayList<>();
        roles.add(new SimpleGrantedAuthority(authority));
        return roles;
    }
}
