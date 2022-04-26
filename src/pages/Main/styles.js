import styled, { keyframes, css } from 'styled-components';

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

export const List = styled.ul`
	list-style: none;
	margin-top: 1.25rem;

	li {
		padding: 1rem 0;
		display: flex;
		align-items: center;
		justify-content: space-between;

		& + li {
			border-top: 1px solid #eee;
		}

		a {
			color: #0d2636;
			text-decoration: none;
			padding-right: 0.8rem;
			outline: 0;
			border-radius: 4px;
		}
	}
`;

export const DeleteButton = styled.button.attrs({
	type: 'button',
})`
	background: transparent;
	color: #0d2636;
	border: 0;
	padding-right: 0.3rem;
`;

// Button Animation

const animate = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

export const SubmitButton = styled.button.attrs((props) => ({
	type: 'submit',
	disabled: props.loading,
}))`
	background: #0d2636;
	border: 0;
	border-radius: 4px;
	margin-left: 0.625rem;
	padding: 0 1rem;
	display: flex;
	justify-content: center;
	align-items: center;

	&[disabled] {
		cursor: not-allowed;
		opacity: 0.5;
	}

	${(props) =>
		props.loading &&
		css`
			svg {
				animation: ${animate} 2s linear infinite;
			}
		`}
`;
