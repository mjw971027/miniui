# CSS标签

## CSS文件导入方式

### 行内样式

> 在标签元素中直接编写一个style属性，直接编写样式即可,如果一个网页代码过长，会造成网页臃肿，加载慢，一般不推荐使用。但在对已有网站的局部元素进行更改时可以使用这种方法

```html
<h1 style="color: blue">行内样式</h1>
```

### 内部样式

> 在当前 HTML页面创建一个style标签，在标签中选中需要更改样式的元素，编写样式

```html
   <style>
       h1{
           color: blueviolet;
       }	
    </style>
```

### 外部样式

> 单独创建一个CSS文件独立于HTML，通过link建立两者之间的连接使其生效
>
> rel表示当前文档和外部文档的关系，herf表示引用的外部文档的路径
>
> 这种方式可以使HTML文件尽可能地小，同时能够提高代码的复用性

```html
    <link rel="stylesheet" href="../CSS/style01.css">
```

### 优先级

> 遵循就近原则，行内样式优先级最高，其余的按照谁的语句距离要被更改样式的标签更近，就采用谁的样式

## 选择器

> 选择页面上的某个或某些元素，来定义他们的样式时会用到选择器

### 基本选择器

> 基本选择器不遵循就近原则，其使用的优先级为
>
> ID选择器>类选择器>标签选择器

#### 标签选择器

> 标签选择器会根据标签名，选择这个页面上的所有标签，将它们设置为相同的样式

```html
       h1{
           color: blueviolet;
       }
```

#### 类选择器

> 使用类选择器前会先为标签取类名，根据类名将一类标签设置为相同的样式

```html
<h1 class="style01">
</h1>


.style01{
	color: blue;
}
        
```

#### ID选择器

> ID选择器选择具有某个ID的标签，由于ID具有不可重复行，因此使用ID选择器只能进行单项选择

```html
<h1 id="about-dialog-button-bar">
    Demo
</h1>


 #about-dialog-button-bar{
 	color: black;
 }
```

### 高级选择器

> 基本选择器仍然有很多时候不能满足我们使用时的需求，这是就要使用高级选择器进行选择

#### 层次选择器

> 层次选择器是指将网页划分为一定的层次,根据这些层次来进行选择

```html 
<p>p1</p>


<p>p2</p>


<p>p3</p>


<ul>
    <li>
        <p>p4</p>
    </li>
    
    <li>
        <p>p5</p>
    </li>
    
    <li>
        <p>p6</p>
    </li>

</ul>
```

##### 后代选择器

> 后代选择器会选中某一个元素后面所有层级的所有某一标签，如下面的代码，会选中P1,P2,P3，P4,P5,P6

```html
body p{
	color: aqua;
 }
```

##### 子代选择器

> 自带选择器用法同后代选择器，但只会选择一个层级，如下面代码，会选中P1,P2,P3，而P4,P5,P6隔了层级不会被选中变色

```html
body>p{
	color: aqua;
}
```

##### 兄弟选择器

> 名为兄弟，实为弟弟选择器，通过类进行选择，会选择某一个类同级的下面的***一个***标签.
>
> 如下代码，执行完毕只有P3变色，由于P4,P5均与P2，P3不同级，因此不会被选择
>
> ***兄弟选择器只会选择同级的标签***

```html
<p>p1</p>


<p class="active">p2</p>


<p class="active">p3</p>


<ul>
    <li>
        <p class="active">p4</p>
    </li>

    <li>
        <p>p5</p>
    </li>

    <li>
        <p>p6</p>
    </li>

</ul>



.active+p{
	color: blue;
}


```

##### 通用兄弟选择器

> 也是一个弟弟选择器，但是会选择一个类后面的同级的所有兄弟,第一段代码执行后，依旧只有P3被选中变色
>
> 把P1设定为兄弟选择器的兄类，P2，P3都会变色

```html
.active~p{
	background: blue;
}




<p class="active">p1</p>


<p>p2</p>


<p >p3</p>


<ul>
    <li>
        <p >p4</p>
    </li>

    <li>
        <p class="active">p5</p>
    </li>

    <li>
        <p>p6</p>
    </li>

</ul>


```

#### 结构伪类选择器

> 使用类和ID选择器对元素进行编码会使代码的可读性变差，但不使用这两者又很难实现以下这种情况的选择，如上述代码，我们要选中UL标签下的第一个LI标签，在没有类和ID 的情况下已知的选择器就很难做到，因此要引入结构伪类选择器。使用上个例子中的代码结构，定位到ul下的第一个li标签。

```css
li:nth-child(1){
    background: #0048ff;
}
```

