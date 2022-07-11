package com.example.miniui;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

import java.io.FileOutputStream;
import java.io.IOException;

public class pdftest1 {
    public static final String path="src/main/resources/hello.pdf";


    public static void main(String[] args) throws DocumentException, IOException {
        new pdftest1().createPdf(path);
    }

    public void createPdf(String filename) throws DocumentException, IOException {
        Rectangle pagesize=new Rectangle(PageSize.A4);


        Document document=new Document(PageSize.LETTER);
        PdfWriter.getInstance(document,new FileOutputStream(filename));

        float topPoint=document.getPageSize().getTop();
        float bottomPoint=document.getPageSize().getBottom();
        float leftPoint=document.getPageSize().getLeft();
        float rightPoint=document.getPageSize().getRight();
        float width=document.getPageSize().getWidth();
        float height=document.getPageSize().getHeight();


        document.open();
        Image image=Image.getInstance("src/main/resources/static/img/sws.png");
        image.setAbsolutePosition(width/2-100,height-70);
        image.scaleAbsolute(width-400,70);
//        document.addAuthor("mjw");
//        document.addCreationDate();
//        document.addCreator("mjw");
//        document.addProducer();
//        document.addTitle("TEST");
//        document.addSubject("主题");
        document.add(image);


        document.add(new Paragraph(" "));
        document.add(new Paragraph(" "));

        PdfPTable pdfPTable=getTable();
        document.add(pdfPTable);
        document.add(pdfPTable);
        document.add(pdfPTable);
        document.add(pdfPTable);
        document.add(pdfPTable);
        document.close();
    }

    public PdfPTable getTable() throws DocumentException, IOException {
        String[] str={"",""};
        PdfPTable pdfPTable=new PdfPTable(6);
        float[] columnWidths = { 1f, 2f, 1f, 2f,1f, 2f };
        pdfPTable.setWidths(columnWidths);
        pdfPTable.setWidthPercentage(100);
        pdfPTable.addCell(getCell("公司"+"\r\n"+"主体",1));
        pdfPTable.addCell(getCell("SWS",2));
        pdfPTable.addCell(getCell("审价会类别",1));
        pdfPTable.addCell(getCell("",2));
        pdfPTable.addCell(getCell("公司主体",1));
        pdfPTable.addCell(getCell("swscss",5));
        pdfPTable.addCell(getCell("公司主体",1));
        pdfPTable.addCell(getCell("swscss",5));
        pdfPTable.addCell(getCell("公司主体",1));
        pdfPTable.addCell(getCell1("1.优(90～100分);良(70~90分);中(50~70分);差（50分以下）。\n" +
                "2.主要技术参数：对产品的性能、技术参数进行定义，满足规范要求。\n" +
                "3.供货范围：供货范围适宜，评分优或良；系统各项目责任不清晰，供货范围过小，评分中或差；系统集成打包，可选供应商极少，成本难以下降，供货范围过大，评分中或差。\n" +
                "4.产品质量及服务配合：未发生产品质量问题，配合解决问题，评分优；一年内发生小型质量问题\n" +
                "5.主要业绩：已在公司提供超\n" +
                "6.打包拆包采购：分析综合咸本，对供应商的打包拆包方案进行论证。通过打包拆包模式节约成本，评分优；对公司推进打包拆包采购不配合供应商，评分差。\n" +
                "7.图纸证书及设备资料：设备资料在评标时提供，评分优，并额外进行加分\n" +
                "8.使用标准及质量体系：质量体系、质量规范等满足国际公约等。",5));

        return pdfPTable;
    }

    public PdfPCell getCell(String name,int n) throws DocumentException, IOException {
        BaseFont bfChinese = BaseFont.createFont("STSong-Light", "UniGB-UCS2-H", BaseFont.NOT_EMBEDDED);
        Font fontChinese = new Font(bfChinese, 12, Font.NORMAL);
        PdfPCell pdfPCell=new PdfPCell();
        pdfPCell.setHorizontalAlignment(Element.ALIGN_LEFT);
        pdfPCell.setCalculatedHeight(25);
        pdfPCell.setColspan(n);
        Paragraph paragraph=new Paragraph(name,fontChinese);
        pdfPCell.addElement(paragraph);
        return pdfPCell;
    }

    public PdfPCell getCell1(String name,int n) throws DocumentException, IOException {
        BaseFont bfChinese = BaseFont.createFont("STSong-Light", "UniGB-UCS2-H", BaseFont.NOT_EMBEDDED);
        Font fontChinese = new Font(bfChinese, 12, Font.NORMAL);
        PdfPCell pdfPCell=new PdfPCell();
        pdfPCell.disableBorderSide(3);
        pdfPCell.setHorizontalAlignment(Element.ALIGN_LEFT);
        pdfPCell.setCalculatedHeight(25);
        pdfPCell.setColspan(n);
        Paragraph paragraph=new Paragraph(name,fontChinese);
        pdfPCell.addElement(paragraph);
        return pdfPCell;
    }

}
