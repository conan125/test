/*
 * @Author: matu-lgs 442285570@qq.com
 * @Date: 2023-01-24 00:02:48
 * @LastEditors: matu-lgs 442285570@qq.com
 * @LastEditTime: 2023-01-24 00:14:17
 * @FilePath: /micro-service/service/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { initial as rpcInit } from "./rpc";
const RPC_PORT = 6001;
function bootstrap() {
  rpcInit(RPC_PORT);
}
bootstrap();
