<template>
  <div class="container">
    <div class="header">
      <span class="text">
        header
        <code>this is header</code>
      </span>
      <span class="btns">
        <button class="btn-defaults">点击</button>
        <button class="btn-dangers">点击</button>
      </span>
      <div class="ext">ext</div>
      <div class="h1">header1</div>
    </div>

    <div class="main example">
      main
      <a class="danger a" href="#">link</a>
      <div class="r1">r1</div>
      <div class="r2">r2</div>
      <div class="main-sidebar">sidebar</div>
    </div>
    <div class="footer sidebar">
      <span class="foot">footer</span>
      <div class="theme-footer" data-theme="dark">
        <span class="theme-text">
          this is footer
          <span class="stx-string">stx-string</span>
          <span class="stx-comment">stx-comment</span>
          <span class="stx-variable">stx-variable</span>
        </span>
      </div>
      <p class="paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
        eius laborum delectus iste asperiores, sequi qui vitae laboriosam hic
        eveniet nesciunt amet inventore vel omnis ipsam! Veritatis similique
        consequatur necessitatibus.
      </p>
    </div>
  </div>
</template>

<script setup name="ScssDemo"></script>

<style lang="scss" scoped>
// https://blog.csdn.net/xgangzai/article/details/124995688
// Scss内置扩展
// scss内置扩展分为color list map math meta selector string等，
// 扩展也就是scss内置的一些function，每个模块下内容比较多，这里用一些常用的进行举例。

// 内置函数可以使用@use模块化引入，也可以直接使用他提供的全局函数名调用，以下两种方式是一样的。
// 1.list list.nth
@use 'sass:list';
@use 'sass:string';
// 2.color:
// scss包含很多操作颜色的函数。例如lighten()与 darken()可用于调亮或调暗颜色，
// opacify()使颜色透明度减少，transparent()使颜色透明度增加，mix()用来混合两种颜色。

// 3.String
// scss有许多处理字符串的函数，比如向字符串添加引号的quote()、
// 获取字符串长度的string-length()和将内容插入字符串给定位置的string-insert()。

// 4.Math
// 数值函数处理数值计算，例如：percentage()将无单元的数值转换为百分比，round()将数字四舍五入为最接近的整数，
// min()和max()获取几个数字中的最小值或最大值，random()返回一个随机数。
@use 'sass:math';

// 5.List
// List函数操作List，length()返回列表长度，nth()返回列表中的特定项，join()将两个列表连接在一起，append()在列表末尾添加一个值。

// 6.map
// Map函数操作Map，map-get()根据键值获取map中的对应值，
// map-merge()来将两个map合并成一个新的map，map-values()映射中的所有值。
$font-size: (
  "small": 12px,
  "normal": 16px,
  "large": 20px,
);
$padding: (
  top: 10px,
  right: 20px,
  bottom: 10px,
  left: 30px,
);

$color: pink;

$remove: map-remove($font-size, normal);
$merge: map-merge(
  $map1: $remove,
  $map2: (
    mini: 10px,
  ),
);



// 7.selector
// 选择符相关函数可对选择css进行一些相应的操作，例如：
// selector-append()可以把一个选择符附加到另一个选择符，selector-unify()将两组选择器合成一个复合选择器。
@use 'sass:selector';

//8.meta
@use 'sass:meta';

// 8.1.自检函数
// 自检相关函数，属于内置扩展meta下的方法，feature-exists()检查当前scss版本是否存在某个特性，
// variable-exists()检查当前作用域中是否存在某个变量，mixin-exists()检查某个mixin是否存在。
// 自检函数通常用在代码的调试上，返回的是个布尔值。

// 7
// @debug selector.is-superselector("a", "a"); // true
// 可以直接使用@forward下的前缀
// @debug selector-append("a", ".disabled"); // (a.disabled,)
// @debug selector-append("a", ".disabled")+''; // a.disabled

// @debug selector-extend("a.disabled", "a", ".link"); // a.disabled, .disabled.link
// @debug selector-extend("a.disabled", ".disabled", ".link"); // a.disabled, a.link

// @debug selector-unify("a", ".disabled")+''; // a.disabled

