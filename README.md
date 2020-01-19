# svelte-ts-code-spliting-router
Svelte template with Typescript and routing with code-splitting

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/quintans/svelte-ts-code-spliting-router.

It features:
* Typescript
* code spliting
* router

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit quintans/svelte-ts-code-spliting-router svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

*The Typescript setup was copied from https://github.com/tonyrewin/svelte3-ts-boilerplate*

## Typescript
This template makes use of the [svelte-type-checker](https://github.com/halfnelson/svelte-type-checker)

__NOTE__ It has typescript as a `peerDependency` so you will need to have it installed for the code to function.

__NOTE__ Your Svelte components do not need to be typescript for this to run since typescript is a superset of javascript.

### Install

```sh
npm install --save-dev svelte-type-checker
```

### Check the code

```sh
npx svelte-type-checker ./**/*.svelte
```

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now deploy --name my-project
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