> 这种方法会先选中一个li标签，再定位到他的父级标签，括号内的元素表示要定位父级标签的第几个元素，如果定位到的这个元素也是li标签，就会生效，反之无效。如上面这个代码生效，而下面这个代码无效,因为ul标签不是他父标签下的第一个标签。

```css
ul:nth-child(1){
    background: #0048ff;
}
```

> 如果要忽略父元素中的其他元素，只选父元素中指定类型的元素可以这样表示

```css
p:nth-of-type(2){
    background: blue;
}
```

> 此外还有一种较为简单的表达方式,用first-child,last-child定位ul标签下的指定的li标签，这种方法同样要判断类型，如果被指定的标签不是li标签，选择器不会生效

```css
ul li:last-child{
    background: #3a1061;
}
```

#### 属性选择器（推荐）

> 属性选择器可以选择包含某一中特定属性的标签，这个属性可以是关键字，也可以是名称，类，id等，实用性很广。
>
> 需要注意的是在使用时可能会用到模糊搜索，这是要区分=和*=的区别。
>
> 下面代码分别表示选择classzhong带有"link"的标签和有id的标签
>
> 属性选择器还可以放入正则表达式，可以在使用时搜素，不需要记忆

```css
p[class*="link"]{
    background: #88bf20;
}
p[id]{
    background: #88bf20;
}
```

## 美化网页元素

### 凸显强调

> span标签本身并没有什么功能
>
> 但我们一般约定俗成地把一些重要的要突出的字用span标签套起来再来定义他们的样式

```html
记得常用 <span class="area-legend-symbol">span</span>标签


<style>
    .area-legend-symbol{
        color: aqua;
        size: A3;
    }
```

### 字体样式

> 字体样式一般有：
>
> 字体样式 如宋体，黑体等可在font-family中设置
>
> 字体大小 font-size可以选择，也可以自定义，单位是px
>
> 字体粗细 font-weight 可以选择，也可以自定义，无单位，
>
> 字体颜色 color

#### 颜色

> 除了使用英文字母来描述颜色外，一般还可以采用RGB和RGBA的方式
>
> R,G,B分别是红，绿，蓝三原色的首字母缩写，A表示透明度
>
> RGB的表示方式为#000000到#FFFFFF每两位为一个16进制数，表示对应的原色的浓度#000000为黑色，#FFFFFF为白色
>
> 或者rgb(0,255,255)表示使用三原色配色
>
> RGBA的表示方式rgba(0,255,255,0.5)透明度的值一般为0到1

```css
<style>
    .paragraph01{
        font-family: 新細明體-ExtB;
        font-size: 20px ;
        font-weight: lighter;
        color: aqua;

    }
    .title01{
        font-size: 50px;
    }
</style>

```

### 文本样式

> 文本颜色 color,用法同上
>
> 对齐方式 text-align，常用的有居中，左对齐等
>
> 首行缩进 text-indent,缩进的距离可以自定义，一般单位为em,一个em代表一个字
>
> 背景颜色 background,可以通过height设置背景框的高度等信息
>
> 行高 line-height来设置行高单位可以是px,行高和快的高度一致就可以实现上下居中

#### 装饰

> 下划线 text-decoration: underline
>
>中划线 text-decoration: line-through
>
>去除下划线 a标签的链接产生的下划线也可以通过装饰命令去除。 text-decoration: none

#### 文本图片水平对齐

> 直接在图片段落中输入文字，文字一般显示在图片的右下方，让他们水平对其可以把图片作为参照物使文字水平对其再来更改样式

```html
<style>
    #body_title001{
        color: #000000;
        text-align: center;
    }
    #body_paragraph001{
        color: aqua;
        text-align: left;
        text-indent:  2em;
        background: blueviolet;
        height: 300px;
        width: 600px;
        line-height: 20px;
        text-decoration: line-through;
    }
    #body_image001,#body_paragraph002{
        vertical-align: middle;
    }

</style>

<p>
    <img src="../resources/image/index.jpg" alt="张敏" id="body_image001">
    <span id="body_paragraph002">图片介绍</span>
</p>
```

## 鼠标悬停和阴影

> 常用的超链接伪类一般只有鼠标悬停时变化，用 选择器:hover{}表示
>
>用text-shadow可以设置阴影，其中需要3个像素参数分别表示水平便宜，竖直偏移和模糊半径。和一个阴影颜色参数。

```html
<style>
    #body_a_001{
        /*默认颜色为黑色*/
        text-decoration: none;
        color: black;
    }
    /*设置鼠标悬停时颜色变为其他颜色，字体变大*/
    #body_a_001:hover{
        color: #8a2be2;
        font-size: 50px;
        text-shadow:  10px 10px 10px #3a1061;
    }

</style>
```

## 列表

> 创建一个商品列表,每个字段间用两个空格隔开，防止因为字段名长短不一导致的不对齐

