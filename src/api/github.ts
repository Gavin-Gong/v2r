import gql from 'graphql-tag';

const fetchGithub = {
  query: gql`
    {
      viewer {
        login
        name
        email
        avatarUrl
      }
    }
  `,
}

export default {
  fetchGithub
}