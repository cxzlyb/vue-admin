import { addClass, removeClass } from "@/utils/tool";
import { theme } from '@/styles/element-variables.scss';
const defaultSettings = require("@/setting");
const { tagsView, fixedHeader, sidebarLogo, showSettings } = defaultSettings;
const state = {
  themeStyle: "default",
  themeList: [
    {
      label: "default",
      text: "默认"
    }, {
      label: "custom",
      text: "暗色"
    }
  ],
  chalk: '',
  theme,
  tagsView,
  fixedHeader,
  sidebarLogo,
  showSettings,
  isSetting: false
};
const mutations = {
  changeTheme (state, value) {
    state.themeStyle = value;
    switch (value) {
      case "default":
        removeClass(document.body, "custom-theme");
        break;
      case "custom":
        addClass(document.body, "custom-theme");
        break;
      default:
        break;
    }
  },
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  },
  CHANGE_ISSETTING (state, value) {
    if (value === undefined) {
      state.isSetting = !state.isSetting;
    } else {
      state.isSetting = value;
    }
  }
};
const actions = {
  changeSetting ({ commit }, data) {
    commit('CHANGE_SETTING', data);
  }
};
export default {
  state,
  mutations,
  actions
};
