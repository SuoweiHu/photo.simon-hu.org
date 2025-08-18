## Installation & Development

Before commencing install the hugo binaries:

```
brew install hugo           #MAC
choco install hugo-extended #WINDOWS
```

To build a minified version of website, please run: 

```
hugo --gc --minify
```

To start a local server to preview the images: 

```
hugo server 
```





### Whenever Hugo/Theme Needs Upgrade 

Whenever there're new updates to the `gallery` theme, please

-    navigate to the `theme/gallery` directory and run `git pull` to get newest version of the directory (this is if you are installing the theme as a "git submodule") 
-   navigate to the root directory, and run `hugo mod get` to get newest version of the directory (this is if you are installing the theme as a "hugo module") 
-   **RECOMMENDED**: run **both** just in case

```bash
> cd themes/gallery
> git checkout main && git pull
```

```bash
> hugo mod get
> hugo build -gc 
```

Whenever there're new updates to `hugo` (e.g. `0.137.0 -> 0.148.2`), please not only update the local version of hugo via `brew upgrade hugo` but also update in the `vercel.json` file accordinly, such that the vercel deployment respect the newest version: 

```diff
{
    "build": {
        "env": {
-     	   "HUGO_VERSION": "0.137.0"
+     	   "HUGO_VERSION": "0.148.2"
```

