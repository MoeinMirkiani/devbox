export const TaxonomiesQuery: string = `
query Filters {
  ages {
    edges {
      node {
        name
        slug
        acfFilter {
          sortIndex
        }
      }
    }
  }
  colors {
    edges {
      node {
        name
        slug
      }
    }
  }
  formats {
    edges {
      node {
        name
        slug
      }
    }
  }
  genders {
    edges {
      node {
        name
        slug
      }
    }
  }
}
`
