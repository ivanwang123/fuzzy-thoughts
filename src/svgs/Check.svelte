<script lang="ts">
	import { onMount } from 'svelte';
	import { draw } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';

	let render = false;
	onMount(() => {
		render = true;
	});
</script>

{#if render}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="4 0 50 50" width="256" height="256">
		<path
			in:draw={{ duration: 1100, easing: quartOut }}
			d="m 18.963249,24.54142 5.11928,5.88254 16.621216,-13.3733 c -4.624996,-7.33644 -9.696966,-10.5123"
			style="fill:none;stroke:#03ad5ecc;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
		/>
	</svg>
{/if}
