export const ImagesQuery: string = `
query Images($first: Int!) {
  images(first: $first) {
    edges {
      node {
        id
        databaseId
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        acf {
          resolution
          dimension
          size
          ratio
          format
          isFree
          source {
            name
            link
          }
          file {
            node {
              mediaItemUrl
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
