

import com.example.miniui.utils.iTextPDFUtil;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

import java.io.FileOutputStream;

/**
 * @program: pdfdemo
 * @ClassName CreatePDFMainTest
 * @description:
 * @author:蒋皓洁
 * @create: 2022-04-02 11:29
 * @Version 1.0
 **/
public class CreatePDFMainTest3 {
    public static void main(String[] args) throws Exception {
        Document document = new Document(PageSize.A4);
        //第二步，创建Writer实例
        PdfWriter.getInstance(document, new FileOutputStream("hello.pdf"));
        //创建中文字体
        BaseFont bfchinese = BaseFont.createFont("STSong-Light", "UniGB-UCS2-H", BaseFont.NOT_EMBEDDED);
        Font fontChinese = new Font(bfchinese, 12, Font.NORMAL);
        //第三步，打开文档
        document.open();
        //第四步，写入内容
//创建一列的格子
        PdfPTable goodTable = new PdfPTable(6);

        goodTable.setWidthPercentage(100);
        PdfPCell cell;

        cell = new PdfPCell(new Phrase("格子内容", iTextPDFUtil.getColorFont()));
//格子横跨2个格子
        cell.setColspan(6);
//格子高度35px
        cell.setMinimumHeight(35);
//格子纵跨1个格子
        cell.setRowspan(1);
//格子内容左右居中
        cell.setHorizontalAlignment(Element.ALIGN_CENTER);
//格子内容上下居中
        cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
        goodTable.addCell(cell);


        PdfPCell cell2 = new PdfPCell(new Phrase("测试左边", iTextPDFUtil.getColorFont()));
//格子横跨2个格子
        cell2.setColspan(3);
//格子高度35px
        cell2.setMinimumHeight(35);
//格子纵跨1个格子
        cell2.setRowspan(2);
//格子内容左右居中
        cell2.setHorizontalAlignment(Element.ALIGN_CENTER);
//格子内容上下居中
        cell2.setVerticalAlignment(Element.ALIGN_MIDDLE);
        goodTable.addCell(cell2);
        PdfPCell cell3 = new PdfPCell(new Phrase("测试右上", iTextPDFUtil.getColorFont()));
//格子横跨2个格子
        cell3.setColspan(3);
//格子高度35px
        cell3.setMinimumHeight(35);
//格子纵跨1个格子
        cell3.setRowspan(1);
//格子内容左右居中
        cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
//格子内容上下居中
        cell3.setVerticalAlignment(Element.ALIGN_MIDDLE);
        goodTable.addCell(cell3);
        PdfPCell cell4 = new PdfPCell(new Phrase("测试右下", iTextPDFUtil.getColorFont()));
//格子横跨2个格子
        cell4.setColspan(3);
//格子高度35px
        cell4.setMinimumHeight(35);
//格子纵跨1个格子
        cell4.setRowspan(1);
//格子内容左右居中
        cell4.setHorizontalAlignment(Element.ALIGN_CENTER);
//格子内容上下居中
        cell4.setVerticalAlignment(Element.ALIGN_MIDDLE);
        goodTable.addCell(cell4);



        PdfPCell cell5 = new PdfPCell(new Phrase("内嵌表格展示", iTextPDFUtil.getColorFont()));
//格子横跨2个格子
        cell5.setColspan(2);
//格子高度35px
        cell5.setMinimumHeight(35);
//格子纵跨1个格子
        cell5.setRowspan(1);
//格子内容左右居中
        cell5.setHorizontalAlignment(Element.ALIGN_CENTER);
//格子内容上下居中
        cell5.setVerticalAlignment(Element.ALIGN_MIDDLE);
        goodTable.addCell(cell5);

        PdfPTable goodTable2 = new PdfPTable(3);
        PdfPCell cell6 = new PdfPCell(new Phrase("内嵌表格抬头一", iTextPDFUtil.getColorFont()));
//格子横跨2个格子
        cell6.setColspan(1);
//格子高度35px
        cell6.setMinimumHeight(35);
//格子纵跨1个格子
        cell6.setRowspan(1);
//格子内容左右居中
        cell6.setHorizontalAlignment(Element.ALIGN_CENTER);
//格子内容上下居中
        cell6.setVerticalAlignment(Element.ALIGN_MIDDLE);
        goodTable2.addCell(cell6);

        PdfPCell cell7 = new PdfPCell(new Phrase("内嵌表格抬头二", iTextPDFUtil.getColorFont()));
//格子横跨2个格子
        cell7.setColspan(2);
//格子高度35px
        cell7.setMinimumHeight(35);
//格子纵跨1个格子
        cell7.setRowspan(1);
//格子内容左右居中
        cell7.setHorizontalAlignment(Element.ALIGN_CENTER);
//格子内容上下居中
        cell7.setVerticalAlignment(Element.ALIGN_MIDDLE);

        goodTable2.addCell(cell7);

        PdfPCell cell8 = new PdfPCell(new Phrase("内嵌表格抬头三", iTextPDFUtil.getColorFont()));
//格子横跨2个格子
        cell8.setColspan(3);
//格子高度35px
        cell8.setMinimumHeight(35);
//格子纵跨1个格子
        cell8.setRowspan(1);
//格子内容左右居中
        cell8.setHorizontalAlignment(Element.ALIGN_CENTER);
//格子内容上下居中
        cell8.setVerticalAlignment(Element.ALIGN_MIDDLE);

        goodTable2.addCell(cell8);



        PdfPCell cell33 = new PdfPCell(goodTable2);

        cell33.setColspan(4);

        cell33.setBorderWidth(1);//设置表格的边框宽度为1

        cell33.setPadding(7);//设置表格与上一个表格的填充为10

        goodTable.addCell(cell33);
        document.add(goodTable);
        //第五步，关闭文档
        document.close();
    }

}