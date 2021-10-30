<script lang="ts">
	import { auth, db } from '../firebase';
	import { collection, DocumentData, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';
	import { isAuthenticated } from '../stores/authStore';
	import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
	import format from 'dateformat';

	let email = '';
	let password = '';

	function login() {
		signInWithEmailAndPassword(auth, email, password);
	}

	function logout() {
		signOut(auth);
	}

	function sortPosts(posts: QueryDocumentSnapshot<DocumentData>[]) {
		return posts.sort((a, b) => b.data().createdAt.toDate() - a.data().createdAt.toDate());
	}

	const snapshotPromise = getDocs(collection(db, 'posts'));
</script>

<svelte:head>
	<title>Admin | Fuzzy Thoughts</title>
</svelte:head>

{#if $isAuthenticated}
	{#await snapshotPromise}
		<p>Fetching fuzzy thoughts...</p>
	{:then snapshot}
		<h1>Posts</h1>
		<button type="button" class="logout-btn" on:click={logout}>Log out</button>
		<div class="feed">
			{#each sortPosts(snapshot.docs) as post}
				<div class="post">
					<p class="date">{format(post.data().createdAt.toDate(), 'ddd, mmm dS (h:MM TT)')}</p>
					<p class="content">
						{post.data().content}
					</p>
				</div>
			{/each}
		</div>
	{/await}
{:else}
	<div class="login-container">
		<label for="email">Email</label>
		<input type="text" id="email" bind:value={email} placeholder="Email" />
		<label for="password">Password</label>
		<input type="password" id="password" bind:value={password} placeholder="Password" />
		<button class="submit-btn" on:click={login}>Login</button>
	</div>
{/if}

<style>
	.login-container {
		display: flex;
		flex-direction: column;
	}

	label {
		color: #fff;
		opacity: 0.8;
		margin: 2rem 0 0.5rem 2rem;
	}

	input {
		background: #3939395b;
		color: #fff;

		border-radius: 2rem;
		border: none;
		padding: 1rem 2rem;
	}

	input::placeholder {
		color: #aaa;
	}

	input:focus {
		outline: none;
	}

	p {
		color: #fff;
		opacity: 0.8;
	}

	.submit-btn {
		width: max-content;
		align-self: center;
		margin-top: 2rem;
	}

	.logout-btn {
		margin-bottom: 1rem;
	}

	.date {
		color: #aaa;
		font-size: 0.9em;
	}

	.content {
		color: #fff;
		opacity: 1;
	}

	.feed {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 36rem;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.post {
		width: 100%;
		background: #3939395b;
		color: #fff;

		border-radius: 2rem;
		padding: 1rem 2rem;
		margin-bottom: 1rem;
		box-sizing: border-box;
	}
</style>
