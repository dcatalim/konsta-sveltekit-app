<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from "mode-watcher";
	let { data, children } = $props();
</script>
<ModeWatcher />
{@render children()}
