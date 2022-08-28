Component({
  mixins: [],
  data: {
    basicShow: false
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
    }
  }
});
