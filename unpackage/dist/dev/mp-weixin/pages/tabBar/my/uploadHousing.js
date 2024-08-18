"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Array) {
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  (_easycom_uni_number_box2 + _easycom_uni_easyinput2)();
}
const _easycom_uni_number_box = () => "../../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  (_easycom_uni_number_box + _easycom_uni_easyinput + common_vendor.unref(Location))();
}
const Location = () => "../../../components/location.js";
const _sfc_main = {
  __name: "uploadHousing",
  setup(__props) {
    const styles = common_vendor.reactive({
      "borderColor": "#ffffff"
    });
    const locationVisible = common_vendor.ref(false);
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$6,
        b: common_assets._imports_1$4,
        c: common_vendor.o(($event) => locationVisible.value = true),
        d: common_vendor.p({
          min: 1
        }),
        e: common_assets._imports_1$4,
        f: common_vendor.p({
          styles,
          type: "textarea",
          autoHeight: false,
          placeholder: "请输入内容"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dd60ae10"]]);
wx.createPage(MiniProgramPage);
