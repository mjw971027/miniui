package com.example.miniui.controller;

import com.example.miniui.entity.Content;
import com.example.miniui.untils.HtmlParseUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JsoupController {
    @GetMapping(value = "/GetJdResourse")
    public List getJdResourse(String url) {
        HtmlParseUtils htmlParseUntils = new HtmlParseUtils();
        List<Content> list = htmlParseUntils.getJDRsearch(url);
        return list;
    }
}
