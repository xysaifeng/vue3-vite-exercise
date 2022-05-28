<template>
  <div>
    <div>
      <el-button @click="reset">click</el-button>
    </div>
    <div
      id="zzh"
      style="
        margin: 0px;
        padding: 0px;
        position: absolute;
        width: 100%;
        height: 80%;
        left: 0px;
        top: 20%;
      "
    ></div>
  </div>
</template>

<script setup>
import { nextTick, onMounted } from "@vue/runtime-core";
import { data } from "./sheet";
console.log("data: 222", data);

onMounted(() => {
  init();
  function handleClick() {
    console.log(212);
  }
});

const reset = async () => {
  luckysheet.destroy();
  console.log(JSON.parse(JSON.stringify(options)), "====ops");
  // luckysheet.refresh();
  // await nextTick()
  // setTimeout(() => {
  //  luckysheet.destroy()
  // const option = {...options}
  const option = JSON.parse(JSON.stringify(options));
  option.data = [
    {
    name: "Cell", //工作表名称
    color: "red", //工作表颜色
    index: "0", //工作表索引
    status: "1", //激活状态
    order: "0", //工作表的顺序
    hide: 0, //是否隐藏
    row: 36, //行数
    column: 10, //列数
    config: {
      merge: {}, //合并单元格
      rowlen: {}, //表格行高
      columnlen: {}, //表格列宽
      rowhidden: {}, //隐藏行
      colhidden: {}, //隐藏列
      borderInfo: {}, //边框
      authority: {
        selectLockedCells: 1, //选定锁定单元格
        selectunLockedCells: 1, //选定解除锁定的单元格
        formatCells: 1, //设置单元格格式
        formatColumns: 1, //设置列格式
        formatRows: 1, //设置行格式
        insertColumns: 0, //插入列
        insertRows: 0, //插入行
        insertHyperlinks: 1, //插入超链接
        deleteColumns: 0, //删除列
        deleteRows: 0, //删除行
        sort: 1, //排序
        filter: 1, //使用自动筛选
        usePivotTablereports: 1, //使用数据透视表和报表
        editObjects: 1, //编辑对象
        editScenarios: 1, //编辑方案
        sheet: true, //如果为1或true，则该工作表受到保护；如果为0或false，则该工作表不受保护。
        password: "1", //密码
        hintText: "disable", //弹窗提示的文字
        algorithmName: "None", //加密方案：MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
        saltValue: null, //密码解密的盐参数，为一个自己定的随机数值

        allowRangeList: [
          {
            //区域保护
            name: "area", //名称
            password: "", //密码
            hintText: "区域保护", //提示文字
            algorithmName: "None", //加密方案：MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
            saltValue: null, //密码解密的盐参数，为一个自己定的随机数值
            sqref: "$A$1:$H$36", //区域范围
          },
          {
            //区域保护
            name: "area", //名称
            password: "", //密码
            hintText: "区域保护", //提示文字
            algorithmName: "None", //加密方案：MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
            saltValue: null, //密码解密的盐参数，为一个自己定的随机数值
            sqref: "$J$1:$J$36", //区域范围
          },
        ],
      },
    },
    celldata: data, //初始化使用的单元格数据
    // data: [], //更新和存储使用的单元格数据
    scrollLeft: 0, //左右滚动条位置
    scrollTop: 0, //上下滚动条位置
    luckysheet_select_save: [], //选中的区域
    luckysheet_conditionformat_save: {}, //条件格式
    calcChain: [], //公式链
    isPivotTable: false, //是否数据透视表
    pivotTable: {}, //数据透视表设置
    filter_select: {}, //筛选范围
    filter: null, //筛选配置
    luckysheet_alternateformat_save: [], //交替颜色
    luckysheet_alternateformat_save_modelCustom: [], //自定义交替颜色
    freezen: {}, //冻结行列
    chart: [], //图表配置
    visibledatarow: [], //所有行的位置
    visibledatacolumn: [], //所有列的位置
    ch_width: 2322, //工作表区域的宽度
    rh_height: 949, //工作表区域的高度
    // load: "0", //已加载过此sheet的标识

    image: [], //图片
    showGridLines: 1, //是否显示网格线
    dataVerification: {}, //数据验证配置
  }
  ]
  // option.data[0].load = 0;
  // const s = Reflect.set(option.data[0], 'load', 0)
  // console.log('s: ', s);

  // option.data[0].celldata = data;
  // const s2 = Reflect.set(option.data[0], 'celldata', data)
  // console.log('s2: ', s2);

  luckysheet.create(option);
  // option.data[0].load = 0
  // option.data[0].celldata = data
  setTimeout(() => {
    // luckysheet.create(option);
  }, 1000);

  // luckysheet.create({
  //   container: "zzh", //luckysheet为容器id
  //   title: "data", //表 头名
  //   lang: "zh", //中文
  //   column: 10, //列数
  //   row: 30, //行数
  //   showtoolbar: true, //是否显示工具栏
  //   showinfobar: true, //是否显示顶部信息栏
  //   showsheetbar: true, //是否显示底部sheet按钮
  //   showstatisticBar: true, //底部计数栏
  //   allowEdit: true, //是否允许前端编辑
  //   enableAddRow: false, //允许添加行
  //   enableAddBackTop: false, //允许回到顶部
  //   autoFormatw: false, //自动格式化超过4位数的数字为‘亿万格式
  //   accuracy: 0, //
  //   cellRightClickConfig: {
  //     //自定义配置单元右键菜单
  //     copy: true, // 复制
  //     copyAs: true, // 复制为
  //     paste: true, // 粘贴
  //     insertRow: true, // 插入行insert row
  //     insertColumn: true, // 插入列insert column
  //     deleteRow: true, // 删除选中行的数据 delete the selected row
  //     deleteColumn: true, // 删除选中列的数据delete the selected column
  //     deleteCell: false, // delete cell
  //     hideRow: true, // hide the selected row and display the selected row
  //     hideColumn: true, // hide the selected column and display the selected column
  //     rowHeight: true, // 设置行高
  //     columnWidth: true, // 设置行宽
  //     clear: true, // 清空选定内容clear content
  //     matrix: false, //矩阵 matrix operation selection
  //     sort: false, // 排序sort selection
  //     filter: false, //筛选 filter selection
  //     chart: false, //图表生成 chart generation
  //     image: false, //插入图片 insert picture
  //     link: false, // 插入连接，比如网址之类insert link
  //     data: false, //数据校验 data verification
  //     cellFormat: false, //设置单元格格式，锁定单元格格式，隐藏公示等 Set cell format
  //   },
  //   rowHeaderWidth: 40,
  //   columnHeaderHeight: 30,
  //   sheetFormulaBar: true, //是否显示公式栏
  //   limitSheetNameLength: true, //是否显示公式栏
  //   defaultSheetNameMaxLength: 10, //是否显示公式栏
  //   data: [
  //     {
  //       name: "Cell", //工作表名称
  //       color: "red", //工作表颜色
  //       index: "0", //工作表索引
  //       status: "1", //激活状态
  //       order: "0", //工作表的顺序
  //       hide: 0, //是否隐藏
  //       row: 36, //行数
  //       column: 10, //列数
  //       config: {
  //         merge: {}, //合并单元格
  //         rowlen: {}, //表格行高
  //         columnlen: {}, //表格列宽
  //         rowhidden: {}, //隐藏行
  //         colhidden: {}, //隐藏列
  //         borderInfo: {}, //边框
  //         authority: {
  //           selectLockedCells: 1, //选定锁定单元格
  //           selectunLockedCells: 1, //选定解除锁定的单元格
  //           formatCells: 1, //设置单元格格式
  //           formatColumns: 1, //设置列格式
  //           formatRows: 1, //设置行格式
  //           insertColumns: 0, //插入列
  //           insertRows: 0, //插入行
  //           insertHyperlinks: 1, //插入超链接
  //           deleteColumns: 0, //删除列
  //           deleteRows: 0, //删除行
  //           sort: 1, //排序
  //           filter: 1, //使用自动筛选
  //           usePivotTablereports: 1, //使用数据透视表和报表
  //           editObjects: 1, //编辑对象
  //           editScenarios: 1, //编辑方案
  //           sheet: true, //如果为1或true，则该工作表受到保护；如果为0或false，则该工作表不受保护。
  //           password: "1", //密码
  //           hintText: "disable", //弹窗提示的文字
  //           algorithmName: "None", //加密方案：MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
  //           saltValue: null, //密码解密的盐参数，为一个自己定的随机数值

  //           allowRangeList: [
  //             {
  //               //区域保护
  //               name: "area", //名称
  //               password: "", //密码
  //               hintText: "区域保护", //提示文字
  //               algorithmName: "None", //加密方案：MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
  //               saltValue: null, //密码解密的盐参数，为一个自己定的随机数值
  //               sqref: "$A$1:$H$36", //区域范围
  //             },
  //             {
  //               //区域保护
  //               name: "area", //名称
  //               password: "", //密码
  //               hintText: "区域保护", //提示文字
  //               algorithmName: "None", //加密方案：MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
  //               saltValue: null, //密码解密的盐参数，为一个自己定的随机数值
  //               sqref: "$J$1:$J$36", //区域范围
  //             },
  //           ],
  //         },
  //       },
  //       celldata: [...data], //初始化使用的单元格数据
  //       // data: [], //更新和存储使用的单元格数据
  //       scrollLeft: 0, //左右滚动条位置
  //       scrollTop: 0, //上下滚动条位置
  //       luckysheet_select_save: [], //选中的区域
  //       luckysheet_conditionformat_save: {}, //条件格式
  //       calcChain: [], //公式链
  //       isPivotTable: false, //是否数据透视表
  //       pivotTable: {}, //数据透视表设置
  //       filter_select: {}, //筛选范围
  //       filter: null, //筛选配置
  //       luckysheet_alternateformat_save: [], //交替颜色
  //       luckysheet_alternateformat_save_modelCustom: [], //自定义交替颜色
  //       freezen: {}, //冻结行列
  //       chart: [], //图表配置
  //       visibledatarow: [], //所有行的位置
  //       visibledatacolumn: [], //所有列的位置
  //       ch_width: 2322, //工作表区域的宽度
  //       rh_height: 949, //工作表区域的高度
  //       load: "1", //已加载过此sheet的标识

  //       image: [], //图片
  //       showGridLines: 1, //是否显示网格线
  //       dataVerification: {}, //数据验证配置
  //     },
  //   ],
  // });

  // luckysheet.refresh();
  // }, 10);
};

