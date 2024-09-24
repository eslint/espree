[![npm version](https://img.shields.io/npm/v/eslint-scope.svg)](https://www.npmjs.com/package/eslint-scope)
[![Downloads](https://img.shields.io/npm/dm/eslint-scope.svg)](https://www.npmjs.com/package/eslint-scope)
[![Build Status](https://github.com/eslint/js/workflows/CI/badge.svg)](https://github.com/eslint/js/actions)

# ESLint Scope

ESLint Scope is the [ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm) scope analyzer used in ESLint. It is a fork of [escope](http://github.com/estools/escope).

## Install

```
npm i eslint-scope --save
```

## 📖 Usage

To use in an ESM file:

```js
import * as eslintScope from 'eslint-scope';
```

To use in a CommonJS file:

```js
const eslintScope = require('eslint-scope');
```

In order to analyze scope, you'll need to have an [ESTree](https://github.com/estree/estree) compliant AST structure to run it on. The primary method is `eslintScope.analyze()`, which takes two arguments:

1. `ast` - the ESTree-compliant AST structure to analyze.
2. `options` (optional) - Options to adjust how the scope is analyzed, including:
  * `ignoreEval` (default: `false`) - Set to `true` to ignore all `eval()` calls (which would normally create scopes).
  * `nodejsScope` (default: `false`) - Set to `true` to create a top-level function scope needed for CommonJS evaluation.
  * `impliedStrict` (default: `false`) - Set to `true` to evaluate the code in strict mode even outside of modules and without `"use strict"`.
  * `ecmaVersion` (default: `5`) - The version of ECMAScript to use to evaluate the code.
  * `sourceType` (default: `"script"`) - The type of JavaScript file to evaluate. Change to `"module"` for ECMAScript module code.
  * `childVisitorKeys` (default: `null`) - An object with visitor key information (like [`eslint-visitor-keys`](https://github.com/eslint/js/tree/main/packages/eslint-visitor-keys)). Without this, `eslint-scope` finds child nodes to visit algorithmically. Providing this option is a performance enhancement.
  * `fallback` (default: `"iteration"`) - The strategy to use when `childVisitorKeys` is not specified. May be a function.

Example:

```js
import * as eslintScope from 'eslint-scope';
import * as espree from 'espree';
import estraverse from 'estraverse';

const options = {
    ecmaVersion: 2022,
    sourceType: "module"
};

const ast = espree.parse(code, { range: true, ...options });
const scopeManager = eslintScope.analyze(ast, options);

const currentScope = scopeManager.acquire(ast);   // global scope

estraverse.traverse(ast, {
    enter (node, parent) {
        // do stuff

        if (/Function/.test(node.type)) {
            currentScope = scopeManager.acquire(node);  // get current function scope
        }
    },
    leave(node, parent) {
        if (/Function/.test(node.type)) {
            currentScope = currentScope.upper;  // set to parent scope
        }

        // do stuff
    }
});
```

## Contributing

Issues and pull requests will be triaged and responded to as quickly as possible. We operate under the [ESLint Contributor Guidelines](http://eslint.org/docs/developer-guide/contributing), so please be sure to read them before contributing. If you're not sure where to dig in, check out the [issues](https://github.com/eslint/js/issues).

## Security Policy

We work hard to ensure that ESLint Scope is safe for everyone and that security issues are addressed quickly and responsibly. Read the full [security policy](https://github.com/eslint/.github/blob/master/SECURITY.md).

## Build Commands

* `npm test` - run all linting and tests
* `npm run lint` - run all linting

## License

ESLint Scope is licensed under a permissive BSD 2-clause license.

## Sponsors

The following companies, organizations, and individuals support ESLint's ongoing maintenance and development. [Become a Sponsor](https://eslint.org/donate) to get your logo on our README and website.

<!-- NOTE: This section is autogenerated. Do not manually edit.-->
<!--sponsorsstart-->
<h3>Platinum Sponsors</h3>
<p><a href="https://automattic.com"><img src="https://images.opencollective.com/automattic/d0ef3e1/logo.png" alt="Automattic" height="128"></a> <a href="https://www.airbnb.com/"><img src="https://images.opencollective.com/airbnb/d327d66/logo.png" alt="Airbnb" height="128"></a></p><h3>Gold Sponsors</h3>
<p><a href="https://trunk.io/"><img src="https://images.opencollective.com/trunkio/fb92d60/avatar.png" alt="trunk.io" height="96"></a></p><h3>Silver Sponsors</h3>
<p><a href="https://www.jetbrains.com/"><img src="https://images.opencollective.com/jetbrains/fe76f99/logo.png" alt="JetBrains" height="64"></a> <a href="https://liftoff.io/"><img src="https://images.opencollective.com/liftoff/5c4fa84/logo.png" alt="Liftoff" height="64"></a> <a href="https://americanexpress.io"><img src="https://avatars.githubusercontent.com/u/3853301?v=4" alt="American Express" height="64"></a> <a href="https://www.workleap.com"><img src="https://avatars.githubusercontent.com/u/53535748?u=d1e55d7661d724bf2281c1bfd33cb8f99fe2465f&v=4" alt="Workleap" height="64"></a></p><h3>Bronze Sponsors</h3>
<p><a href="https://www.crosswordsolver.org/anagram-solver/"><img src="https://images.opencollective.com/anagram-solver/2666271/logo.png" alt="Anagram Solver" height="32"></a> <a href="https://icons8.com/"><img src="https://images.opencollective.com/icons8/7fa1641/logo.png" alt="Icons8" height="32"></a> <a href="https://discord.com"><img src="https://images.opencollective.com/discordapp/f9645d9/logo.png" alt="Discord" height="32"></a> <a href="https://nx.dev"><img src="https://avatars.githubusercontent.com/u/23692104?v=4" alt="Nx" height="32"></a> <a href="https://herocoders.com"><img src="https://avatars.githubusercontent.com/u/37549774?v=4" alt="HeroCoders" height="32"></a> <a href="https://usenextbase.com"><img src="https://avatars.githubusercontent.com/u/145838380?v=4" alt="Nextbase Starter Kit" height="32"></a></p>
<!--sponsorsend-->

<!--techsponsorsstart-->
<h2>Technology Sponsors</h2>
<p><a href="https://netlify.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/netlify-icon.svg" alt="Netlify" height="32"></a> <a href="https://algolia.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/algolia-icon.svg" alt="Algolia" height="32"></a> <a href="https://1password.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/1password-icon.svg" alt="1Password" height="32"></a></p>
<!--techsponsorsend-->