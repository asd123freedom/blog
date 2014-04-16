---
layout: art
title: 使用box-shadow绘制像素画
subTitle: 使用CSS3属性box-shadow，绘制超级玛丽
desc: 曾经在codepen.io上看到很多像素画，都是css3实现的，点进去看才知道是使用box-shadow实现的，但是当时并不了解CSS3的box-shadow属性。如今稍微了解了box-shadow属性，并自己绘制了一个超级玛丽
categories: [前端技术]
tags: [css]
---
{% raw %}

##前面的话
曾经在codepen.io上看到很多像素画，都是css3实现的，点进去看才知道是使用box-shadow实现的，但是当时并不了解CSS3的box-shadow属性。如今稍微了解了box-shadow属性，并自己绘制了一个超级玛丽

希望实现的效果：

![马里奥](/img/mario.jpg)

##box-shadow属性
首先了解一下CSS3的box-shadow属性

![box-shadow](/img/box-shadow.jpg)

可以看到浏览器的支持还是相当不错的，就连IE也从9就支持了

既然需要画像素画，当然主要是绘制矩形，而使用box-shadow可以很方便的实现。box-shadow属性的值可以为\[水平偏移, 垂直偏移 , 阴影颜色\]、\[水平偏移, 垂直偏移 , 阴影模糊值 ,阴影颜色\]或者\[水平偏移, 垂直偏移 , 阴影模糊值 , 阴影延长值,阴影颜色\]。由于绘制像素画不需要使用模糊效果，所以只要使用第一种格式\[水平偏移, 垂直偏移 , 阴影颜色\]就可以了。

那使用box-shadow如何绘制多个方块？
###定义基础元素
定义一个div用于作为box-shadow的拥有者：
```html
<div class="pix"></div>
```

```css
.pix {
    width: 100px;
    height: 100px;
    background-color: red;
}
```

将它作为最左上角的方块，由于被元素覆盖的box-shadow将不会被显示（就算元素本身的background-color为transparent也不行），颜色直接由background-color属性来确定。关键是定义它的width和height属性，这两个属性决定了每个方块的宽和高。

效果很简单：

<iframe width="100%" height="300" src="http://jsfiddle.net/skyinlayer/56pgb/12/embedded/result" allowfullscreen="allowfullscreen"  frameborder="0">&nbsp;</iframe>

###在其四周绘制方块
首先在其右侧绘制一个与原始大小等大的方块，这就要使用box-shadow属性了。给元素添加box-shadow，并添加一个阴影值```100px 0 blue```，这样就相当于在该元素的左边100px，绘制了一个与元素等大的颜色为blue的方块。

css代码修改为：
```css
.pix {
    width: 100px;
    height: 100px;
    background-color: red;
    box-shadow: 100px 0 blue
}
```

效果如下：

<iframe width="100%" height="300" src="http://jsfiddle.net/skyinlayer/56pgb/10/embedded/result" allowfullscreen="allowfullscreen" frameborder="0">&nbsp;</iframe>

在元素下面绘制一个等大的方块类似，再给box-shadow添加一个值：```0 100px blue```，css代码修改为：
```css
.pix {
    width: 100px;
    height: 100px;
    background-color: red;
    box-shadow: 100px 0 blue, 0 100px blue
}
```

效果如下：

<iframe width="100%" height="300" src="http://jsfiddle.net/skyinlayer/56pgb/13/embedded/result" allowfullscreen="allowfullscreen" frameborder="0">&nbsp;</iframe>

再添加几个，比如以原始元素为\[0,0\]，添加\[2,0\],\[1,1\],\[0,2\],背景为绿色：
分别在box-shadow中添加三个属性分别表示这三个方块：

```css
.pix {
    width: 100px;
    height: 100px;
    background-color: red;
    box-shadow: 
        100px 0 blue, 
        0 100px blue,
        200px 0 green
        100px 100px green,
        0 200px green;
}
```

效果如下：

<iframe width="100%" height="300" src="http://jsfiddle.net/skyinlayer/56pgb/14/embedded/result" allowfullscreen="allowfullscreen" frameborder="0">&nbsp;</iframe>

这里可以看到，完全可以使用box-shadow绘制像素画，每个像素（方块）用一行box-shadow的值表示就可以了

##画超级玛丽
一般画像素画之前需要做点准备：
1. 首先需要确定每个像素（格子）的真正大小，一般为方块，这里我取了32X32大小。
2. 然后需要确定整幅图需要格子的行数和列数，可以数一数，横向12格，纵向16格。
3. 如果有范本可以直接一行一行添加格子的box-shadow值，如果直接凭空画，可以把整张图拆分成多个部分进行绘制。甚至拆成多个div，每个div定义自己的box-shadow值

既然已经知道使用box-shadow画方块的方法了，自然就可以画超级玛丽了。看最上面的图就可以知道8-bit时代的超级玛丽都是由方块组成，主要有三个颜色：
1. 帽子和肚兜（？）的红色：#E6002E
2. 身体的黄色：#F8B600
3. 头发、胡须、衣服、鞋子的深绿色：#808A27
这里通过一行一行的方式进行绘制：

一步一步话，先画帽子：

<iframe width="100%" height="600" src="http://jsfiddle.net/skyinlayer/s36mK/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0">&nbsp;</iframe>

接着绘制脸：

