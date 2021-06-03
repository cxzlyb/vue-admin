<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">设置</h3>

      <div class="drawer-item">
        <changeTheme></changeTheme>
      </div>

      <div class="drawer-item">
        <span>是否开启Tags-View:</span>
        <el-switch v-model="tagsView" class="drawer-switch" active-text="开启" inactive-text="关闭"/>
      </div>

      <div class="drawer-item">
        <span>头部是否固定:</span>
        <el-switch v-model="fixedHeader" class="drawer-switch" active-text="固定" inactive-text="不固定"/>
      </div>

      <div class="drawer-item">
        <span>侧边logo是否显示:</span>
        <el-switch v-model="sidebarLogo" class="drawer-switch" active-text="显示" inactive-text="不显示"/>
      </div>

    </div>
  </div>
</template>

<script>
import changeTheme from '@/components/changeTheme';

export default {
  components: { changeTheme },
  data () {
    return {};
  },
  computed: {
    fixedHeader: {
      get () {
        return this.$store.state.settings.fixedHeader;
      },
      set (val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'fixedHeader',
          value: val
        });
      }
    },
    tagsView: {
      get () {
        return this.$store.state.settings.tagsView;
      },
      set (val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'tagsView',
          value: val
        });
      }
    },
    sidebarLogo: {
      get () {
        return this.$store.state.settings.sidebarLogo;
      },
      set (val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'sidebarLogo',
          value: val
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: #000;
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right
  }
}
</style>