var options = ({
  container: "zzh", //luckysheet为容器id
  title: "zzh", //表 头名
  lang: "zh", //中文
  column: 10, //列数
  row: 30, //行数
  showtoolbar: true, //是否显示工具栏
  // showtoolbarConfig: {
  //   undoRedo: true,
  //   font: true,
  // },
  showinfobar: true, //是否显示顶部信息栏
  showsheetbar: true, //是否显示底部sheet按钮
  showstatisticBar: true, //底部计数栏
  allowEdit: true, //是否允许前端编辑
  enableAddRow: false, //允许添加行
  enableAddBackTop: false, //允许回到顶部
  autoFormatw: false, //自动格式化超过4位数的数字为‘亿万格式
  accuracy: 0, //
  allowCopy: false, //
  userInfo:
    '<i style="font-size:16px;color:#ff6a00;" class="fa fa-taxi" aria-hidden="true"></i> Lucky',
  userMenuItem: [
    {
      url: "www.baidu.com",
      icon: '<i class="fa fa-folder" aria-hidden="true"></i>',
      name: "我的表格",
    },
    {
      url: "www.baidu.com",
      icon: '<i class="fa fa-sign-out" aria-hidden="true"></i>',
      name: "退出登陆",
    },
  ],

  myFolderUrl: "https://www.cnblogs.com/javascript9527/", //<左上角的“后退”按钮的链接
  // functionButton:
  //   '<button id="" class="btn btn-primary" style="padding:3px 6px;font-size: 12px;margin-right: 10px;">download</button> <button id="" class="btn btn-primary btn-danger" style=" padding:3px 6px; font-size: 12px; margin-right: 10px;">share</button> <button id="luckysheet-share-btn-title" class="btn btn-primary btn-danger" style=" padding:3px 6px; font-size: 12px; margin-right: 10px;">show data</button>', //右上角按钮
  functionButton:
    '<button id="" class="btn btn-primary" style="padding:3px 6px;font-size: 12px;margin-right: 10px;" onClick="this.handleClick">下载</button> <button id="" class="btn btn-primary btn-danger" style=" padding:3px 6px; font-size: 12px; margin-right: 10px;">分享</button> <button id="luckysheet-share-btn-title" class="btn btn-primary btn-danger" style=" padding:3px 6px; font-size: 12px; margin-right: 10px;">秀数据</button>', //右上角按钮
  cellRightClickConfig: {
    //自定义配置单元右键菜单
    copy: true, // 复制
    copyAs: true, // 复制为
    paste: true, // 粘贴
    insertRow: true, // 插入行insert row
    insertColumn: true, // 插入列insert column
    deleteRow: true, // 删除选中行的数据 delete the selected row
    deleteColumn: true, // 删除选中列的数据delete the selected column
    deleteCell: false, // delete cell
    hideRow: true, // hide the selected row and display the selected row
    hideColumn: true, // hide the selected column and display the selected column
    rowHeight: true, // 设置行高
    columnWidth: true, // 设置行宽
    clear: true, // 清空选定内容clear content
    matrix: false, //矩阵 matrix operation selection
    sort: false, // 排序sort selection
    filter: false, //筛选 filter selection
    chart: false, //图表生成 chart generation
    image: true, //插入图片 insert picture
    link: false, // 插入连接，比如网址之类insert link
    data: false, //数据校验 data verification
    cellFormat: false, //设置单元格格式，锁定单元格格式，隐藏公示等 Set cell format
  },
  rowHeaderWidth: 40,
  columnHeaderHeight: 30,
  sheetFormulaBar: true, //是否显示公式栏
  limitSheetNameLength: true, //是否显示公式栏
  defaultSheetNameMaxLength: 10, //是否显示公式栏

  // pager: {
  //   pageIndex: 1, //当前的页码
  //   pageSize: 10, //每页显示多少行数据
  //   total: 50, //数据总行数
  //   selectOption: [10, 20], //允许设置每页行数的选项
  // },

  hook: {
    onTogglePager(n) {
      console.log(n);
    },
    cellEditBefore() {
      console.log(arguments, "cellEditBefore");
      // return false
    },
    cellUpdateBefore(r, c, value, isRefresh) {
      // console.log('r,c,value, isRefresh: ', r,c,value, isRefresh);
      // console.log(arguments, "cellUpdateBefore");
      // return false;
    },
    cellUpdated(r, c, oldValue, newValue, isRefresh) {
      // console.log('r,c,oldValue, newValue, isRefresh: ', r,c,oldValue, newValue, isRefresh);
      // console.log(arguments, "cellUpdated");
    },
    cellRenderBefore(r, c, start_r, start_c, end_r, end_c, sheet, ctx) {
      // console.log('ctx: ', ctx);
      // console.log('sheet: ', sheet);
      // console.log('r,c,start_r, start_c, end_r, end_c,: ', r,c,start_r, start_c, end_r, end_c,);
    },
    cellRenderAfter: function (cell, position, sheetFile, ctx) {
      // console.log('position: ', position);
      var r = position.r;
      var c = position.c;
      if (r === 0 && c === 3) {
        // 指定处理D1单元格
        if (!window.storeUserImage) {
          window.storeUserImage = {};
        }
        if (!window.storeUserImage[r + "_" + c]) {
          window.storeUserImage[r + "_" + c] = {};
        }
        var img = null;
        var imgRight = null;
        if (
          window.storeUserImage[r + "_" + c].image &&
          window.storeUserImage[r + "_" + c].imgRight
        ) {
          // 加载过直接取
          img = window.storeUserImage[r + "_" + c].image;
          imgRight = window.storeUserImage[r + "_" + c].imgRight;
        } else {
          img = new Image();
          imgRight = new Image();
          img.src = "https://img01.yzcdn.cn/wsc/sign/header-new@3x.png";

          imgRight.src = "https://img01.yzcdn.cn/wsc/sign/header-new@3x.png";
          // 图片缓存到内存，下次直接取，不用再重新加载
          window.storeUserImage[r + "_" + c].image = img;
          window.storeUserImage[r + "_" + c].imgRight = imgRight;
        }
        if (img.complete) {
          // 已经加载完成的直接渲染
          ctx.drawImage(img, position.start_c, position.start_r, 10, 10);
        } else {
          img.onload = function () {
            ctx.drawImage(img, position.start_c, position.start_r, 10, 10);
          };
        }
        if (imgRight.complete) {
          ctx.drawImage(
            imgRight,
            position.end_c - 10,
            position.end_r - 10,
            10,
            10
          );
        } else {
          imgRight.onload = function () {
            ctx.drawImage(
              imgRight,
              position.end_c - 10,
              position.end_r - 10,
              10,
              10
            );
          };
        }
      }
    },
    cellAllRenderBefore(data, sheet, ctx) {
      // console.log('data,sheet, ctx: ', data,sheet, ctx);
    },
    cellMousedown(cell, position, sheet, ctx) {
      // console.log('cell,position: ', cell,position);
    },
    sheetMouseup(cell, position, sheet, moveState, ctx) {
      // console.log('cell,position,sheet,moveState, ctx: ', cell,position,sheet,moveState, ctx);
    },
    sheetActivate(i, isPivotInitial, isNewSheet) {
      // console.log('i,isPivotInitial,isNewSheet: ', i,isPivotInitial,isNewSheet);
    },
    updated(operate) {
      console.log("operate: ", operate);
      return true;
    },
  },
  data: [
    {
      name: "Cell2", //工作表名称
      color: "red", //工作表颜色
      index: "0", //工作表索引
      status: "1", //激活状态
      order: "0", //工作表的顺序
      hide: 0, //是否隐藏
      row: 36, //行数
      // frozen: { type: "both" },
      column: 20, //列数
      config: {
        merge: {}, //合并单元格
        rowlen: {}, //表格行高
        columnlen: {}, //表格列宽
        rowhidden: {}, //隐藏行
        colhidden: {}, //隐藏列
        borderInfo: {}, //边框
        authority: {
          selectLockedCells: 1, //选定锁定单元格
          selectunLockedCells: 1, //选定解除锁定的单元格
          formatCells: 1, //设置单元格格式
          formatColumns: 1, //设置列格式
          formatRows: 1, //设置行格式
          insertColumns: 0, //插入列
          insertRows: 0, //插入行
          insertHyperlinks: 1, //插入超链接
          deleteColumns: 1, //删除列
          deleteRows: 1, //删除行
          sort: 1, //排序
          filter: 1, //使用自动筛选
          usePivotTablereports: 1, //使用数据透视表和报表
          editObjects: 1, //编辑对象
          editScenarios: 1, //编辑方案
          sheet: true, //如果为1或true，则该工作表受到保护；如果为0或false，则该工作表不受保护。
          password: "1", //密码
          hintText: "disable", //弹窗提示的文字
          algorithmName: "None", //加密方案：MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
          saltValue: null, //密码解密的盐参数，为一个自己定的随机数值

          allowRangeList: [
            {
              //区域保护
              name: "area", //名称
              password: "", //密码
              hintText: "区域保护", //提示文字
              algorithmName: "None", //加密方案：MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
              saltValue: null, //密码解密的盐参数，为一个自己定的随机数值
              sqref: "$A$1:$H$36", //区域范围
            },
            {
              //区域保护
              name: "area", //名称
              password: "", //密码
              hintText: "区域保护", //提示文字
              algorithmName: "None", //加密方案：MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
              saltValue: null, //密码解密的盐参数，为一个自己定的随机数值
              sqref: "$J$1:$J$36", //区域范围
            },
          ],
        },
      },
      // celldata: [], //初始化使用的单元格数据
      // data: [], //更新和存储使用的单元格数据
      scrollLeft: 0, //左右滚动条位置
      scrollTop: 0, //上下滚动条位置
      luckysheet_select_save: [], //选中的区域
      luckysheet_conditionformat_save: {}, //条件格式
      calcChain: [], //公式链
      isPivotTable: false, //是否数据透视表
      pivotTable: {}, //数据透视表设置
      filter_select: {}, //筛选范围
      filter: null, //筛选配置
      luckysheet_alternateformat_save2: [], //交替颜色
      luckysheet_alternateformat_save: [
        {
          cellrange: {
            //单元格范围
            row: [1, 5],
            column: [1, 6],
          },
          format: {
            head: {
              //页眉颜色
              fc: "#000",
              bc: "blue",
            },
            one: {
              //第一种颜色
              fc: "#000",
              bc: "red",
            },
            two: {
              //第二种颜色
              fc: "#000",
              bc: "purple",
            },
            foot: {
              //页脚颜色
              fc: "#000",
              bc: "pink",
            },
          },
          hasRowHeader: true, //含有页眉
          hasRowFooter: true, //含有页脚
        },
      ], //交替颜色
      // luckysheet_alternateformat_save_modelCustom: [], //自定义交替颜色
      luckysheet_alternateformat_save_modelCustom2: [
        {
          head: {
            //页眉颜色
            fc: "#6aa84f",
            bc: "#ffffff",
          },
          one: {
            //第一种颜色
            fc: "#000",
            bc: "purple",
          },
          two: {
            //第二种颜色
            fc: "#000",
            bc: "purple",
          },
          foot: {
            //页脚颜色
            fc: "#000",
            bc: "purple",
          },
        },
      ], //自定义交替颜色
      // freezen: {}, //冻结行列
      chart: [], //图表配置
      visibledatarow: [], //所有行的位置
      visibledatacolumn: [], //所有列的位置
      ch_width: 2322, //工作表区域的宽度
      rh_height: 949, //工作表区域的高度
      // load: "0", //已加载过此sheet的标识

      image: [], //图片
      showGridLines: 1, //是否显示网格线
      dataVerification: {}, //数据验证配置
    },
  ],
});

function handleClick() {
  console.log(212);
}
function init() {
  function handleClick() {
    console.log(212);
  }

  luckysheet.create(options);
  console.log("luckysheet: ", luckysheet);
}
</script>

<style lang="scss" scoped></style>
