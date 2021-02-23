package com.example.miniui.untils;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;


public class HtmlParseUntils {

    public  List<Content> getJDRsearch(String url)
    {
        Document document= null;
        try {
            document = Jsoup.parse(new URL(url),30000);
        } catch (IOException e) {
            e.printStackTrace();
        }
        Element element=document.getElementById("J_goodsList");
        ArrayList<Content> list=new ArrayList<Content>();
        Elements elements=element.getElementsByTag("li");
        for (Element el:elements)
        {
            String img=el.getElementsByTag("img").attr("data-lazy-img");
            String price=el.getElementsByClass("p-price").text();
            String name=el.getElementsByClass("p-name p-name-type-2").text();
            Content content=new Content();
            content.setImg(img);
            content.setTitle(name);
            content.setPrice(price);
            list.add(content);
        }
        Logger logger= LoggerFactory.getLogger(HtmlParseUntils.class);
        logger.info("完成一次爬取。");
        return list;
    }


}