<iframe width="100%" height="600" src="http://jsfiddle.net/skyinlayer/s36mK/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0">&nbsp;</iframe>

然后绘制身体：

<iframe width="100%" height="600" src="http://jsfiddle.net/skyinlayer/s36mK/2/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0">&nbsp;</iframe>

最后把脚画上：

<iframe width="100%" height="600" src="http://jsfiddle.net/skyinlayer/s36mK/3/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0">&nbsp;</iframe>

这样就齐活了，以前dos系统或者fc游戏机中的像素画都可以通过这种方式绘制

完整的代码：

```css
.pix {
    width: 32px;
    height: 32px;
    background-color: transparent;
    box-shadow: 
    /*帽子*/ 
    96px 0 #E6002E, 128px 0 #E6002E, 160px 0 #E6002E, 192px 0 #E6002E, 224px 0 #E6002E, 64px 32px #E6002E, 96px 32px #E6002E, 128px 32px #E6002E, 160px 32px #E6002E, 192px 32px #E6002E, 224px 32px #E6002E, 256px 32px #E6002E, 288px 32px #E6002E, 320px 32px #E6002E, 
    /*头*/ 
    64px 64px #808A27, 96px 64px #808A27, 128px 64px #808A27, 160px 64px #F8B600, 192px 64px #F8B600, 224px 64px #808A27, 256px 64px #F8B600, 32px 96px #808A27, 64px 96px #F8B600, 96px 96px #808A27, 128px 96px #F8B600, 160px 96px #F8B600, 192px 96px #F8B600, 224px 96px #808A27, 256px 96px #F8B600, 288px 96px #F8B600, 320px 96px #F8B600, 32px 128px #808A27, 64px 128px #F8B600, 96px 128px #808A27, 128px 128px #808A27, 160px 128px #F8B600, 192px 128px #F8B600, 224px 128px #F8B600, 256px 128px #808A27, 288px 128px #F8B600, 320px 128px #F8B600, 352px 128px #F8B600, 32px 160px #808A27, 64px 160px #808A27, 96px 160px #F8B600, 128px 160px #F8B600, 160px 160px #F8B600, 192px 160px #F8B600, 224px 160px #808A27, 256px 160px #808A27, 288px 160px #808A27, 320px 160px #808A27, 96px 192px #F8B600, 128px 192px #F8B600, 160px 192px #F8B600, 192px 192px #F8B600, 224px 192px #F8B600, 256px 192px #F8B600, 288px 192px #F8B600, 
    /*身体*/ 
    64px 224px #808A27, 96px 224px #808A27, 128px 224px #E6002E, 160px 224px #808A27, 192px 224px #808A27, 224px 224px #808A27, 32px 256px #808A27, 64px 256px #808A27, 96px 256px #808A27, 128px 256px #E6002E, 160px 256px #808A27, 192px 256px #808A27, 224px 256px #E6002E, 256px 256px #808A27, 288px 256px #808A27, 320px 256px #808A27, 0px 288px #808A27, 32px 288px #808A27, 64px 288px #808A27, 96px 288px #808A27, 128px 288px #E6002E, 160px 288px #E6002E, 192px 288px #E6002E, 224px 288px #E6002E, 256px 288px #808A27, 288px 288px #808A27, 320px 288px #808A27, 352px 288px #808A27, 0px 320px #F8B600, 32px 320px #F8B600, 64px 320px #808A27, 96px 320px #E6002E, 128px 320px #F8B600, 160px 320px #E6002E, 192px 320px #E6002E, 224px 320px #F8B600, 256px 320px #E6002E, 288px 320px #808A27, 320px 320px #F8B600, 352px 320px #F8B600, 0px 352px #F8B600, 32px 352px #F8B600, 64px 352px #F8B600, 96px 352px #E6002E, 128px 352px #E6002E, 160px 352px #E6002E, 192px 352px #E6002E, 224px 352px #E6002E, 256px 352px #E6002E, 288px 352px #F8B600, 320px 352px #F8B600, 352px 352px #F8B600, 0px 384px #F8B600, 32px 384px #F8B600, 64px 384px #E6002E, 96px 384px #E6002E, 128px 384px #E6002E, 160px 384px #E6002E, 192px 384px #E6002E, 224px 384px #E6002E, 256px 384px #E6002E, 288px 384px #E6002E, 320px 384px #F8B600, 352px 384px #F8B600, 64px 416px #E6002E, 96px 416px #E6002E, 128px 416px #E6002E, 224px 416px #E6002E, 256px 416px #E6002E, 288px 416px #E6002E, 
    /*脚*/ 
    32px 448px #808A27, 64px 448px #808A27, 96px 448px #808A27, 256px 448px #808A27, 288px 448px #808A27, 320px 448px #808A27, 0px 480px #808A27, 32px 480px #808A27, 64px 480px #808A27, 96px 480px #808A27, 256px 480px #808A27, 288px 480px #808A27, 320px 480px #808A27, 352px 480px #808A27;
}
```

##总结
使用box-shadow绘制像素画好处就是思路很简单，易于实现

但坏处也很多，绘制精细的绘画肯定是要完蛋的。同时庞大的css代码量导致加载速度变得很慢。所以一般情况下，可以直接通过div+css等现行进行大体的绘制，需要一些特殊小图形的时候才使用像素画绘制。同时像素画也可以通过写脚本动态的生成。免去了手动敲CSS的麻烦

{% endraw %}





