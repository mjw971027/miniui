package com.example.miniui.entity;

public class Content {
    String title;
    String price;
    String img;
    String goodUrl;

    public String getGoodUrl() {
        return goodUrl;
    }

    public void setGoodUrl(String goodUrl) {
        this.goodUrl = goodUrl;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    @Override
    public String toString() {
        return "Content{" +
                "title='" + title + '\'' +
                ", price='" + price + '\'' +
                ", img='" + img + '\'' +
                ", goodUrl='" + goodUrl + '\'' +
                '}';
    }
}
