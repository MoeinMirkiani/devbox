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

export const VideoQuery: string = `
query Video($id: ID!) {
  video(id: $id) {
    id
    title
    featuredImage {
      node {
        mediaItemUrl
      }
    }
    acfVideo {
      resolution
      size
      ratio
      duration
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
