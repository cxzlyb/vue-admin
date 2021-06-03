<template>
  <div>
<!--    <p>-->
<!--      <span>主题风格:&nbsp;&nbsp;</span>-->
<!--      <el-radio-group v-model="status" @change="changeTheme">-->
<!--        <el-radio v-for='item in themeList' :label="item.label" :key='item.label'>{{item.text}}</el-radio>-->
<!--      </el-radio-group>-->
<!--    </p>-->
    <span>主题色:&nbsp;&nbsp;</span>
    <ThemePicker style="float: right;height: 26px;margin: -3px 100px 0 0" @change="themeChange"></ThemePicker>
  </div>
</template>
<script>
// import "@/assets/custom-theme/index.css";
import ThemePicker from '@/components/ThemePicker';
import { mapState, mapMutations } from "vuex";
export default {
  name: "changeTheme",
  data () {
    return {
      status: ""
    };
  },
  components: { ThemePicker },
  computed: {
    ...mapState("settings", [
      "themeStyle",
      "themeList",
      "theme"
    ]
    )
  },
  methods: {
    ...mapMutations("settings", [
      "changeTheme"
    ]),
    themeChange (val) {
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      });
    },
    switchTheme () {
      this.changeTheme(this.status);
    }
  },
  mounted () {
    // this.status = this.themeStyle;
    // this.switchTheme();
  }
};
</script>
<style lang="scss">
</style>
