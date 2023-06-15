<template>
  <div class="container">
    <div class="header">
      header
      <span class="btns">
        <button class="btn-default">点击</button>
        <button class="btn-dangers">点击</button>
      </span>
    </div>

    <div class="main example">
      main
      <a class="danger" href="#">link</a>
      <div class="r1">r1</div>
      <div class="r2">r2</div>
      <div class="main-sidebar">sidebar</div>
    </div>
    <div class="footer sidebar">
      footer
      <div class="theme-footer" data-theme='dark'>this is footer</div>
    </div>
  </div>
</template>

<script setup name="ScssDemo"></script>

<style lang="scss" scoped>
// https://zhuanlan.zhihu.com/p/112768701
// https://blog.csdn.net/xgangzai/article/details/124995688

// @import缺点
// 1、多处导入，存在样式重复加载。
// 2、因为没有命名空间，为了避免撞名，不敢使用简写的 classname，因此起名总是需要注意。
// 3、没有私有函数的概念，样式完全暴露在使用import的地方，这对ui库不够友好。

// 4、@import 也是一个CSS特性，两者之间的区别可能会让人感到困惑
// 5、如果多次@import相同的文件，它会降低编译速度，导致覆盖冲突，并生成重复的输出。
// 6、所有东西都在全局命名空间中，包括第三方包——所以我的color()函数可能会覆盖你现有的color()函数，反之亦然
// 7、当你使用像color()这样的函数时，很难确切地知道它是在哪定义的。它来自哪个@import?

// https://blog.csdn.net/github_36487770/article/details/103346303
// 8、无法知道变量、mixin、函数具体是在哪里定义的。比如说，a.scss文件中定义了变量height，
// b.scss文件中引入了a，c.scss文件又引入了b，那么在c文件中，height，b.scss文件中引入了a，c.scss文件又引入了b，
// 那么在c文件中，height，b.scss文件中引入了a，c.scss文件又引入了b，那么在c文件中，height是可用的，但无法确定其来源。
// 9、嵌套import会导致重复的css代码，还可能引发奇怪的副作用。设想这样一个场景，一个页面中动态引入了一个组件，
// 页面本身需要加载page.css，组件的样式由component.css决定，而这两个样式表的源scss文件中都用到了common.scss，
// 那么在动态引入组件的时候，common.css中的样式就会被重复加载，可能对原有的样式造成覆盖。
// 10、没有私有函数的概念。库作者无法确保他们的私有工具函数不会被使用者直接获取，直接使用私有函数可能导致混淆和向后兼容的问题。
// 11、@extend规则可能会影响到样式中的一切选择器，而不是仅仅是作者所希望的那些。
// （对@extend不熟悉的童鞋可以看看这篇文章the-benefits-of-inheritance-via-extend-in-sass来具体了解下其使用场景和优缺点。）这一点会在下一节详细论述。

// https://zhuanlan.zhihu.com/p/413294236
// 12、@import 使所有变量、 mixins 和函数都可以全局访问。导致很难判断是在哪里定义的
// 13、因为所有东西都变成全局的，所以 sass 库必须在所有成员前加上前缀，以避免命名冲突。
// 14、@extend 也是全局的，这使得很难预测哪些样式将被继承。
// 15、每个样式表都会被执行编译，每一个 @import 都会生成它的 CSS，这会增加编译时间并产生臃肿的代码输出。
// 16、没有办法定义不想暴露出去的私有成员和占位符选择器。

// 一、使用@use导入文件
// 新的@use 类似于@import。但有一些明显的区别:
// 1、该文件只导入一次，不管在项目中@use它多少次。
// 2、以下划线(_)或连字符(-)开头的变量、mixin 和函数(Sass称为"成员变量")被认为是私有的，不会被导入。
// 3、导入的文件（这里即corners.scss）中的成员变量只在局部可用，而不会传递到未来的导入结果中。
// 4、类似地，@extends将只应用于上游链——即只扩展被导入的文件中的选择器，而不是执行导入命令的文件。
// 5、所有导入的成员变量默认拥有命名空间

