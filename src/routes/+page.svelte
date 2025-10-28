<script lang="ts">
	let name_translations = [
		"gabriel augustine tsui",
		"gabryś augustyn szu",
		"徐顯輝",
		"ガブリス アウグスティヌス じょ",
		"γαβριήλ αυγυστινος τσοι"
	]

	const decode_chars = "!@#$%^&*()-_=+;/?[]{}\\|".split("")
	let current_text = name_translations[0]
	let interval: NodeJS.Timeout

	function randomChar() {
		return decode_chars[Math.floor(Math.random() * decode_chars.length)]
	}

	function typeScrambleTo(target: string) {
		clearInterval(interval)
		let result = current_text.split("")
		const maxLength = Math.max(current_text.length, target.length)
		while (result.length < maxLength) result.push(" ")

		let i = 0
		const scrambleRange = 3 // number of characters scrambled ahead


		interval = setInterval(() => {
			// scramble next few characters
			for (let j = i; j < i + scrambleRange && j < maxLength; j++) {
				result[j] = randomChar()
			}

			// after scrambling, lock in the correct character
			if (i > 0) result[i - 1] = target[i - 1] ?? " "

			current_text = result.join("")

			if (i >= maxLength) {
				clearInterval(interval)
				current_text = target
			}

			i++
		}, 25)
	}

	function onpointerover() {
		const index = Math.floor(Math.random() * name_translations.length)
		const new_translation = name_translations[index]
		typeScrambleTo(new_translation)
	}

	function onpointerout() {
		typeScrambleTo(name_translations[0])
	}
</script>

<div class="bg-white text-black">
	<div class="flex flex-col gap-5 p-2 mt-[45vh] ml-[5vw] cursor-default select-none w-1/2">
		<h1
			class="text-4xl hover:text-5xl transition-all"
			on:pointerover={onpointerover}
			on:pointerout={onpointerout}
		>
			{current_text}
		</h1>
		<p>welcome to my corner of the internet</p>
	</div>
</div>