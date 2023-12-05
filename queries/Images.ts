export const ImagesQuery: string = `
query Images($first: Int!, $after: String!, $keyword: String!) {
  images(first: $first, after: $after, where: { search: $keyword }) {
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
