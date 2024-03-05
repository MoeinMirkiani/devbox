export const AvatarsQuery: string = `
query Profiles($first: Int!, $after: String!) {
  profiles(first: $first, after: $after, where: {}) {
    edges {
      node {
        id
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        acfProfile {
          size
          resolution
          file {
            node {
              mediaItemUrl
            }
          }
        }
        formats {
          edges {
            node {
              name
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
