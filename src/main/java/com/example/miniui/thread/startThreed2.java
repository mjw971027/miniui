package com.example.miniui.thread;

import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.net.URL;

public class startThreed2 extends Thread {
    private String url;
    private String name;

    public startThreed2(String name, String url) {
        this.url = url;
        this.name = name;
    }

    @Override
    public void run() {
        WebDownloader webDownloader = new WebDownloader();
        webDownloader.downloader(url, name);
        System.out.println("下载文件名为" + name);
    }

    public static void main(String[] args) {
        startThreed2 startThreed = new startThreed2("ss", "ss");
    }
}

class WebDownloader {
    public void downloader(String url, String name) {
        try {
            FileUtils.copyURLToFile(new URL(url), new File(name));
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println(e);
        }
    }
}