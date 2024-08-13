export default {
  api: {
    operationSuccess: '操作成功',
    operationFailed: '操作失败',
    errorTip: '错误提示',
    successTip: '成功提示',
    errorMessage: '操作失败,系统异常!',
    timeoutMessage: '登录超时,请重新登录!',
    apiTimeoutMessage: '接口请求超时,请刷新页面重试!',
    apiRequestFailed: '请求出错，请稍候重试',
    networkException: '网络异常',
    networkExceptionMsg: '网络异常，请检查您的网络连接是否正常!',
    refreshBrowser: '网络当前繁忙，请按F5刷新浏览器',

    errMsg401: '用户没有权限（令牌、用户名、密码错误）!',
    errMsg403: '用户得到授权，但是访问是被禁止的。!',
    errMsg404: '网络请求错误,未找到该资源!',
    errMsg405: '网络请求错误,请求方法未允许!',
    errMsg408: '网络请求超时!',
    errMsg500: '服务器错误,请联系管理员!',
    errMsg501: '网络未实现!',
    errMsg502: '网络错误!',
    errMsg503: '服务不可用，服务器暂时过载或维护!',
    errMsg504: '网络超时!',
    errMsg505: 'http版本不支持该请求!',
  },
  app: { logoutTip: '温馨提醒', logoutMessage: '是否确认退出系统?', menuLoading: '菜单加载中...' },
  errorLog: {
    tableTitle: '错误日志列表',
    tableColumnType: '类型',
    tableColumnDate: '时间',
    tableColumnFile: '文件',
    tableColumnMsg: '错误信息',
    tableColumnStackMsg: 'stack信息',

    tableActionDesc: '详情',

    modalTitle: '错误详情',

    fireVueError: '点击触发vue错误',
    fireResourceError: '点击触发资源加载错误',
    fireAjaxError: '点击触发ajax错误',

    enableMessage: '只在`/src/settings/projectSetting.ts` 内的useErrorHandle=true时生效.',
  },
  exception: {
    backLogin: '返回登录',
    backHome: '返回首页',
    subTitle403: '抱歉，您无权访问此页面。',
    subTitle404: '抱歉，您访问的页面不存在。',
    subTitle500: '抱歉，服务器报告错误。',
    noDataTitle: '当前页无数据',
    networkErrorTitle: '网络错误',
    networkErrorSubTitle: '抱歉，您的网络连接已断开，请检查您的网络！',
  },
  lock: {
    unlock: '点击解锁',
    alert: '锁屏密码错误',
    backToLogin: '返回登录',
    entry: '进入系统',
    placeholder: '请输入锁屏密码或者用户密码',
  },
  login: {
    captcha: '验证码',
    backSignIn: '返回',
    signInFormTitle: '登录',
    mobileSignInFormTitle: '手机登录',
    qrSignInFormTitle: '扫码登录',
    emailFormTitle: '邮箱登录',
    signUpFormTitle: '注册租户',
    forgetFormTitle: '重置密码',

    signInTitle: 'HO-STAR MARINE ERP',
    signInDesc: '© 2024-2030 HO-STAR MARINE SOLUTIONS CORPORATION - 版权所有',
    policy: '我同意，《万森ERP系统》隐私政策',
    scanSign: `扫码后点击"确认"，即可完成登录`,

    loginButton: '登录',
    registerButton: '注册租户',
    rememberMe: '记住我',
    forgetPassword: '忘记密码?',
    otherSignIn: '其他登录方式',

    // notify
    loginSuccessTitle: '登录成功',
    loginSuccessDesc: '欢迎回来',

    // placeholder
    accountPlaceholder: '请输入账号',
    passwordPlaceholder: '请输入密码',
    captchaPlaceholder: '请输入验证码',
    smsPlaceholder: '请输入验证码',
    mobilePlaceholder: '请输入手机号码',
    emailPlaceholder: '请输入邮箱地址',
    policyPlaceholder: '勾选后才能注册',
    diffPwd: '两次输入密码不一致',
    correctMobilePlaceholder: '请输入正确的手机号码',
    correctEmailPlaceholder: '请输入正确的邮箱地址',
    userName: '账号',
    password: '密码',
    confirmPassword: '确认密码',
    newPassword: '新密码',
    updatePassword: '修改密码',
    email: '邮箱',
    emailCode: '邮箱验证码',
    smsCode: '短信验证码',
    mobile: '手机号码',
  },
  user: {
    userList: '用户列表',
    name: '昵称',
    status: '用户状态',
    roleName: '角色',
    department: '所属部门',
    remake: '备注',
    addAccount: '新增账户',
    editAccount: '编辑账户',
    notAllowAddUser: '当前租户可添加的用户数量已达上限',
    // 用户数据表格操作
    viewUserDetails: '查看用户详情',
    editUserProfile: '编辑用户资料',
    resetUserPassword: '重置密码',
    confirmPasswordReset: '确定重置密码为123456吗',
    deleteUserAccount: '删除账号'
  },
  tenant: {
    tenantList: '租户列表',
    addTenant: '新增租户',
    editTenant: '编辑租户',
    deleteTenant: '删除租户',
    form: {
      name: '租户名称',
      status: '租户状态',
      free: '免费租户',
      pay: '付费租户',
      type: '租户类型',
      remark: '备注',
      userNumLimit: '用户数量限制',
      expireTime: '到期时间',
      noticeOne: '请默认选择租户管理员角色',
      noticeTwo: '如果不填写，则默认密码为123456',
      noticeThree: '不能输入带有admin的用户名',
      noticeFour: '到期后租户下的所有用户无法登录使用系统',
    }
  },
  table: {
    add: '新增',
    edit: '编辑',
    delete: '删除',
    batchDelete: '批量删除',
    exportData: '导出数据',
    approve: '审核',
    reject: '驳回',
    audited: '已审核',
    unaudited: '未审核',
    viewReceiptDetails: '查看单据详情',
    confirmDelete: '是否确认删除数据？',
    confirmExport: '确认导出',
    confirmExportTextOne: '导出',
    confirmExportTextTwo: '数据，请耐心等待。',
    confirmExportTextThree: '如果您需要导出详细数据（可能需要很长时间），请勾选下面的框。',
    confirmExportTextFour: '需要导出详细数据',
    type: '类型',
    subType: '子类型',
  },
  modal: {
    cover: '确认',
    cancel: '取消',
  },
  language: {
    enUS: 'English',
    zhCN: '简体中文',
  }
};
