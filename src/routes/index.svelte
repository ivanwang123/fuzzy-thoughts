<script lang="ts">
	import { db } from '../firebase';
	import { collection, addDoc } from 'firebase/firestore';
	import Check from '../svgs/Check.svelte';

	let post = '';
	let submitted = false;

	async function submitPost() {
		if (post.length > 0)
			try {
				await addDoc(collection(db, 'posts'), {
					content: post,
					createdAt: new Date()
				});
				post = '';
				submitted = true;
			} catch (e) {
				console.error('Error submitting post: ', e);
			}
	}
</script>

<svelte:head>
	<title>Fuzzy Thoughts</title>
</svelte:head>

{#if !submitted}
	<h1>Fuzzy Thoughts</h1>
	<textarea
		bind:value={post}
		rows={8}
		cols={56}
		placeholder="What topics are you still fuzzy about?"
	/>
	<button type="button" on:click={submitPost}>Submit</button>
{:else}
	<svelte:component this={Check} />
	<h1>Submitted!</h1>
	<p>Your response has been received. Thank you for your feedback!</p>
{/if}

<style>
	p {
		color: #fff;
		opacity: 0.8;
	}

	h1 {
		color: transparent;
		text-shadow: 0 0 3px rgb(255 255 255 / 50%);
	}

	textarea {
		background: #3939395b;
		color: #fff;

		border-radius: 2rem;
		border: none;
		resize: none;
		padding: 2rem;
	}

	textarea::placeholder {
		color: #aaa;
	}

	textarea:focus {
		outline: none;
	}

	@media only screen and (max-width: 400px) {
		textarea {
			width: 70%;
		}
	}
</style>
