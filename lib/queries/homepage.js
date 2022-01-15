import { gql } from "@apollo/client";

export const HOMEPAGE_QUERY = gql`
	query {
		PageItem(id: "home") {
			name
			content {
				_uid
				component
				body
			}
		}
	}
`;
