<template>
  <div class="container">
    <div class="header">
      <span class="text">header</span>
      <span class="btns">
        <button class="btn-defaults">点击</button>
        <button class="btn-dangers">点击</button>
      </span>
      <div class="ext">ext</div>
      <div class="h1">header1</div>
    </div>

    <div class="main example">
      main
      <a class="danger" href="#">link</a>
      <div class="r1">r1</div>
      <div class="r2">r2</div>
      <div class="main-sidebar">sidebar</div>
    </div>
    <div class="footer sidebar">
      <span class="foot">footer</span>
      <div class="theme-footer" data-theme="dark">
        <span class="theme-text">this is footer</span>
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
// https://zhuanlan.zhihu.com/p/413294236 @forward
// https://blog.csdn.net/github_36487770/article/details/103346303 meta.load-css

// 注意：@use 的前面只能出现 @forward 或 变量声明，其他的所有代码只能出现在 @use 之后。
@use "sass:color";
@use "sass:meta";
@use './forms';
@use './common.scss';

$theme-name: "dark";
$c: rgba(144, 233, 12);

.foo {
  color: black;
  border: 1px solid black;
}

$var: red;
@mixin foos($var: $var) {
  default-color: $var;
  // $var: green !global; //局部变量，变量$var被设为green；在局部作用域中，$var都会被设为green
  scoped-color: $var;
}


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
    .btn-defaults {
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
    .text {
      @include forms.setFontSize;
    }
    .ext {
      // @extend .foo;
    }
    .h1 {
      // @include common.addBorder($border-color: cadetblue);
      @include common.addBorder($border-position: top, $border-color: cadetblue);
    }
  }
  .main {
    .danger {
      font-size: forms.updateFontSize(18px); // ok
    }
    .r1 {
      color: forms.$c-color; // ok green
      @include forms.setBg; // ok green
    }
    .r2 {
      //  color: forms.$b-c-color; // ok pink 前缀b-
      // @include forms.b-setBg; // ok pink 前缀b-

      background: color.adjust($c, $green: 150);
    }
  }
  .footer {
    .foot {
      // $var: green !global;
      @include forms.setFontSize;
    }
    .theme-footer {
      // font-size: forms.$-c-font-size;// Private members can't be accessed from outside their modules
      font-size: forms.$c-font-size; // Private members can't be accessed from outside their modules
    }

    // @include meta.load-css($theme-name, $with: ('_color': blue, '_private': false));
    // @include meta.load-css('index', $with: ('_color': blue, '_private': false));
    @include meta.load-css("index");

    // 内置模块meta中有一个新增的内置mixin，是meta.load-css($url，$with:())。
    // 该mixin可以把u r l 中 c s s 样 式 全 部 包 含 进 来 。 ∗ 注 意 ，
    // url中css样式全部包含进来。*注意，url中css样式全部包含进来。
    // ∗注意，url中的函数，变量和mixin在meta.load-css()后的scss中并不可用*。
    // @meta.load-css类似于@use，可以取代嵌套的@import，但只会返回编译后的css代码，还可以在代码中动态使用。

    // 注意，load-css中的url不是真的网络地址，而是一个scss文件的相对路径或者绝对路径或文件名，sass会自动添加.sass|.scss后缀，就像传给@use的参数一样。
    // meta.load-css()的第二个参数可以接受一系列配置项，如：
    // @include meta.load-css("./dark.scss", $with: ('base-color': pink));

    .paragraph {
      @include foos;
      color: $var;
      color: common.$color;

      
    }
  }
}
</style>
