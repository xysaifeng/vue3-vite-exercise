<template>
  <div>133</div>
</template>

<script setup name="CompressFile">
// import pako from "pako";
import { o as json } from "./a";

const data = pako.gzip(JSON.stringify(json));
console.log(data, "===dd");

const contents = [
  // [
  //   {
  //     v: "反馈信息",
  //     bl: 1,
  //     ff: 1,
  //     m: "反馈信息",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "CheckMessage",
  //   },
  //   {
  //     v: "商品库关联情况",
  //     bl: 1,
  //     ff: 1,
  //     m: "商品库关联情况",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "SkuRelationFlag",
  //   },
  //   {
  //     v: "操作",
  //     bl: 1,
  //     ff: 1,
  //     m: "操作",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "Operate",
  //   },
  //   {
  //     v: "商品标识",
  //     bl: 1,
  //     ff: 1,
  //     m: "商品标识",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "SeqNo",
  //   },
  //   {
  //     v: "SKU",
  //     bl: 1,
  //     ff: 1,
  //     m: "SKU",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "Sku",
  //   },
  //   {
  //     v: "消费/生产/委托单位名称",
  //     bl: 1,
  //     ff: 1,
  //     m: "消费/生产/委托单位名称",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "ProductionConsumptionName",
  //   },
  //   {
  //     v: "合同协议号",
  //     bl: 1,
  //     ff: 1,
  //     m: "合同协议号",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "ContractNo",
  //   },
  //   {
  //     v: "销售企业",
  //     bl: 1,
  //     ff: 1,
  //     m: "销售企业",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "SalesCompany",
  //   },
  //   {
  //     v: "销售订单号",
  //     bl: 1,
  //     ff: 1,
  //     m: "销售订单号",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "SalesNo",
  //   },
  //   {
  //     v: "销售订单号序号",
  //     bl: 1,
  //     ff: 1,
  //     ht: 0,
  //     m: "销售订单号序号",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "SalesSeqNo",
  //   },
  //   {
  //     v: "商品名称（外文）",
  //     bl: 1,
  //     ff: 1,
  //     m: "商品名称（外文）",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "GoodEnName",
  //   },
  //   {
  //     v: "HS编码",
  //     bl: 1,
  //     ff: 1,
  //     m: "HS编码",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "HsCode",
  //   },
  //   {
  //     v: "CIQ编码",
  //     bl: 1,
  //     ff: 1,
  //     m: "CIQ编码",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "CiqNo",
  //   },
  //   {
  //     v: "HS编码（国际通码）",
  //     bl: 1,
  //     ff: 1,
  //     m: "HS编码（国际通码）",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "CommonCode",
  //   },
  //   {
  //     v: "商品名称",
  //     bl: 1,
  //     ff: 1,
  //     m: "商品名称",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "GoodName",
  //   },
  //   {
  //     v: "监管证单（海关监管条件）",
  //     bl: 1,
  //     ff: 1,
  //     m: "监管证单（海关监管条件）",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "CustomsCertificate",
  //   },
  //   {
  //     v: "监管证单（检验检疫类别）",
  //     bl: 1,
  //     ff: 1,
  //     m: "监管证单（检验检疫类别）",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "CommodityCertificate",
  //   },
  //   {
  //     v: "监管证单信息",
  //     bl: 1,
  //     ff: 1,
  //     m: "监管证单信息",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "Certificate",
  //   },
  //   {
  //     v: "申报要素",
  //     bl: 1,
  //     ff: 1,
  //     m: "申报要素",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "DeclarationElement",
  //   },
  //   {
  //     v: "监管方式",
  //     bl: 1,
  //     ff: 1,
  //     ps: {
  //       width: 100,
  //       height: 48,
  //       value: "支持代码和中文名称",
  //     },
  //     m: "监管方式",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "TradeModeName",
  //   },
  //   {
  //     v: "报关单方案",
  //     bl: 1,
  //     ff: 1,
  //     m: "报关单方案",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "GeneratePlan",
  //   },
  //   {
  //     v: "商品关务方案",
  //     bl: 1,
  //     ff: 1,
  //     m: "商品关务方案",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "Template",
  //   },
  //   {
  //     v: "成交数量",
  //     bl: 1,
  //     ff: 1,
  //     m: "成交数量",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "TradeQty",
  //   },
  //   {
  //     v: "成交单位（外文）",
  //     bl: 1,
  //     ff: 1,
  //     m: "成交单位（外文）",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "TradeUnit",
  //   },
  //   {
  //     v: "成交单位",
  //     bl: 1,
  //     ff: 1,
  //     ps: {
  //       width: 100,
  //       height: 48,
  //       value: "支持代码和中文名称",
  //     },
  //     m: "成交单位",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "GUnitName",
  //   },
  //   {
  //     v: "法定数量",
  //     bl: 1,
  //     ff: 1,
  //     m: "法定数量",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "Qty",
  //   },
  //   {
  //     v: "法定单位",
  //     bl: 1,
  //     ff: 1,
  //     ps: {
  //       width: 100,
  //       height: 48,
  //       value: "支持代码和中文名称",
  //     },
  //     m: "法定单位",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "UnitName",
  //   },
  //   {
  //     v: "第二数量",
  //     bl: 1,
  //     ff: 1,
  //     m: "第二数量",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "Qty2",
  //   },
  //   {
  //     v: "第二单位",
  //     bl: 1,
  //     ff: 1,
  //     m: "第二单位",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     ps: {
  //       width: 100,
  //       height: 48,
  //       value: "支持代码和中文名称",
  //     },
  //     field: "Unit2Name",
  //   },
  //   {
  //     v: "净重",
  //     bl: 1,
  //     ff: 1,
  //     m: "净重",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "NetWt",
  //   },
  //   {
  //     v: "单价",
  //     bl: 1,
  //     ff: 1,
  //     m: "单价",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "Price",
  //   },
  //   {
  //     v: "总价",
  //     bl: 1,
  //     ff: 1,
  //     m: "总价",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "TotalAmt",
  //   },
  //   {
  //     v: "币制",
  //     bl: 1,
  //     ff: 1,
  //     m: "币制",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     ps: {
  //       width: 100,
  //       height: 48,
  //       value: "支持代码和中文名称",
  //     },
  //     field: "CurrName",
  //   },
  //   {
  //     v: "原产国（地区）",
  //     bl: 1,
  //     ff: 1,
  //     m: "原产国（地区）",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     ps: {
  //       width: 100,
  //       height: 48,
  //       value: "支持代码和中文名称",
  //     },
  //     field: "OriginCountryName",
  //   },
  //   {
  //     v: "最终目的地国（地区）",
  //     bl: 1,
  //     ff: 1,
  //     m: "最终目的地国（地区）",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     ps: {
  //       width: 100,
  //       height: 48,
  //       value: "支持代码和中文名称",
  //     },
  //     field: "DestinationCountryName",
  //   },
  //   {
  //     v: "境内货源地",
  //     bl: 1,
  //     ff: 1,
  //     m: "境内货源地",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     ps: {
  //       width: 100,
  //       height: 48,
  //       value: "支持代码和中文名称",
  //     },
  //     field: "DistrictName",
  //   },
  //   {
  //     v: "产地代码",
  //     bl: 1,
  //     ff: 1,
  //     m: "产地代码",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     ps: {
  //       width: 100,
  //       height: 48,
  //       value: "支持代码和中文名称",
  //     },
  //     field: "DestName",
  //   },
  //   {
  //     v: "货物属性",
  //     bl: 1,
  //     ff: 1,
  //     m: "货物属性",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     ps: {
  //       width: 100,
  //       height: 48,
  //       value: "多个货物属性用[|]符号分割！支持代码和中文名称",
  //     },
  //     field: "GoodAttrName",
  //   },
  //   {
  //     v: "用途代码",
  //     bl: 1,
  //     ff: 1,
  //     m: "用途代码",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     ps: {
  //       width: 100,
  //       height: 48,
  //       value: "支持代码和中文名称",
  //     },
  //     field: "UseTo",
  //   },
  //   {
  //     v: "境内交付单号",
  //     bl: 1,
  //     ff: 1,
  //     m: "境内交付单号",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "DomesticNo",
  //   },
  //   {
  //     v: "境内交付单序号",
  //     bl: 1,
  //     ff: 1,
  //     m: "境内交付单序号",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "DomesticSeqNo",
  //   },
  //   {
  //     v: "境内交付日期",
  //     bl: 1,
  //     ff: 1,
  //     m: "境内交付日期",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "DomesticDate",
  //   },
  //   {
  //     v: "库存地点",
  //     bl: 1,
  //     ff: 1,
  //     m: "库存地点",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "DomesticWms",
  //   },
  //   {
  //     v: "库存站点",
  //     bl: 1,
  //     ff: 1,
  //     m: "库存站点",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "DomesticWmsStation",
  //   },
  //   {
  //     v: "境内装运点",
  //     bl: 1,
  //     ff: 1,
  //     m: "境内装运点",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "DomesticShippingPoint",
  //   },
  //   {
  //     v: "境外交付单号",
  //     bl: 1,
  //     ff: 1,
  //     m: "境外交付单号",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "OutlandsNo",
  //   },
  //   {
  //     v: "境外交付单序号",
  //     bl: 1,
  //     ff: 1,
  //     m: "境外交付单序号",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "OutlandsSeqNo",
  //   },
  //   {
  //     v: "境外需方",
  //     bl: 1,
  //     ff: 1,
  //     m: "境外需方",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "MainSupply",
  //   },
  //   {
  //     v: "境外需方物料号",
  //     bl: 1,
  //     ff: 1,
  //     m: "境外需方物料号",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "MainSupplySku",
  //   },
  //   {
  //     v: "采购订单号",
  //     bl: 1,
  //     ff: 1,
  //     m: "采购订单号",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "PurchaseNo",
  //   },
  //   {
  //     v: "采购订单序号",
  //     bl: 1,
  //     ff: 1,
  //     m: "采购订单序号",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "PurchaseSeqNo",
  //   },
  //   {
  //     v: "财务记账号",
  //     bl: 1,
  //     ff: 1,
  //     m: "财务记账号",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "FinanceNo",
  //   },
  //   {
  //     v: "财务记账序号",
  //     bl: 1,
  //     ff: 1,
  //     m: "财务记账序号",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "FinanceSeqNo",
  //   },
  //   {
  //     v: "财务年度",
  //     bl: 1,
  //     ff: 1,
  //     m: "财务年度",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "FinanceYear",
  //   },
  //   {
  //     v: "发票号",
  //     bl: 1,
  //     ff: 1,
  //     m: "发票号",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "InvoiceNo",
  //   },
  //   {
  //     v: "发票项号",
  //     bl: 1,
  //     ff: 1,
  //     m: "发票项号",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "InvoiceSeqNo",
  //   },
  //   {
  //     v: "开票日期",
  //     bl: 1,
  //     ff: 1,
  //     m: "开票日期",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "InvoiceDate",
  //   },
  //   {
  //     v: "内部文件号",
  //     bl: 1,
  //     ff: 1,
  //     m: "内部文件号",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "FileNo",
  //   },
  //   {
  //     v: "财务登记日期",
  //     bl: 1,
  //     ff: 1,
  //     m: "财务登记日期",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "FinanceDate",
  //   },
  //   {
  //     v: "利润中心",
  //     bl: 1,
  //     ff: 1,
  //     m: "利润中心",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "ProfitCenter",
  //   },
  //   {
  //     v: "成本中心",
  //     bl: 1,
  //     ff: 1,
  //     m: "成本中心",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "CostCenter",
  //   },
  //   {
  //     v: "产线",
  //     bl: 1,
  //     ff: 1,
  //     m: "产线",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "ProductLines",
  //   },
  //   {
  //     v: "备注",
  //     bl: 1,
  //     ff: 1,
  //     m: "备注",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "Note",
  //   },
  //   {
  //     v: "企业自编字段I",
  //     bl: 1,
  //     ff: 1,
  //     m: "企业自编字段I",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "Remark1",
  //   },
  //   {
  //     v: "企业自编字段II",
  //     bl: 1,
  //     ff: 1,
  //     m: "企业自编字段II",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "Remark2",
  //   },
  //   {
  //     v: "企业自编字段III",
  //     bl: 1,
  //     ff: 1,
  //     m: "企业自编字段III",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "Remark3",
  //   },
  //   {
  //     v: "企业自编字段IV",
  //     bl: 1,
  //     ff: 1,
  //     m: "企业自编字段IV",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "Remark4",
  //   },
  //   {
  //     v: "企业自编字段V",
  //     bl: 1,
  //     ff: 1,
  //     m: "企业自编字段V",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "Remark5",
  //   },
  //   {
  //     v: "业务串联号",
  //     bl: 1,
  //     ff: 1,
  //     m: "业务串联号",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "AssociationNo",
  //   },
  //   {
  //     v: "id",
  //     bl: 1,
  //     ff: 1,
  //     m: "id",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "Id",
  //   },
  //   {
  //     v: "SkuId",
  //     bl: 1,
  //     ff: 1,
  //     m: "SkuId",
  //     ct: {
  //       fa: "General",
  //       t: "g",
  //     },
  //     field: "SkuId",
  //   },
  // ],
  [
    {
      v: "",
      m: "",
      ct: {
        fa: "@",
        t: "s",
      },
      fc: "#F56C6C",
      bl: "Bold",
    },
    {
      v: "关联成功",
      m: "关联成功",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "删除",
      m: "删除",
      ct: {
        fa: "@",
        t: "s",
      },
      fc: "#FF6A00",
    },
    {
      v: "1",
      m: "1",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "test_wgl_20220714-0001-1",
      m: "test_wgl_20220714-0001-1",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "招贤五彩现代农业开发有限公司",
      m: "招贤五彩现代农业开发有限公司",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "Test-20220510--WGL",
      m: "Test-20220510--WGL",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "4002191100",
      m: "4002191100",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "999",
      m: "999",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "未加工丁苯橡胶",
      m: "未加工丁苯橡胶",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "4|3|工业用料|淡琥珀色碎屑|非充油、非热塑|丁苯橡胶90%碳化钙10%|2020.10.10|无中文品牌,ISP|Test-003Z8323-20220531--超长Test|Test_select_是否超长Test_select_是否超长Test_select_是否超长Test_select_是否超长Test_selct|瑞翁株式会社|Zeon Corporation|19|10%|0",
      m: "4|3|工业用料|淡琥珀色碎屑|非充油、非热塑|丁苯橡胶90%碳化钙10%|2020.10.10|无中文品牌,ISP|Test-003Z8323-20220531--超长Test|Test_select_是否超长Test_select_是否超长Test_select_是否超长Test_select_是否超长Test_selct|瑞翁株式会社|Zeon Corporation|19|10%|0",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "一般贸易",
      m: "一般贸易",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "丹佛斯默认方案",
      m: "丹佛斯默认方案",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "100",
      m: "100",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "千克",
      m: "千克",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "100",
      m: "100",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "千克",
      m: "千克",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "120",
      m: "120",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "100",
      m: "100",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "10",
      m: "10",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "1000",
      m: "1000",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "巴哈马",
      m: "巴哈马",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "3C目录内|3C目录外|无需办理3C认证|预包装",
      m: "3C目录内|3C目录外|无需办理3C认证|预包装",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "PULINA EXCLUSIVE INTERIORS SRL-0039",
      m: "PULINA EXCLUSIVE INTERIORS SRL-0039",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "",
      m: "",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "",
      m: "",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: null,
      m: null,
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "20220719JKTZ01000000029",
      m: "20220719JKTZ01000000029",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "23300",
      m: "23300",
      ct: {
        fa: "@",
        t: "s",
      },
    },
    {
      v: "630998",
      m: "630998",
      ct: {
        fa: "@",
        t: "s",
      },
    },
  ],
];
const f = pako.gzip(JSON.stringify(contents));
// console.log(f);

