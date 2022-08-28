Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    hamburgerPopupRef(ref) {
      // 将ref存起来，在想要调用的地方使用
      this.hamburgerPopupRef = ref;
    },
    // 展示侧边汉堡弹框
    showHamburgerPopup() {
      console.log(" this.hamburgerPopupRef", this.hamburgerPopupRef);

      this.hamburgerPopupRef.setData({
        basicShow: true
      });
    }
  }
});
