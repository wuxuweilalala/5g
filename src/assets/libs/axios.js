import axios from 'axios';

class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.requestQueue = [];
        this.maxPathLength = 50;
    }

    // 默认配置
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            timeout: 30000
        };
        return config;
    }

    // 记录用户发送的请求路径信息
    recodeRequestPath(config) {
        const time = Date.now();
        const path = `${time}: ${config.method} => ${config.url}`;
        while (this.requestQueue.length >= this.maxPathLength) {
            this.requestQueue.shift();
        }
        this.requestQueue.push(path);
    }

    // 拦截
    interceptors(instance, url) {
        // 请求拦截
        instance.interceptors.request.use(
            config => {
                // 记录用户路径
                this.recodeRequestPath(config);
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );

        // 响应拦截
        instance.interceptors.response.use(
            res => {
                const { data } = res;
                return data;
            },
            error => {
                // 服务器响应
                if (error.response) {
                    const { status } = error.response;
                    if (!status) {
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
            }
        );
    }

    request(options) {
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url);
        return instance(options);
    }
}

export default HttpRequest;
