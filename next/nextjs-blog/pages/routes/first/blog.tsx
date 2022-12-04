import React from "react"
import {getPosts}  from "./posts"
 function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post,i) => (
        <li key={i}>{post.title}-{"markdown"}</li>
      ))}
    </ul>
  )
}

// 此函数在构建时被调用
export async function getStaticProps() {
  // 调用外部 API 获取博文列表
  const res = await fetch('http://localhost:3000/posts.json')
  // const posts = await res.json()
  const posts= await getPosts()

  // 通过返回 { props: { posts } } 对象，Blog 组件
  // 在构建时将接收到 `posts` 参数
  return {
    props: {
      posts,
    },
  }
}

export default Blog