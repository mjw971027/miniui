package com.example.miniui;

import com.example.miniui.entity.Content;
import com.example.miniui.utils.ExcelUtils;
import com.example.miniui.utils.HtmlParseUtils;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.ClientAnchor;
import org.apache.poi.ss.util.CellRangeAddress;
import org.junit.platform.commons.util.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class ExcelTest {
    public static void main(String[] args) throws IOException {
        int tmp[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        int x = maxSubArray(tmp);
        System.out.println(x);
    }

    public static int maxSubArray(int[] nums) {
        int pre = 0, maxAns = nums[0];
        for (int x : nums) {
            pre = Math.max(pre + x, x);
            maxAns = Math.max(maxAns, pre);
        }
        return maxAns;
    }

    public static double myPow(double x, int n) {
        double sum = x;
        if (n > 0) {
            for (int i = 0; i < n - 1; i++) {
                sum = sum * x;
            }
        } else if (n == 0) {
            sum = 1.0;
        } else {
            for (int i = 0; i < -n - 1; i++) {
                sum = sum * x;
            }
            sum = 1 / sum;
        }
        return sum;
    }

    public void test1() throws IOException {
        //创建HSSFWorkbook对象(excel的文档对象)
        HSSFWorkbook wb = new HSSFWorkbook();
        //建立新的sheet对象（excel的表单）
        HSSFSheet sheet = wb.createSheet("成绩表");
        HSSFPatriarch patriarch = sheet.createDrawingPatriarch();
        //在sheet里创建第一行，参数为行索引(excel的行)，可以是0～65535之间的任何一个
        HSSFRow row1 = sheet.createRow(0);
        //创建单元格（excel的单元格，参数为列索引，可以是0～255之间的任何一个
        HSSFCell cell = row1.createCell(0);
        cell.setCellValue("京东爬虫表");
//合并单元格CellRangeAddress构造参数依次表示起始行，截至行，起始列， 截至列
        sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 3));
//在sheet里创建第二行
        HSSFRow row2 = sheet.createRow(1);
        //创建单元格并设置单元格内容
        row2.createCell(0).setCellValue("物品名字");
        row2.createCell(1).setCellValue("物品价格");
        row2.createCell(2).setCellValue("物品图片");
        row2.createCell(3).setCellValue("物品链接");
        System.out.println("需要的商品");
        BufferedReader buf = new BufferedReader(new InputStreamReader(System.in));
        String url = buf.readLine();
        HtmlParseUtils htmlParseUntils = new HtmlParseUtils();
        int j = 2;
        for (int i = 1; i < 51; i++) {
            String tag = "https://search.jd.com/Search?keyword=" + url + "&page=" + i;
            List<Content> list = htmlParseUntils.getJDRsearch(tag);
            for (Content content : list) {
                HSSFRow row = sheet.createRow(j);
                row.createCell(0).setCellValue(content.getTitle());
                row.createCell(1).setCellValue(content.getPrice());
                row.createCell(2).setCellValue(content.getImg());
//                drawPictureInfoExcel(wb,patriarch,j, content.getImg());
                row.createCell(3).setCellValue(content.getGoodUrl());
                j = j + 1;
            }
        }
        Logger logger = LoggerFactory.getLogger(ExcelUtils.class);
        logger.info("完成所有" + (j - 1) + "个商品的爬取");
        ExcelUtils excelUtils = new ExcelUtils();
        File file = new File("D:\\workspace\\京东表.xls");
        excelUtils.writeWorkbookToFile(wb,file);
    }
    private void drawPictureInfoExcel(HSSFWorkbook wb, HSSFPatriarch patriarch, int rowIndex, String pictureUrl)
    {
//rowIndex代表当前行
       try{
            if(StringUtils.isNotBlank(pictureUrl)) {
                URL url = new URL(pictureUrl);
                //打开链接
                HttpURLConnection conn = (HttpURLConnection)url.openConnection();
                //设置请求方式为"GET"
                conn.setRequestMethod("GET");
                //超时响应时间为5秒
                conn.setConnectTimeout(5 * 1000);
                //通过输入流获取图片数据
                InputStream inStream = conn.getInputStream();
                //得到图片的二进制数据，以二进制封装得到数据，具有通用性
                byte[] data = readInputStream(inStream);
                //anchor主要用于设置图片的属性
                HSSFClientAnchor anchor = new HSSFClientAnchor(0, 0, 1023, 250,(short) 2, rowIndex, (short) 2, rowIndex);
                //Sets the anchor type （图片在单元格的位置）
                //0 = Move and size with Cells, 2 = Move but don't size with cells, 3 = Don't move or size with cells.
                anchor.setAnchorType(ClientAnchor.AnchorType.byId(0));
                patriarch.createPicture(anchor, wb.addPicture(data, HSSFWorkbook.PICTURE_TYPE_JPEG));
            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    private static byte[] readInputStream(InputStream inStream) throws Exception{
        ByteArrayOutputStream outStream = new ByteArrayOutputStream();
        //创建一个Buffer字符串
        byte[] buffer = new byte[1024];
        //每次读取的字符串长度，如果为-1，代表全部读取完毕
        int len = 0;
        //使用一个输入流从buffer里把数据读取出来
        while( (len=inStream.read(buffer)) != -1 ){
            //用输出流往buffer里写入数据，中间参数代表从哪个位置开始读，len代表读取的长度
            outStream.write(buffer, 0, len);
        }
        //关闭输入流
        inStream.close();
        //把outStream里的数据写入内存
        return outStream.toByteArray();
    }
}