```html
<p>
    <ul>
        <li>
            <a href="#">男装</a>&nbsp;&nbsp;<a href="#">女装</a>&nbsp;&nbsp;<a href="#">内衣</a>
        </li>
        <li>
            <a href="#">篮球</a>&nbsp;&nbsp;<a href="#">足球</a>&nbsp;&nbsp;<a href="#">羽毛球</a>
        </li>
    </ul>
</p>
```

> 列表创建完毕，在网页显示时发现由于使用的是有序排列，每行元素之前都会有一个实心小圆点，并且每个选项下面都有下划线
>
> 可以使用（文本样式——装饰）中提到的方法消除下划线

```css
#div01{
    /*设置选项框总宽度*/
    width: 200px;
}
.title01{
    /*设置标题样式*/
    font-size: 18px;
    font-weight: bolder;
    text-indent: 1em;
    line-height: 30px;
    background: aqua;
}
#body_list01{
    /*设置选项表样式，消除实心小圆点*/
    list-style: none;
    background: antiquewhite;
}
li{
    /*调整选项的行高，是页面整洁*/
    line-height: 50px;
}
/*a{*/
/*    取消A标签的下划线*/
    text-decoration:  none;
}
        /*设计悬停选项*/
a:hover{
    color: brown;
    font-size: 30px;
    text-shadow:  10px 10px 10px color(0,255,255);
}
```

## 背景图片

> 背景标签不仅可以设置背景颜色，还可以使用图片作为背景

```html
<style>
    div{
        width: 1000px;
        height: 500px;
        background-image: url("../../resources/image/index.jpg");
        /*在不指定图片放置方式的情况下，默认是不改变图片大小全部平铺的*/
    }
    div01{
        /*水平平铺*/
        background-repeat: repeat-x;c
    }
    div02{
        /*不平铺*/
        background-repeat: no-repeat;
    }
</style>
```

> 调整图片位置
>
> 在设置背景颜色之后可以直接用url防止一张背景图片
>
> 后面的参数表示图片的水平位置和垂直位置，no-repeat表示不平铺
>
> 这些属性也可以分开来写

```css
    background: aqua url("../../resources/image/index.jpg") 270px 10px no-repeat;

.title01{
    /*设置标题样式*/
    font-size: 18px;
    font-weight: bolder;
    text-indent: 1em;
    line-height: 30px;
    background-image: url("../../resources/image/码出高效.jpg");
    background-repeat: no-repeat;
    background-position: 250px 10px;
    background: #88bf20;
}
```

## 渐变

> 可以从https://www.grabient.com/调配渐变色

## 盒子模型

> 盒子模型主要有三个属性分别是
>
>margin:外边距
>
>padding:内边距
>
>border:边框

### 边框

```html
/*border表示线框，后面的三个属性分别为现况粗细，单位px,线框类型，soild表示线框为实线，颜色*/
        border: 1px solid #88bf20;
```

### 外边距

> 外边距用margin表示，外边距的作用就是移动元素，让元素放置在我们想要的位置
>
> margin只有一个参数时，默认适用于上下左右。两个参数时，前一个为上下参数，后一个为左右参数。四个参数时，分别为上右下左，顺时针旋转。
>
> 指定margin参数时要加单位px。auto表示自动居中，使用auto会是对应方向如上下方向，边距一致。
>
> 此外还可以分别指定盒子的上下左右外边距，分别为
>
> 上：margin-top
>
> 下：margin-bottom
>
> 左：margin-left
>
> 右：margin-right

```css
#sign_in_box{
    width: 300px;
    height: 190px;
    border: 1px solid #0048ff;
    /*margin: 100px auto;*/
    margin-top: 50px;
    margin-left: 500px;
    margin-bottom: 400px;
    margin-right: 200px;
}
```

### 内边距

> 内边距的用法和语法同外边距，用padding表示。
>
> 盒子模型的作用就是要确定这个元素应该在哪，要有多大。

## 圆角边框

> 一个四边形有四个角，因此在设定圆角时又涉及到选择哪几个角的问题
>
> 圆角用border-radius属性表示后面要有参数，单位为px，表示圆角半径
>
> 当只有一个参数时，默认四个角半径一致
>
> 当有两个参数时，第一个参数为左上角半径，第二个为右下角半径。
>
> 当有四个参数时，依旧遵循顺时针的顺序。

```css
p[id]{
    border-radius: 20px 20px 30px 30px;
}
```

## 阴影

> 前面使用过字体的阴影，用text-shadow表示，边框，图片等其他元素也可以使用阴影，用box-shadow表示
>
> 参数同上

```css
<style>
div{
    width: 100px;
    height: 100px;
    border: 10px solid #1b0874;
    box-shadow: blueviolet 10px 10px 10px ;
}
</style>
```









