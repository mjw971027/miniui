package com.example.miniui.untils;

import com.example.miniui.entity.Content;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.net.URL;
import java.util.ArrayList;
import java.util.List;

@Component
public class HtmlParseUtils {

    public List<Content> getJDRsearch(String url) {
        Document document = null;
        Element element = null;
        ArrayList<Content> list = new ArrayList<Content>();
        try {
            document = Jsoup.parse(new URL(url), 30000);
            element = document.getElementById("J_goodsList");
            Elements elements = element.getElementsByTag("li");
            for (Element el : elements) {
                String goodUrl = el.getElementsByTag("a").eq(0).attr("href");
                String img = el.getElementsByTag("img").attr("data-lazy-img");
                String price = el.getElementsByClass("p-price").text();
                String name = el.getElementsByClass("p-name p-name-type-2").text();
                Content content = new Content();
                content.setImg(img);
                content.setGoodUrl(goodUrl);
                content.setTitle(name);
                content.setPrice(price);
                list.add(content);
            }
            Logger logger = LoggerFactory.getLogger(HtmlParseUtils.class);
            logger.info("完成一次爬取。");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}
