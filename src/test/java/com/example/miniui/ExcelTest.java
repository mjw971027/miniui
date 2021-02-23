package com.example.miniui;

import com.example.miniui.untils.Content;
import com.example.miniui.untils.ExcelUtils;
import com.example.miniui.untils.HtmlParseUntils;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;
import java.util.Scanner;

@SpringBootTest
public class ExcelTest {
    public static void main(String[] args) throws IOException {
        ExcelTest excelTest=new ExcelTest();
        excelTest.test1();
    }
    public void test1() throws IOException {
        //创建HSSFWorkbook对象(excel的文档对象)
        HSSFWorkbook wb = new HSSFWorkbook();
        //建立新的sheet对象（excel的表单）
        HSSFSheet sheet = wb.createSheet("成绩表");
        //在sheet里创建第一行，参数为行索引(excel的行)，可以是0～65535之间的任何一个
        HSSFRow row1 = sheet.createRow(0);
        //创建单元格（excel的单元格，参数为列索引，可以是0～255之间的任何一个
        HSSFCell cell=row1.createCell(0);
        cell.setCellValue( "京东爬虫表" );
//合并单元格CellRangeAddress构造参数依次表示起始行，截至行，起始列， 截至列
        sheet.addMergedRegion( new CellRangeAddress( 0 , 0 , 0 , 3 ));
//在sheet里创建第二行
        HSSFRow row2=sheet.createRow( 1 );
        //创建单元格并设置单元格内容
        row2.createCell( 0 ).setCellValue( "物品名字" );
        row2.createCell( 1 ).setCellValue( "物品价格" );
        row2.createCell( 2 ).setCellValue( "物品图片" );
        System.out.println("输入网址");
        BufferedReader buf= new BufferedReader(new InputStreamReader(System.in));
        String url = buf.readLine();
        HtmlParseUntils htmlParseUntils=new HtmlParseUntils();
        int j=2;
        for (int i = 1; i <51; i++) {
            String tag=url+"&page="+i;
            List<Content> list=htmlParseUntils.getJDRsearch(tag);
            for (Content content:list)
            {
                HSSFRow row=sheet.createRow( j );
                row.createCell( 0 ).setCellValue( content.getTitle());
                row.createCell( 1 ).setCellValue( content.getPrice() );
                row.createCell( 2 ).setCellValue( content.getImg() );
                j=j+1;
            }
        }
        Logger logger= LoggerFactory.getLogger(ExcelUtils.class);
        logger.info("完成所有50页爬取");
        ExcelUtils excelUtils=new ExcelUtils();
        File file=new File("D:\\workspace\\京东表.xls");
        excelUtils.writeWorkbookToFile(wb,file);
    }
}
