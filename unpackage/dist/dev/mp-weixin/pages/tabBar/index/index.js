"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_api_common = require("../../../common/api/common.js");
require("../../../common/js/request.js");
require("../../../common/config/index.js");
require("../../../common/js/cache.js");
require("../../../store/index.js");
require("../../../common/js/util.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref("首页");
    common_vendor.onLoad(() => {
      getHouseListFun();
      console.log("进入首页11111");
    });
    common_vendor.onShareAppMessage(() => {
    });
    common_vendor.onReachBottom(() => {
      if (loadStatus.value != "noMore") {
        pages.pageIndex++;
        getHouseListFun();
      }
    });
    common_vendor.onPullDownRefresh(() => {
      pages.pageIndex = 1;
      listData.value = [];
      getHouseListFun("refresh");
    });
    function handleSearch() {
      common_vendor.index.navigateTo({
        url: "/pages/public/search/search"
      });
    }
    const loadStatus = common_vendor.ref("contentdown");
    const listData = common_vendor.ref([]);
    const pages = common_vendor.reactive({
      pageIndex: 1,
      totalPage: 0
      //总共有多少页数据
    });
    const getHouseListFun = async (type) => {
      loadStatus.value = "loading";
      try {
        const res = await common_api_common.getHouseList({
          pageIndex: pages.pageIndex
        });
        if (res.code == 200) {
          listData.value = listData.value.concat(res.data.data);
          pages.totalPage = res.data.pageCount;
          if (type == "refresh") {
            common_vendor.index.showToast({
              title: "刷新成功",
              icon: "none"
            });
          }
        }
        if (pages.pageIndex >= res.data.pageCount) {
          loadStatus.value = "noMore";
        }
        console.log("房源", listData.value);
      } catch (e) {
        console.log("列表错误==", e);
      }
    };
    const goPage = (url) => {
      common_vendor.index.navigateTo({
        url
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(handleSearch),
        b: listData.value.length > 0
      }, listData.value.length > 0 ? {
        c: common_vendor.f(3, (item, i, i0) => {
          return {
            a: common_vendor.o(($event) => goPage("/pages/houseDetail/houseDetail"), i),
            b: i
          };
        })
      } : {}, {
        d: listData.value.length > 0
      }, listData.value.length > 0 ? {
        e: common_vendor.p({
          status: loadStatus.value
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-036b8cf8"], ["__file", "D:/wtt/prictice/shestays-uniapp/pages/tabBar/index/index.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
