import React from 'react'
import Link from 'next/link'
import Router from 'next/router'  
 
export default function Home() {
  
 
    function gotoSport(){
        Router.push({
            pathname:'/routes/first/about',
            query:{name:'前端早茶'}
        })
        // 同以下：
        // Router.push('/sport?前端早茶')
    }
 
    return (
        <>
            <div>调试下6个钩子</div>
            <div>
                <Link href={{pathname:'/routes/first/blog',query:{name:'前端早茶'}}}><a>选择前端早茶</a></Link>
                <br/>
                <Link href="/routes/first/2"><a>选择广东靓仔</a></Link>
            </div>
            <div>
                <button onClick={gotoSport}>选前端早茶</button>
            </div>
            <div>
                <Link href='/routes/first/3'><a>选Juan</a></Link>
            </div>
        </>
    )
}
