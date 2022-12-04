import Demo1 from "../pages/demo1";
import Demo2 from "../pages/demo2";
// const id = useParams();
const routes = [
  {
    path: "/demo1",
    element: <Demo1 />,
    meta: {
      title: 111,
    },
  },
  { path: "/demo2/:id", element: <Demo2 /> },
  { path: "*", element: <Demo1></Demo1> },
];
const isLogin = () => {
  return true;
};
/**
 * @description: 全局路由拦截
 * @param {string} pathname 当前路由路径
 * @param {object} meta 当前路由自定义meta字段
 * @return {string} 需要跳转到其他页时，就返回一个该页的path路径，或返回resolve该路径的promise对象
 */
const onRouteBefore = ({ pathname, meta }) => {
  // 动态修改页面title
  if (meta.title !== undefined) {
    document.title = meta.title;
  }
  // 判断未登录跳转登录页
  if (meta.needLogin) {
    if (!isLogin) {
      return "/login";
    }
  }
};

export { routes, onRouteBefore };
