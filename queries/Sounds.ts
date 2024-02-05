export const SoundsQuery: string = `
query Sounds($first: Int!, $after: String!, $keyword: String!) {
  sounds(first: $first, after: $after, where: { search: $keyword }) {
    edges {
      node {
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        acfSound {
          size
          files {
            format
            file {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`
