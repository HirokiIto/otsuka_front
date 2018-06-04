create-react-appのテンプレートの上で、
mobx且つdecoratorを使うには以下の操作が必要

### type
```bash
$ npm run eject
```
on the command line, if you have bootstrapped your app with create-react-app

### install the necessary Babel plugin

```bash
$ npm install --save-dev babel-plugin-transform-decorators-legacy
```
### add the following Babel configuration to your package.json

`
"babel": {
  "plugins": [
    "transform-decorators-legacy"
  ],
  "presets": [
    "react-app"
  ]
},
`
### install mobx and mobx-react, if you didn’t do it already

```bash
$ npm install --save mobx mobx-react
```

`npm run eject`をするとcreate-react-appで包まれていた内容が展開される。

### npm i したものは
* axios
* firebase
* mobx
* mobx-react
* react-router-config
* react-router-dom
* @material-ui/core
* @material-ui/icons
* react-calendar-timeline
* moment

sampleで必要だった→

* faker
* randomcolor"

### npm i -Dしたものは
* babel-plugin-transform-decorators-legacy

# notes


```json:package.json
"homepage": ".",

```

と書けばビルドされた静的ファイルを相対パスで参照してくれるようになります。