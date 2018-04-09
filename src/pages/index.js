import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.css'

const IndexPage = ({data}) => {
  console.log(data)
  
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id} className="article-box">
          <h3 className="title">{node.frontmatter.title}</h3>
          <p className="author">{node.frontmatter.author}</p>
          <p className="date">{node.frontmatter.date} {node.timeToRead}min read</p>
          <p className="excerpt">{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}
