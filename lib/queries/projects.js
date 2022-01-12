import { gql } from "@apollo/client";

export const PROJECTS_QUERY = gql`
	query {
		ProjectItems {
			items {
				id
				content {
					description
					title
					titleImage {
						filename
					}
				}
			}
		}
	}
`;
