/*
 * @Author: matu-lgs 442285570@qq.com
 * @Date: 2023-01-22 23:48:19
 * @LastEditors: matu-lgs 442285570@qq.com
 * @LastEditTime: 2023-01-22 23:54:13
 * @FilePath: /pwa/src/server/server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require("fs");
const path = require("path");
const cd = path.resolve("./");
let result = fs.readFileSync(path.join(cd, "in.db"));
console.log(result.toJSON());
