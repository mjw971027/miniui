package com.example.miniui.controller;

import com.example.miniui.entity.Content;
import com.example.miniui.utils.HtmlParseUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class JsoupController {
    @RequestMapping(value = "/GetJdResourse")
    public List getJdResourse(String url) {
        HtmlParseUtils htmlParseUntils = new HtmlParseUtils();
        List<Content> list = htmlParseUntils.getJDRsearch(url);
        return list;
    }

    @RequestMapping(value = "/GetJdResourse1")
    public List getJdResourse1(String url) {
        HtmlParseUtils htmlParseUntils = new HtmlParseUtils();
        List<Content> list = new ArrayList<>();
        for (int i = 1; i < 11; i++) {
            String urlreal = url + "&page=" + i;
            List<Content> list1 = htmlParseUntils.getJDRsearch(urlreal);
            list.addAll(list1);
        }
        return list;
    }
}
