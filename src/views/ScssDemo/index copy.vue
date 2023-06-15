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
// https://zhuanlan.zhihu.com/p/413294236

// @forward 虽然对变量，mixin，函数等只能起转发作用，但对其他样式代码和 @use 一样，也会引入并编译，
// 所以在使用了 @forward "module" 的文件中，就算没有使用 @use ，也可以去继承 module.scss 的样式。
// @forward './light.scss';

// 纯 css 导入语句（不编译）
// 如果要让编译器原封不动地输出 @import 语句，而不是去编译后替换掉它，那么这里就有几种形式，满足其中任意一种即可。
// 在 @import 语句中：
// 以 .css 结尾
// 以 http:// 或 https:// 开头
// 路径包含在 url() 之中。
// 语句中有媒体查询

// @import "xxx.css";
// @import "http://xxx.css";
// @import url(xxx);
// @import "landscape" screen and (orientation: landscape);

// @use 'index';

@import 'a.import';

.container {
  .header {
    .btn-defaults {
    }
    .btn-dangers {
    }
    .text {
    }
    .ext {
    }
    .h1 {
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
    .foot {
    }
    .theme-footer {
    }

    .paragraph {
    }
  }
}
</style>
