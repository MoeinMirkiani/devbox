export const SoundsQuery: string = `
query Sounds($first: Int!) {
  sounds(first: $first) {
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
