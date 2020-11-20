# pannachow.github.io

## Deployment

Create deployment files:

```sh
npm run predeploy
```

Commit changes:

```sh
git commit -am "deploy"
```

Deploy to `gh-pages` branch:

```sh
git push origin `git subtree split --prefix dist main`:gh-pages --force
```
