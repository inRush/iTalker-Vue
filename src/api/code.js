const Code = {
  // 成功
  SUCCEED: 1,
  // 未知错误
  ERROR_UNKNOWN: 0,
  // 没有找到用户信息
  ERROR_NOT_FOUND_USER: 4041,
  // 没有找到群信息
  ERROR_NOT_FOUND_GROUP: 4042,
  // 没有找到群成员信息
  ERROR_NOT_FOUND_GROUP_MEMBER: 4043,
  // 创建用户失败
  ERROR_CREATE_USER: 3001,
  // 创建群失败
  ERROR_CREATE_GROUP: 3002,
  // 创建群成员失败
  ERROR_CREATE_MESSAGE: 3003,
  // 请求参数错误
  ERROR_PARAMETERS: 4001,
  // 请求参数错误-已存在账户
  ERROR_PARAMETERS_EXIST_ACCOUNT: 4002,
  // 请求参数错误-已存在名称
  ERROR_PARAMETERS_EXIST_NAME: 4003,
  // 服务器错误
  ERROR_SERVICE: 5001,
  // 账户Token错误，需要重新登录
  ERROR_ACCOUNT_TOKEN: 2001,
  // 账户登录失败
  ERROR_ACCOUNT_LOGIN: 2002,
  // 账户注册失败
  ERROR_ACCOUNT_REGISTER: 2003,
  // 没有权限操作
  ERROR_ACCOUNT_NO_PERMISSION: 2010,
};

export default Code;
