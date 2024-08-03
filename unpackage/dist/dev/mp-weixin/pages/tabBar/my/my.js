"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "my",
  setup(__props) {
    function handleGoPage(url) {
      console.log(url);
      common_vendor.index.navigateTo({
        url
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => handleGoPage("/pages/tabBar/my/myHousing"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-989a1478"], ["__file", "D:/WTT/job/shestays-uniapp/pages/tabBar/my/my.vue"]]);
wx.createPage(MiniProgramPage);
