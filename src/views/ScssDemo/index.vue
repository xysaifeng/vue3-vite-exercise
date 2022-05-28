<template>
  <div class="container">
    133
    <div class="r1">r1</div>
    <div class="r2">r2</div>
    <div class="main">
      main
      <div class="main-sidebar">sidebar</div>
    </div>
  </div>
</template>

<script setup name="ScssDemo"></script>

<style lang="scss" scoped>
$-color: pink;
$_color: green; // 通过连接符-与下划线_定义的同名变量为同一变量；
.container {
  font: {
    // 有些css属性遵循相同的命名空间 (相同的开头)
    family: fantasy;
    size: 16px;
    weight: bold;
  }
  // font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  .r1 {
    color: $-color {
      // 命名空间也可以包含自己的属性值
      adjust: exact;
    }
    // -webkit-color-adjust: exact;
    -webkit-print-color-adjust: economy;
  }
  
  //  多行注释会编译到.css文件中,compressed（压缩）模式下除外，
  // 将 !作为多行注释的第一个字符表示在压缩输出模式下也保留这条注释，通常用于添加版权信息。

  // * 加!好像打包后也不对留下注释

  /*!
  * 我是
  * 多行
  * 注释
  */.main {
    color: blue;
    &-sidebar {
      color: #ff1;
    }
  }
}
</style>
