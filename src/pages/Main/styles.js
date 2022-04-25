import styled from 'styled-components';

export const Container = styled.div`
	max-width: 700px;
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
	padding: 30px;
	margin: 80px auto;

	h1 {
		font-size: 2rem;
		display: flex;
		align-items: center;
		flex-direction: row;

		svg {
			margin-right: 0.6rem;
		}
	}
`;

export const Form = styled.form`
	margin-top: 1.9rem;
	display: flex;

	input {
		flex: 1;
		border: 1px solid #ddd;
		padding: 0.625rem 1rem;
		border-radius: 4px;
	}
`;

export const SubmitButton = styled.button`
	background: #0d2636;
	border: 0;
	border-radius: 4px;
	margin-left: 0.625rem;
	padding: 0 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;
