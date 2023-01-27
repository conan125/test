/*
 * @Author: matu-lgs 442285570@qq.com
 * @Date: 2023-01-24 00:04:49
 * @LastEditors: matu-lgs 442285570@qq.com
 * @LastEditTime: 2023-01-24 00:23:54
 * @FilePath: /micro-service/service/src/rpc/server.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { handler } from "./handler";
import * as jayson from "jayson";
import * as debug from "debug";
const rpcServer = jayson.server(handler);
export const initial: (port: number) => void = (port: number) => {
  rpcServer.http().listen(port);
};
