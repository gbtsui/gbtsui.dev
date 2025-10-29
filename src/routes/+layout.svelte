<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import {fade} from 'svelte/transition';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	let { children, data }: {children: Snippet<[]>, data: LayoutData} = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#key data.pathname}
	<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
		{@render children?.()}
	</div>
{/key}
