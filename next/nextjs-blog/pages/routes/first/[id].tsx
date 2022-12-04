import React from "react"

function Posts({ post }) {
  return (
    <>  {post.map((p,i) => (
        <li key={i}>{p}-{i}"post"</li>
      ))}</>

  )
}

// 此函数在构建时被调用
export async function getStaticPaths() {
  // 调用外部 API 获取博文列表
  const res = await fetch('http://localhost:3000/posts.json')
  const posts = await res.json()

  // 据博文列表生成所有需要预渲染的路径
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
// 在构建时也会被调用
export async function getStaticProps({ params }) {
  // params 包含此片博文的 `id` 信息。
  // 如果路由是 /posts/1，那么 params.id 就是 1
  const res = await fetch('http://localhost:3000/array.json')
//   const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()

  // 通过 props 参数向页面传递博文的数据
  return { props: { post } }
}

export default Posts