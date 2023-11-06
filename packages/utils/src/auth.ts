export class AuthUtils {
  /**
   * 访问令牌存储键名
   */
  private static ACCESS_TOKEN_KEY = 'access_token'

  /**
   * 记住密码相关信息存储键名
   */
  static REMEMBERED_ACCOUNT_KEY = 'login_account_data'

  /**
   * 默认管理员用户名
   * @description 用于内置管理员角色登录的用户名
   */
  static DEFAULT_ADMIN_USERNAME = 'admin'

  /**
   * 默认管理员密码
   * @description 用于内置管理员角色登录的密码
   */
  static DEFAULT_ADMIN_PASSWORD = '123456'

  /**
   * 默认访客用户名
   * @description 用于内置访客角色登录的用户名
   */
  static DEFAULT_VISITOR_USERNAME = 'visitor'

  /**
   * 默认访客密码
   * @description 用于内置访客角色登录的密码
   */
  static DEFAULT_VISITOR_PASSWORD = '123456'

  /**
   * 获取访问令牌
   * @description 获取 `localStorage` 中存储的访问令牌
   * @example
   * ```ts
   * AuthUtils.getToken()
   * ```
   */
  static getToken() {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY) ?? ''
  }

  /**
   * 获取 authorization
   * @description 拼接访问令牌，格式如：`Bearer` + `accessToken`
   * @example
   * ```ts
   * AuthUtils.getAuthorization() // 默认是 Bearer 开头
   * AuthUtils.getAuthorization("Basic") // 自定义前缀
   * ```
   */
  static getAuthorization(prefix: string = 'Bearer') {
    return `${prefix} ${this.getToken()}`
  }

  /**
   * 设置访问令牌
   * @description 设置 `localStorage` 中存储的访问令牌
   * @param token 访问令牌
   * @example
   * ```ts
   * AuthUtils.setToken("xxx")
   * ```
   */
  static setToken(token: string) {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, token)
  }

  /**
   * 清除 token
   * @description 清除 `localStorage` 中存储的访问令牌
   * @example
   * ```ts
   * AuthUtils.clearToken()
   * ```
   */
  static clearToken() {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY)
  }

  /**
   * 判断当前是否已经登录
   * @description 根据是否存在访问令牌，判断当前是否处于登录状态
   * @example
   * ```ts
   * AuthUtils.isAuthenticated()
   * ```
   */
  static isAuthenticated(): boolean {
    return !!localStorage.getItem(this.ACCESS_TOKEN_KEY)
  }

  /**
   * 获取记住密码的账号密码
   * @description 用于登录页记住密码功能
   * @example
   * ```ts
   * JSON.parse(AuthUtils.getRememberedAccount() ?? '')
   * ```
   */
  static getRememberedAccount(): string | null {
    return localStorage.getItem(this.REMEMBERED_ACCOUNT_KEY)
  }

  /**
   * 设置记住密码的账号密码
   * @description 设置 `localStorage` 中存储的与记住密码相关的信息
   * @example
   * ```ts
   * AuthUtils.setRememberedAccount(JSON.stringify({
   *    username: "xxx",
   *    password: "xxx",
   *  })
   * )
   * ```
   */
  static setRememberedAccount(data: string) {
    localStorage.setItem(this.REMEMBERED_ACCOUNT_KEY, data)
  }

  /**
   * 清除记住密码的账号密码
   * @description  清除 `localStorage` 中存储的与记住密码相关的信息
   * @example
   * ```ts
   * AuthUtils.clearRememberedAccount()
   * ```
   */
  static clearRememberedAccount() {
    localStorage.removeItem(this.REMEMBERED_ACCOUNT_KEY)
  }
}