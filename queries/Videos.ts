export const VideosQuery: string = `
query Videos($first: Int!, $after: String!, $keyword: String!) {
  videos(first: $first, after: $after, where: { search: $keyword }) {
    edges {
      node {
        id
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        acfVideo {
          resolution
          duration
          size
          ratio
          format
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
