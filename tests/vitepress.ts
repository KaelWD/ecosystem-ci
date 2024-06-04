import { runInRepo } from '../utils.ts'
import { RunOptions } from '../types.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'vuejs/vitepress',
		branch: 'main',
		build: 'build',
		test: 'test',
		patchFiles: {
			'package.json': (content) => {
				// temporary bug in vue-tsc 2.0.14+ for 3.5 types
				return content.replace(/"vue-tsc": .*/, '"vue-tsc": "2.0.14",')
			},
		},
	})
}