// 8
@debug meta.calc-args(calc(100px + 10%)); // (100px + 10%,)
@debug meta.calc-args(calc(100px + 10%))+''; // 100px + 10%
// :root {
//   --with: 12px;
// }
@debug meta.calc-args(clamp(50px, var(--width), 1000px));
@debug meta.calc-name(calc(100px + 10%)); // calc
@debug  meta.calc-name(clamp(50px, var(--width), 1000px)); // clamp

@mixin setName2($name: 'abc') {
  content: $name;
}

// 6.1 function keywords()
@mixin syntax-colors($args...) {
  // @debug $args;// ()
  @each $name, $color in keywords($args) {
    span.stx-#{$name} {
      color: $color;
      // @if variable-exists( $padding) { // error:  (top: 10px, right: 20px, bottom: 10px, left: 30px) is not a string.
      @if variable-exists($name: color) { // 注意：不能些$，只能写变量名称
        padding: 10px;
      }
      @if mixin-exists($name: setName) {
        &::after {
          content: '-setName-';
        }
      }
    }
  }
}

$theme-name: 'dark';

.container {
  .header {
    .btn-defaults {
    }
    .btn-dangers {
    }
    .text {
      &:after {
        // content: string.quote($string: '134a');
        content: quote($string: "134");
      }
      color: unquote($string: "#f00");
      z-index: str-length($string: "sass学习");
      // 将$insert插入到$string的指定位置，$index可为负数
      content: str-insert($string: "abc", $insert: "sass学习", $index: 4);
      // content: str-slice($string: "sass学习", $start: 1, $end: 3)
      // 截取$string中的指定位置的内容 含头含尾
      content: str-slice(
        $string: "sass学习",
        $start-at: 1,
        $end-at: -3
      ); // sass
    }
    .ext {
      // 让颜色变亮
      color: scale-color(#f00, $lightness: +30%);
      // 让颜色变暗
      color: scale-color(#f00, $lightness: -30%);
      // 降低颜色透明度
      color: scale-color(#f00, $alpha: -40%);
    }
    .h1 {
      // z-index: abs(-12);
      // z-index: ceil(5.4);
      // z-index: max(2,3,4,5,46,3,4,5);
      // z-index: min(2,3,4,5,46,3,4,5);
      // // opacity: percentage(23/100);
      // // opacity: math.round( 3.5); // 4
      // opacity: math.random($limit: 10);
      // opacity: random($limit: 100);;
      // // z-index: math.abs(-12);

      // list
      z-index: length(12px); //1
      z-index: length(12px 5px 8px); //3
      z-index: index(a b c d, c); //3
      padding: append(10px 20px, 30px); // 10px 20px 30px
      color: nth($list: red blue green, $n: 2); // blue
    }
  }
  .main {
    .danger {
    }
    .r1 {
    }
    .r2 {
    }
  }
  .footer {
    [data-theme=#{$theme-name}] {
      color: red;
      // 注意，load-css中的url不是真的网络地址，而是一个scss文件的相对路径或者绝对路径，就像传给@use的参数一样。所以这里没生效
      @include meta.load-css($theme-name, $with: ('_color': purple, '_private': false));
      // color: $color;
      
    }

    .foot {
      // 直接使用sass提供的全局函数名调用
      // color: nth($list: red blue green, $n: 2); // blue
      // 使用@use模块化引入
      color: list.nth($list: red blue green, $n: 1); // blue
    }
    .theme-footer {
      @include syntax-colors($string: green, $comment: yellow, $variable: blue);
    }

    .paragraph {
      font-size: map-get($map: $font-size, $key: normal);
      @if map-has-key($map: $padding, $key: "right") {
        padding-right: map-get($map: $padding, $key: right);
      }
      &:after {
        content: map-keys($map: $font-size) + " " + map-values($map: $padding);
        // @debug $remove; // ("small": 12px, "large": 20px)
        // @debug $merge; // ("small": 12px, "large": 20px, mini: 10px)

        // content: inspect($value: $remove); // ("small": 12px, "large": 20px);
        // content: keywords($args: ); // error
      }
    }
  }
}
</style>