// console.log(pako.inflate(f, { to: "string" }));

const d = pako.gzip(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log("d: ", d);

// const s = pako.deflate(JSON.stringify(contents), )
// const data = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// console.log(pako.deflate(data));

const zip2 = (s) => {
  const binaryString = pako.gzip(encodeURIComponent(JSON.stringify(s)), {
    to: "string",
  });
  console.log("binaryString: ", binaryString);
  return binaryString;
};

// console.log(zip2(contents));

const zip = (data) => {
  if (!data) return data;
  // 判断数据是否需要转为JSON
  const dataJson =
    typeof data !== "string" && typeof data !== "number"
      ? JSON.stringify(data)
      : data;

  // 使用Base64.encode处理字符编码，兼容中文
  const str = Base64.encode(dataJson);
  let binaryString = pako.gzip(str);
  let arr = Array.from(binaryString);
  let s = "";
  arr.forEach((item, index) => {
    s += String.fromCharCode(item);
  });
  return btoa(s);
};

// console.log(zip(contents));

let content = "我是张三 **@*￥）*￥*）@#*#*@+—— ~kdfkda55d4 fd";
let clientData = pako.deflate(content);
console.log("clientData: ", clientData);

const u = new Uint8Array([
  123, 34, 65, 99, 99, 101, 115, 115, 75, 101, 121, 83, 101, 99, 114, 101, 116,
  34, 58, 34, 52, 56, 115, 56, 115, 120, 52, 119, 102, 117, 115, 111, 80, 88,
  103, 86, 68, 75, 103, 105, 66, 56, 34, 125,
]);
let str = String.fromCharCode.apply(null, u);
console.log("str: ", str);
var res = JSON.parse(str);
console.log("res: ", res);
console.log(res.AccessKeySecret, "-----jjj");

const o = { AccessKeySecret: "48s8sx4wfusoPXgVDKgiB8" };
const z = pako.deflate(JSON.stringify(o));
// console.log("z: ", z);
const uz = pako.inflate(z);
// console.log("uz: ", uz);

// clientData = clientData.toString();
// console.log("clientData: ", clientData);

// let c = pako.inflate(clientData, { to: "string" });
// console.log("c: ", c);
</script>

<style lang="scss" scoped></style>
