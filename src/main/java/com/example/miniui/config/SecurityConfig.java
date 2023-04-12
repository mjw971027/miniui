package com.example.miniui.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService myUserDetailsService;//调用判断是否匹配数据集
    @Autowired
    private MyAuthenticationProvider authenticationProvider;  //自定义的安全认证
    @Autowired
    private MyAuthenticationSucessHandler myAuthenticationSuccessHandler;//登陆成功返的处理
    @Autowired
    private MyAuthenticationFailureHandler myAuthenticationFailHander;//登陆失败时的处理
    @Autowired
    private MyLogOutSuccessHandler myLogOutSuccessHandler;//下线处理
    @Autowired
    private AccessDeniedHandler myAuthenticationAccessDeniedHandler;

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/download/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // TODO Auto-generated method stub

        //super.configure(http);
        http//登录部分
                .formLogin().loginPage("/loginPage").loginProcessingUrl("/form")
                .successHandler(myAuthenticationSuccessHandler)//登陆成功的处理
                .failureHandler(myAuthenticationFailHander)//登录失败的处理
                .permitAll()  //表单登录，permitAll()表示这个不需要验证
                .and()
                .csrf().disable();//Cross-site request forgery 这个功能防止跨站攻击，没有配置，关闭
        http//权限设置
                .authorizeRequests()
                .antMatchers("/static/**", "/errorPage", "/timeOut", "/logOutPage", "/data/**").permitAll()//不需要登录就可以访问
//                .antMatchers("/druid**", "/swagger-ui.html").hasRole("ADMIN")//需要权限才能访问的网页
                .antMatchers("/druid**", "/swagger-ui.html").hasAuthority("vip1")//需要权限才能访问的网页
                .anyRequest().permitAll() //其他接口需要登录后才能访问
                .and();
        http//登出部分
                .logout()
                .logoutSuccessHandler(myLogOutSuccessHandler)
                .deleteCookies("JSESSIONID")
                .and();
        http//会话过时部分
                .sessionManagement()
                .invalidSessionUrl("/timeOut");
        http//权限没有的情况下处理
                .exceptionHandling()
                .accessDeniedHandler(myAuthenticationAccessDeniedHandler)
                .and();
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin("*");
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.addAllowedMethod("*");
        corsConfiguration.setAllowCredentials(true);

        source.registerCorsConfiguration("/**", corsConfiguration);
        return new CorsFilter(source);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authenticationProvider);
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
