export default {
  // 获取联系人列表
  getContactlist: {
    method: "get",
    url: "/contactlist"
  },
  // 新建联系人 form-data
  newContactForm: {
    method: "post",
    url: "/contact/new/form"
  },
  // 新建联系人 application/json
  newContactJson: {
    method: "post",
    url: "/contact/new/json"
  },
  // 编辑联系人
  editContact: {
    method: "get",
    url: "/api/breeds/image/random",
    baseURL: "https://dog.ceo"
  },
  // 删除联系人
  delContact: {
    method: "delete",
    url: "/contact"
  }
};
