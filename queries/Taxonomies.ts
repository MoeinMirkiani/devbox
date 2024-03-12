export const TaxonomiesQuery: string = `
query Filters {
  ages {
    nodes {
      name
      slug
      taxonomy {
        node {
          graphqlSingleName
          graphqlPluralName
        }
      }
      acfFilter {
        sortIndex
      }
    }
  }
  colors {
    nodes {
      name
      slug
      taxonomy {
        node {
          graphqlSingleName
          graphqlPluralName
        }
      }
    }
  }
  formats {
    nodes {
      name
      slug
      taxonomy {
        node {
          graphqlSingleName
          graphqlPluralName
        }
      }
    }
  }
  genders {
    nodes {
      name
      slug
      taxonomy {
        node {
          graphqlSingleName
          graphqlPluralName
        }
      }
    }
  }
}
`
