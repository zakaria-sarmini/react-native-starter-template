module.exports = {
	root: true,
	extends: '@react-native-community',
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		"prettier/prettier": [
			"error",
			{
				"useTabs": true,
				"tabsWidth": 4,
				"bracketSpacing": true,
				"jsxBracketSameLine": true
			}
		]
	}
};
