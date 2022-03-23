# HTML标签索引



## 分级标签

```html
    <h1>一级标签</h1>
    <h2>二级标签</h2>
    <h3>三级标签</h3>
    <h4>四级标签</h4>
    <h5>五级标签</h5>
    <h6>六级标签</h6>

```

> 分级标签共有六级，字体大小递减



## 字体标签

```html
<strong>粗体</strong>
<em>斜体</em>
```







## 链接标签

> herf表示这个链接要跳转的路径，必填。可以是文件的相对路径，也可以是一个URL
>
> target表示要跳转的内容被打开的位置

```html
 <a href="https://www.baidu.com/index.php?tn=monline_3_dg" target="_blank">点我跳转百度</a>
```

> herf不仅可以放入路径，还可以放入锚点来进行页面内的跳转，此时需要在被跳转的地方使用a标签做一个定位

例如：

```html
<a name="top">顶部</a>


<a href="#top">回到顶部</a>
```

> 该代码所实现的功能就是点击#top的a标签，就会跳转到name="top"的位置





## 图像标签

```html
<img src="../resources/image/张敏.jpg" alt="张敏">
```

> 图像标签会在网页上显示一个图像

> 标签中src为必填项，表示图片文件的路径，可以是一个相对路径也可以是URL

> alt表示替代选项，必填，图片加载不出来时会显示alt中的内容
>
> title表示鼠标悬停在上面时会显示的文字







## 标签嵌套

> 链接标签可以和其他标签嵌套使用，这样，点击一个设定的图片或者其他元素就可以跳转到相应的位置，代码如图所示

```html
<a href="https://www.baidu.com/index.php?tn=monline_3_dg">
    <img src="../resources/image/张敏.jpg" alt="张敏">
</a>
```





## 音频和视频标签

> 音频和视频标签的实现原理类似于图像标签

```httml
<video src=""></video>
```







## 表单（重点内容）

> 使用form标签可以创建一个表单

```html
<form  action="列表学习.html" method="get">
```

> 其中 action表示向何处发送表单，其后面一般会是一个地址值
>
> method表示用什么方式来发送这个表单，一般的选项有get和post

```
http://localhost:63342/HTML02/.idea/%E5%88%97%E8%A1%A8%E5%AD%A6%E4%B9%A0.html?username=zx&psw=1224&sex=boy&sleeping=on&gaming=on&plaing=on
```

> 如上图，使用get请求发送表单时，一些用户信息会包含在URL中一起发送，不安全。而且这种方法不能发送较大的文件

> 但这种方法比较高效

> get 方法会对用户信息就行加密，可以一定程度上保护信息的安全。

表单中通常需要添加一些元素如按钮，下拉框等。一些常用的表单元素的创建方法如下



### 输入框

```html
    <p>用户名：<input type="text" name="username" value="请输入用户名" maxlength="30"></p>
    <p>密码：<input type="password" name="psw" maxlength="8" ></p>
```

> 使用input标签来创建输入框，type表示类型，value表示默认提示值，name表示发送表单是信息的名称



### 单选框

```html
    <p>性别：<!--单选框-->
        <input type="radio" value="boy" name="sex">男
        <input type="radio" value="girl" name="sex">女
```

> 修改type="radio"可以创建一个单选框，单选框一般会几个一起使用，而若要是他们只能够单选，就必须把这些单选框命名为同名。否则他们就是不关联的，可以重复选择。



### 多选框

```html 
<p>爱好
        <input type="checkbox" name="sleeping" checked>睡觉
        <input type="checkbox" name="gaming">游戏
        <input type="checkbox" name="plaing">打牌
    </p>
```

> 修改type="checkbox"来创建一个多选框,其中checked描述表示该选项默认勾选，可以取消。



### 提交按钮和重置按钮

```html
    <input type="submit"><!--默认按钮，提交-->
    <input type="reset"><!--默认按钮，重置-->
```

> submit表示提交按钮，用来提交表单
>
> reset表示重置，点击可以清空表单上已经填写的信息



### 下拉框

> 用select 来创建一个下拉框，option表示该下拉框中会出现的选项

```html
<select name="下拉列表" >国家
    <option value="选项名称"></option>
    <option value="china">中国</option>
    <option value="American">美国</option>
    <option value="riben">日本</option>
    <option value="yilake">伊拉克</option>
</select>
```





###  文本域

```html
<p>反馈
    <textarea name="textrea" cols="30" rows="10" > </textarea>

</p>
```

> 使用texture标签来创建一个文本域，cols表示文本区域的宽度，rows表示文本区域的长度



### 文件域

```html
<!--文件域-->
<input type="file" name="files">
```





### 邮箱和网址输入框

> HTML中的邮箱和网址输入框只能做简单的判断不能保证用户输入的邮箱或网址格式正确，可以使用正则表达式来进行判断，一些常见的正则表达式可以在网站上搜索获得

```html
<p>邮箱
    <input type="text"name="email" pattern="^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$">
</p>

```



### 数字框

```html
</p>数字
<input type="number" name="number" max="20" min="0">
```



### 滑块

```html
<p>滑块
    <input type="range" name="voice" max="20" min="0" step="1">
</p>
```



### 搜索框

```html
<p>查找
    <input type="search"name="search">
</p>

```



## 列表

```html
<!--有序列表-->
<ol>
    <li>前端</li>
    <li>后端</li>
    <li>运维</li>
</ol>
<!--无序列表-->
<ul>
    <li>导航</li>
    <li>侧边栏</li>
</ul>
<!--自定义列表-->
<dl>
    <dt>列表名称dt</dt>
    <dl>标签dl</dl>
    <dd>内容dd</dd>
</dl>
```



## 表格

```html
<table border="1px">
<!--    tr表示列-->
<!--    td表示行-->
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
```

> broder表示表格线宽为1个像素