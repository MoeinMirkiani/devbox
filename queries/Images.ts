export const ImagesQuery: string = `
query Images($first: Int!, $after: String!, $keyword: String!) {
  images(first: $first, after: $after, where: { search: $keyword }) {
    edges {
      node {
        id
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        acfImage {
          resolution
          dimension
          size
          ratio
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

export const ImageQuery: string = `
query Image ($id: ID!) {
  image(id: $id) {
    id
    databaseId
    title
    featuredImage {
      node {
        mediaItemUrl
      }
    }
    acfImage {
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
`