// 当我们@use 一个文件时，Sass会根据文件名自动生成一个命名空间:
// @use './corners.scss'; // 生成了一个`corners` 命名空间

// 我们可以在导入时添加as <name>来改变或删除默认的命名空间：
// @use './corners.scss' as c; // 命名空间

// 使用as *将模块添加到根名称空间，因此不需要前缀，但这些成员仍然在当前文档的本地作用域内。（不能再home页面访问到）
@use './corners.scss' as *; // 使用as *，那么这一模块就处于全局命名空间。// 星号会删除所有命名空间

// 二、导入内置的Sass模块
// 内部的Sass特性也已经转移到模块系统中，因此我们可以完全控制全局命名空间。
// 有几个内置的模块：math, color, string, list, map, selector和meta ，这些模块必须在使用之前显式地导入到文件中:
@use 'sass:map';
@use 'sass:math';
@use 'sass:string';

$map-get: map.get(('key': 'value'), 'key');
$half: math.percentage(1/2);
$str-index: string.index('string', i); // 不能直接使用string.index，需要导入


// 三、新的和改变的核心功能
// 作为一个附带好处，这意味着Sass可以安全地添加新的内部mixin和函数，而不会引起命名冲突。
// 这个版本中最激动人心的例子是一个名为load-css()的sass:meta mixin。
// 跟@use 类似 ，但它只返回转换后的CSS输出，我们可以在代码中的任何地方动态使用：
@use 'sass:meta';
$theme-name: 'dark';

// @use './dark.scss';

// 四、调整和缩放颜色
// sass:color 模块也有一些有趣的注意事项，因为我们试图摆脱一些遗留问题。
// 许多遗留的快捷方式如lighten()或者adjust-hue()现在被弃用，改为显式的 color.adjust() 和color.scale()函数：
@use 'sass:color';
$light-red: color.adjust(red, $lightness: 20%);// 给当前red 变浅20%
$complement: color.adjust(red, $hue: 90deg);
// 在大多数情况下，我们实际上想要相对于当前值缩放（scale()）颜色深浅的百分比：
// 跟white相差20%，而不是在当前深浅度上增加20%
$light-red: color.scale(red, $lightness: 20%);

// 五、配置导入的库
// 由于使用过的模块不能够再访问本地变量，我们需要一种新的方法来设置这些默认值。我们可以通过给@use添加配置键值对来实现
// 这类似于load-css()中的$with 参数。但是我们不使用变量名作为键，而是使用变量本身，以$开头。
@use './dark.scss' with ($_color: yellow, $_private: false);
// 确保使用@use时在“入口”文件(导入所有部分的中心文档)中首先配置库，以便在其他地方@use库之前编译这些配置。


.container {
  .header {
    .btns %base {
      display: inline-block;
      margin-bottom: 0;
      font-weight: normal;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      background-image: none;
      border: 1px solid transparent;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      border-radius: 4px;
      user-select: none;
    }
    .btn-default {
      @extend %base !optional;
      color: #333;
      background-color: #fff;
      border-color: #ccc !important;
    }
    .btn-dangers {
      @extend %base !optional;
      color: #fff;
      background-color: #d9534f;
      border-color: #d43f3a !important;
    }
  }
  .main {
    .danger {
      display: inline-block;
      text-decoration: none;
      border: 1px solid red;
      
      padding: 4px + $radius; // 生效了
      // padding: 4px + $_radius2; // Undefined variable.
      @include roundeds; // 生效了
    }
    .r1 {
      position: relative;
      z-index: $str-index;// 4
      visibility:  $half;// 50%;
      visibility: $map-get; // value
    }
    .r2 {
      // @include dark.setColor;

      color: $light-red;
      // color: $complement;

      @include dark.setColor;
    }
  }
  .footer{
    [data-theme=#{$theme-name}] {
      color: red;
      // 注意，load-css中的url不是真的网络地址，而是一个scss文件的相对路径或者绝对路径，就像传给@use的参数一样。所以这里没生效
      // @include meta.load-css($theme-name, $with: ('_color': blue, '_private': false));
      // color: $color;
      
    }
  }
}
</style>
