import React from "react"

function Page({ data }) {
  // Render data...
  return (<>
  {data}
  </>)
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/array.json')
  const data = await res.json()



  // Pass data to the page via props
  return { props: { data } }
}

export default Page