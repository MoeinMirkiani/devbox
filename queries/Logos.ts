export const LogosQuery: string = `
query Logos($first: Int!, $after: String!, $keyword: String!) {
  logos(first: $first, after: $after, where: { search: $keyword }) {
    nodes {
      id
      title
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      acfLogo {
        file {
          node {
            mediaItemUrl
          }
        }
        size
        ratio
        format
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`
