import { gql } from "@apollo/client";

export const PROJECTS_QUERY = gql`
	query {
		ProjectItems {
			items {
				id
				slug
				content {
					description
					title
					mainImageName
				}
			}
		}
	}
`;

export const PROJECT_SLUGS = gql`
	query GET_POST_SLUGS {
		ProjectItems {
			items {
				id
				slug
			}
		}
	}
`;

export const PROJECT_BY_ID = gql`
	query PROJECT_BY_SLUG($slug: ID!) {
		ProjectItem(id: $slug) {
			id
			content {
				_editable
				_uid
				component
				description
				mainImageName
				title
			}
		}
	}
`;
