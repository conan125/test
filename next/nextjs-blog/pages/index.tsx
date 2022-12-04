import React, { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
const Home = () => {
  useEffect(() =>{
  /**6个钩子事件
    routeChangeStart
    routerChangeComplete
    beforeHistoryChange
    routeChangeError
    hashChangeStart
    hashChangeComplete*/
    //路由开始变化
    Router.events.on('routeChangeStart',(...args)=>{
        console.log('1.routeChangeStart->路由开始变化，参数为：',...args)
    })
    //路由变化结束
    Router.events.on('routeChangeComplete',(...args)=>{
        console.log('2.routeChangeComplete->路由变化结束，参数为：',...args)
    })
    //Next.js全部都用History模式
    Router.events.on('beforeHistoryChange',(...args)=>{
        console.log('3.beforeHistoryChange，参数为：',...args)
    })
    //路由发生错误时，404不算
    Router.events.on('routeChangeError',(...args)=>{
        console.log('4.routeChangeError->路由发生错误，参数为：',...args)
    })
    //Hash路由切换之前
    Router.events.on('hashChangeStart',(...args)=>{
        console.log('5.hashChangeStart，参数为：',...args)
    })
    //Hash路由切换完成
    Router.events.on('hashChangeComplete',(...args)=>{
        console.log('6.hashChangeComplete，参数为：',...args)
    })
},[])
 return(

  <>
    <div>我是首页</div>
    <div>
      <Link href="/routes/first/about" rel="external nofollow">
        <a>about</a>
      </Link>
    </div>
    <div>
      <Link href="/routes/first/blog" rel="external nofollow">
        <a>blog</a>
      </Link>
    </div>
    <div>
      <Link href="/routes/first/ssr" rel="external nofollow">
        <a>ssr</a>
      </Link>
    </div>
    <div>
      <Link href="/routes/first/2" rel="external nofollow">
        <a>2</a>
      </Link>
    </div>
  </>)
}
 



export default Home;
