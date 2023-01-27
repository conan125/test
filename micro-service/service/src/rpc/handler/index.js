"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
/*
 * @Author: matu-lgs 442285570@qq.com
 * @Date: 2023-01-24 00:17:32
 * @LastEditors: matu-lgs 442285570@qq.com
 * @LastEditTime: 2023-01-24 00:24:02
 * @FilePath: /micro-service/service/src/rpc/handler/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const add = (args, callback) => {
    callback(null, args[0] + args[1]);
};
exports.handler = { add };
