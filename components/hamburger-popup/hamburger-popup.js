Component({
  mixins: [],
  data: {
    basicShow: false,
    dataOrigin: {
      xiaoxi: [
        { icon: "", text: "我的消息" },
        { icon: "", text: "云贝中心" },
        { icon: "", text: "创作者中心" }
      ],
      音乐: [
        { icon: "", text: "云村" },
        { icon: "", text: "商" },
        { icon: "", text: "多多" }
      ],
      其他: [
        { icon: "", text: "设" },
        { icon: "", text: "深色", hasArrow: false },
        { icon: "", text: "定时" }
      ],
      dingdan: [
        { icon: "", text: "我的订单" },
        { icon: "", text: "优惠" },
        { icon: "", text: "客服" }
      ]
    }
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handlePopupClose() {
      console.log("关闭了");

      this.setData({
        basicShow: false
      });
    },
    // 汉堡弹框扫一扫
    scan() {
      my.alert({
        title: "关联没弄,扫不了"
      });
      console.log("扫码");

      // 关联没弄,扫不了
      // dd.scan({
      //   type: "all"
      // })
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    },
    jumpfFlyaPage() {
      my.navigateTo({
        url: "/pages/fFlyaPage/fFlyaPage",
        success: () => {},
        fail: () => {},
        complete: () => {}
      });
    }
  }
});
