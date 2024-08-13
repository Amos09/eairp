export default {
  api: {
    operationSuccess: 'Operation Success',
    operationFailed: 'Operation failed',
    errorTip: 'Error Tip',
    successTip: 'Success Tip',
    errorMessage: 'The operation failed, the system is abnormal!',
    timeoutMessage: 'Login timed out, please log in again!',
    apiTimeoutMessage: 'The interface request timed out, please refresh the page and try again!',
    apiRequestFailed: 'The interface request failed, please try again later!',
    networkException: 'network anomaly',
    networkExceptionMsg:
      'Please check if your network connection is normal! The network is abnormal',
    refreshBrowser: 'The network is busy now, please press F5 to refresh your browser',

    errMsg401: 'The user does not have permission (token, user name, password error)!',
    errMsg403: 'The user is authorized, but access is forbidden!',
    errMsg404: 'Network request error, the resource was not found!',
    errMsg405: 'Network request error, request method not allowed!',
    errMsg408: 'Network request timed out!',
    errMsg500: 'Server error, please contact the administrator!',
    errMsg501: 'The network is not implemented!',
    errMsg502: 'Network Error!',
    errMsg503: 'The service is unavailable, the server is temporarily overloaded or maintained!',
    errMsg504: 'Network timeout!',
    errMsg505: 'The http version does not support the request!',
  },
  app: {
    logoutTip: 'Reminder',
    logoutMessage: 'Confirm to exit the system?',
    menuLoading: 'Menu loading...',
  },
  errorLog: {
    tableTitle: 'Error log list',
    tableColumnType: 'Type',
    tableColumnDate: 'Time',
    tableColumnFile: 'File',
    tableColumnMsg: 'Error message',
    tableColumnStackMsg: 'Stack info',

    tableActionDesc: 'Details',

    modalTitle: 'Error details',

    fireVueError: 'Fire vue error',
    fireResourceError: 'Fire resource error',
    fireAjaxError: 'Fire ajax error',

    enableMessage: 'Only effective when useErrorHandle=true in `/src/settings/projectSetting.ts`.',
  },
  exception: {
    backLogin: 'Back Login',
    backHome: 'Back Home',
    subTitle403: "Sorry, you don't have access to this page.",
    subTitle404: 'Sorry, the page you visited does not exist.',
    subTitle500: 'Sorry, the server is reporting an error.',
    noDataTitle: 'No data on the current page.',
    networkErrorTitle: 'Network Error',
    networkErrorSubTitle:
      'Sorry，Your network connection has been disconnected, please check your network!',
  },
  lock: {
    unlock: 'Click to unlock',
    alert: 'Lock screen password error',
    backToLogin: 'Back to login',
    entry: 'Enter the system',
    placeholder: 'Please enter the lock screen password or user password',
  },
  login: {
    captcha: 'Verification code',
    backSignIn: 'Back sign in',
    mobileSignInFormTitle: 'Mobile sign in',
    qrSignInFormTitle: 'Qr sign in',
    emailFormTitle: 'Email sign in',
    signInFormTitle: 'Sign in',
    signUpFormTitle: 'Sign up',
    forgetFormTitle: 'Reset password',

    signInTitle: 'HO-STAR MARINE ERP',
    signInDesc: '© 2024-2030 HO-STAR MARINE SOLUTIONS CORPORATION - All Right Reserved',
    policy: 'I agree, to the WanSer ERP System Privacy Policy',
    scanSign: `scanning the code to complete the login`,

    loginButton: 'Sign in',
    registerButton: 'Sign up',
    rememberMe: 'Remember me',
    forgetPassword: 'Forget Password?',
    otherSignIn: 'Sign in with',

    // notify
    loginSuccessTitle: 'Login successful',
    loginSuccessDesc: 'Welcome back',

    // placeholder
    accountPlaceholder: 'Please input username',
    passwordPlaceholder: 'Please input password',
    captchaPlaceholder: 'Please input verification code',
    correctMobilePlaceholder: 'Please enter the correct phone number',
    correctEmailPlaceholder: 'Please enter the correct email address',
    smsPlaceholder: 'Please input sms code',
    mobilePlaceholder: 'Please input mobile',
    emailPlaceholder: 'Please input email',
    policyPlaceholder: 'Register after checking',
    diffPwd: 'The two passwords are inconsistent',

    userName: 'Username',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    newPassword: 'New Password',
    updatePassword: 'Change Password',
    email: 'Email',
    emailCode: 'Email code',
    smsCode: 'SMS code',
    mobile: 'Mobile',
  },
  user: {
    userList: 'User Table',
    name: 'Nick Name',
    status: 'Status',
    roleName: 'Role Name',
    department: 'Department',
    remake: 'Remark',
    addAccount: 'Add Account',
    editAccount: 'Edit Account',
    notAllowAddUser: 'The current tenant has reached the maximum number of users that can be added',
    // user table list action
    viewUserDetails: 'View User Details',
    editUserProfile: 'Edit User Profile',
    resetUserPassword: 'Reset User Password',
    confirmPasswordReset: 'Are you sure to reset the password to 123456',
    deleteUserAccount: 'Delete User Account'
  },
  tenant: {
    tenantList: 'Tenant List',
    addTenant: 'Add Tenant',
    editTenant: 'Edit Tenant',
    deleteTenant: 'Delete Tenant',
    form: {
      name: 'Tenant Name',
      status: 'Status',
      free: 'Free Tenant',
      pay: 'Pay Tenant',
      type: 'Type',
      remark: 'Remark',
      userNumLimit: 'User Number Limit',
      expireTime: 'Expire Time',
      noticeOne: 'Please default to select the tenant administrator role',
      noticeTwo: 'If not filled in, the default password is 123456',
      noticeThree: 'Cannot enter a username with admin',
      noticeFour: 'After expiration, all users under the tenant are unable to login and use the system',
    }
  },
  table: {
    add: 'Add Data',
    edit: 'Edit Data',
    delete: 'Delete Data',
    batchDelete: 'Batch Delete Data',
    exportData: 'Export Data',
    approve: 'Receipt Approval',
    reject: 'Receipt Rejection',
    audited: 'Audited',
    unaudited: 'Unaudited',
    viewReceiptDetails: 'View Receipt Detail',
    confirmDelete: 'Are you sure to delete this data?',
    confirmExport: 'Confirm Export',
    confirmExportTextOne: 'Export',
    confirmExportTextTwo: 'piece of data, please be patient.',
    confirmExportTextThree: 'If you need to export detailed data (which may take a long time), please check the box below.',
    confirmExportTextFour: 'Need to export detailed data',
    type: 'Type',
    subType: 'Sub Type',
  },
  modal: {
    cover: 'Yes',
    cancel: 'No',
  },
  language: {
    enUS: 'English',
    zhCN: '简体中文',
  }
};
