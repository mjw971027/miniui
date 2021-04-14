package com.example.miniui.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService myUserDetailsService;
    @Autowired
    private AuthenticationProvider provider;  //注入我们自己的AuthenticationProvider
    @Autowired
    private MyAuthenticationSucessHandler myAuthenticationSuccessHandler;
    @Autowired
    private MyAuthenticationFailureHandler myAuthenticationFailHander;
    @Autowired
    private MyLogOutSuccessHandler myLogOutSuccessHandler;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // TODO Auto-generated method stub
        //super.configure(http);
        http
                .formLogin().loginPage("/loginPage").loginProcessingUrl("/form")
                .successHandler(myAuthenticationSuccessHandler)
                .failureHandler(myAuthenticationFailHander)
                .permitAll()  //表单登录，permitAll()表示这个不需要验证 登录页面，登录失败页面
                .and()
                .csrf().disable();
        http
                .authorizeRequests()
                .antMatchers("/static/**", "/error404").permitAll()
                .antMatchers("/user/**").permitAll()
                .antMatchers("/druid**", "/swagger-ui.html").hasAuthority("vip1")
                //其他接口需要登录后才能访问
                .anyRequest().authenticated()
                .and();
        http
                .logout()
                .logoutUrl("/logout")
                .logoutSuccessHandler(myLogOutSuccessHandler)
                .deleteCookies("JSESSIONID")
                .and();

    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(provider);
    }

    //    @Override
//    public void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth
//                //用户认证处理
//                .userDetailsService(myUserDetailsService)
//                //密码处理
//                .passwordEncoder(passwordEncoder());
//    }
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//                // 关闭csrf防护
//                .csrf().disable()
//                .headers().frameOptions().disable()
//                .and();
//        http
//                //登录处理
//                .formLogin() //表单方式，或httpBasic
//                .loginPage("/loginPage")
//                .loginProcessingUrl("/form")
//                .defaultSuccessUrl("/index") //成功登陆后跳转页面
//                .failureUrl("/loginError")
//                .permitAll()
//                .and();
//        http
//                .authorizeRequests() // 授权配置
//                //无需权限访问
//                .antMatchers( "/static/**", "/error404").permitAll()
//                .antMatchers("/user/**").permitAll()
//                .antMatchers("/swagger-ui.html").hasAuthority("vip1")
//                //其他接口需要登录后才能访问
//                .anyRequest().authenticated()
//                .and();
//    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
