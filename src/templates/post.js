import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const H1 = styled.h1`
  font-family: 'Abril Fatface';
  font-size: 40px;
  line-height: 30px;
`

export default function BlogPost({ data }) {
    const { markdownRemark: post } = data
    const { html, frontmatter } = post
    const { title } = frontmatter
    return (
        <Card style={{ width: '800px', margin: '0 auto' }}>
            <CardContent>
                <H1>{ title }</H1>
                <div>
                    { html }
                </div>
            </CardContent>
        </Card>
    )
}

export const blogPostQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`
