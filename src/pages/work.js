// import React from "react"

// import { Link, graphql, useStaticQuery } from "gatsby"
// import blogStyles from "./blog.module.scss"

// import Layout from "../components/layout"
// import Head from '../components/head'

// const Work = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allContentfulBlogPost{
//         edges {
//           node {
//             name
//             slug
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <Layout>
//       <Head title="Work"/>
//       <h1>Work</h1>
//       <ol className={blogStyles.posts}>
//         {data.allContentfulBlogPost.edges.map((edge, key) => {
//           return (
//             <li key={key} className={blogStyles.post}>
//               <Link to={`/blog/${edge.node.slug}`}>
//                 <h3>{edge.node.name}</h3>
//               </Link>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }

// export default Work
