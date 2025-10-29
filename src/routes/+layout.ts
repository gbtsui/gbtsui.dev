import type { LayoutLoad } from '../../.svelte-kit/types/src/routes/$types';

export const load: LayoutLoad = ({ url }: {url: URL}) =>  {
	return {pathname: url.pathname}
};