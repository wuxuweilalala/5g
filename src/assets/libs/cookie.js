/** @module Cookie */

/**
 * @param {String} name Cookie关键字
 * @returns {String} Cookie值
 * @description 获取Cookie值
 */
export function get(name) {
    const reg = new RegExp('(^| )' + name + '(?:=([^;]*))?(;|$)');
    const val = document.cookie.match(reg);
    return val ? (val[2] ? unescape(val[2]) : '') : null;
}

/**
 * @param {String} name 关键字
 * @param {String} value 值
 * @param {Number} expires 过期时间（分钟）
 * @param {String} path 设置路径
 * @param {String} domain 域名
 * @param {Boolean} secure 安全存储
 * @returns {void}
 * @description 设置Cookie
 */
export function set(name, value, expires, path, domain, secure) {
    let exp = new Date();
    expires = arguments[2] || null;
    path = arguments[3] || '/';
    domain = arguments[4] || null;
    secure = arguments[5] || false;

    if (expires) {
        exp.setMinutes(exp.getMinutes() + parseInt(expires));
    }
    document.cookie =
        name +
        '=' +
        escape(value) +
        (expires ? ';expires=' + exp.toGMTString() : '') +
        (path ? ';path=' + path : '') +
        (domain ? ';domain=' + domain : '') +
        (secure ? ';secure' : '');
}

/**
 * @param {String} name 关键字
 * @param {String} path 设置路径
 * @param {String} domain 域名
 * @param {Boolean} secure 安全存储
 * @returns {void}
 * @description 删除Cookie
 */
export function del(name, path, domain, secure) {
    let value = this.get(name);
    if (value != null) {
        let exp = new Date();
        exp.setMinutes(exp.getMinutes() - 1000);
        path = path || '/';
        document.cookie =
            name +
            '=;expires=' +
            exp.toGMTString() +
            (path ? ';path=' + path : '') +
            (domain ? ';domain=' + domain : '') +
            (secure ? ';secure' : '');
    }
}

export default {
    get,
    set,
    del
};
