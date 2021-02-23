package com.example.miniui.controller;

import com.example.miniui.untils.Content;
import com.example.miniui.untils.HtmlParseUntils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JsoupController {
    @GetMapping(value = "/GetJdResourse")
    public List getJdResourse(String url)
    {
        HtmlParseUntils htmlParseUntils=new HtmlParseUntils();
        List<Content> list=htmlParseUntils.getJDRsearch(url);
        return list;
    }
}
