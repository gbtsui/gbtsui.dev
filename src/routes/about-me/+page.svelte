<script>
	import { fade } from 'svelte/transition';

	let hovered = $state(false);

	function onLinksHover() {
		hovered = true;
	}

	function onLinksNotHover() {
		hovered = false;
	}
</script>

<style>
    .hovered_card {
        transform: scale(0.95) translateX(-5vw) rotate(-5deg);
    }

</style>

<div class="w-[100vw] h-[100vh] bg-prussianblue transition-all flex">
	<div class="w-[50vw] h-[40vh] bg-light-cream rounded-xl mt-[25vh] ml-[25vw] z-1 transition-all duration-600"
			 in:fade={{delay: 1000, duration: 500}} class:hovered_card={hovered}>
		<div class="w-full h-full p-3 flex flex-row items-center">
			<div class="flex-col gap-5 p-2 w-1/2 h-max">
				<div class="text-4xl text-center">about me.</div>
				<div class="text-2xl mt-2 text-sanguine text-center">
					gabriel augustine tsui
				</div>
				<div class="text-lg text-center">
					grade 11 student @ St. Mary CSS
				</div>
			</div>
			<div class="flex-col gap-5 p-2 w-1/2 h-max">
				<div>
					<p>
						hi. i'm gabriel.
					</p>
					<p>
						i do things i think are cool sometimes.
					</p>
					<p>
						i'm not very good at things but i like to try to get better at them.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div
		class="w-[15vw] h-[50vh] bg-sanguine mt-[20vh] ml-[60vw] absolute z-0 rounded-xl rotate-[90deg] hover:rotate-[0deg] hover:translate-x-[12.5vw] hover:translate-y-[2.5vh] transition-all duration-500"
		onmouseover={onLinksHover} onmouseout={onLinksNotHover} onfocus={onLinksHover} onblur={onLinksNotHover} tabindex=0 role="menu" in:fade={{delay: 800, duration: 500}}>
		<div class="p-3 flex flex-col">
			<div class="text-3xl text-light-cream text-center w-full">
				links
			</div>
			<div>
				music i like
			</div>
			<div>
				my friends
			</div>
			<div>
				random interests
			</div>
			<div>

			</div>
		</div>
	</div>
</div>