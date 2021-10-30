<main id="main">
	<slot />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

	:global(body, html, #svelte) {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: 'Montserrat', sans-serif;
	}

	:global(textarea, button) {
		font-family: 'Montserrat', sans-serif;
	}

	:global(button) {
		color: #fff;
		background: #3d85c6;
		border: none;
		border-radius: 5rem;
		padding: 0.3rem 1rem;
		margin-top: 1rem;
		cursor: pointer;
	}

	:global(h1) {
		color: #3d85c6;
		font-weight: 400;
		margin: 0;
		margin-bottom: 1rem;
	}

	#main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
		background: radial-gradient(
			circle at 0% 110%,
			#2ebec6,
			#00a9c3,
			#0093be,
			#007db7,
			#0066ac,
			#004e9c,
			#0f3587,
			#31186c
		);
		padding: 3rem 0;
		box-sizing: border-box;
		overflow: auto;
	}
</style>
