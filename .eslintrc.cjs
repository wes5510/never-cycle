module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
				project: true,
				tsconfigRootDir: __dirname,
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "react"],
	rules: {
		"import/no-cycle": "error",
		"react/react-in-jsx-scope": "off",
	},
	settings: {
		"import/extensions": [".js", ".jsx"],
		react: {
			version: "detect",
		},
	},
};
