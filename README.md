# Otsuka front

Since it is necessary to connect with the server side, this project is not functioning alone,
The following link can be started immediately

↓

template
[ripo](https://github.com/HirokiIto/react-template-2018)

## Demonstrate

[demo](https://hirokiito.github.io/react-template-2018)

sign up components etc are not included in this demo

You can sign in by input the following mail and pass.
* mail: xxx@gmail.com
* pass: aaaaaa

## Road Map

* Make https with nginx
* take camera after input check-in info

## Project Structure

```
.
├── docs                     # Notes
└── src                      # Application source code
    ├── assets               # logo, image, etc...
    ├── components           # Global Reusable Components
    ├── config               # Application Configuration
    ├── containers           # Global Reusable Container Components
    ├── index.css            # Application-wide styles (generally settings)
    ├── index.js             # Application bootstrap and rendering
    ├── routes.js            # Main route definitions
    ├── stores               # Mobx-specific pieces
    └── utils                # utilities

```

## Notes

* [Windows10でNode.jsアプリをPM2で自動起動(サービス化)する方法](https://nashika.net/archives/121)
* [PM2を用いて本番環境でNodeJSアプリを動かす](https://www.yoheim.net/blog.php?q=20170706)
* [Can pm2 run an 'npm start' script](https://stackoverflow.com/questions/31579509/can-pm2-run-an-npm-start-script)
* [MongodbのWindowsインストール](https://qiita.com/boss_ape/items/e4c5024c00de25d3b1b6)

結局windowsでは、pm2で`npm start`はできないから以下で起動

```
pm2 start scripts/start.js
```


## Authors

* Hiroki Ito

License
===============
MIT
