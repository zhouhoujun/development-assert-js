# packaged development-assert-js

This repo is for distribution on `npm`. The source for this module is in the
[main repo](https://github.com/zhouhoujun/development-assert-js/src/mastert).
Please file issues and pull requests against that repo.
This package use to develop kit for javascript tasks via gulp tasks.

## Install

You can install this package either with `npm`.

### npm

```shell

npm install development-assert-js

```

You can `import` modules:

## import module

```ts
import * as gulp from 'gulp';
import  { Development } from 'development-tool';
import { INodeTaskOption } from 'development-tool-web';
import 'development-assert-js';

```

## Create development tool

```ts
Development.create(gulp, __dirname, {
    tasks:[
        <INodeTaskOption>{
            src: 'src',
            //testSrc: '...',
            //e2eSrc: '...',
            //watchSrc: '...'
            dist: 'lib',
            // buildDist:'build path',
            // releaseDist: 'release path',
            // depolyDist: 'depoly path'
            asserts:{
                // js assert default src: 'src/**/*.js'
                js: {
                    //src: '...',
                    //testSrc: '...',
                    //e2eSrc: '...',
                    //watchSrc: '...'
                    // dist: 'dist path',
                    // buildDist:'build path',
                    // releaseDist: 'release path',
                    // depolyDist: 'depoly path'
                    loader: {
                        module:'development-assert-js',
                        // add pipe works for module tasks.
                        pipe(stream, ctx, dist, gulp){ ... }
                        pipes: Pipe[] | (ctx, dist, gulp)=> Pipe[],
                        output: OutputPipe[] | (stream, ctx, dist, gulp)=> OutputPipe[]
                    }
                },
                jsb: {
                    src: 'jsb/**/*.js',
                    //testSrc: '...',
                    //e2eSrc: '...',
                    //watchSrc: '...'
                    // dist: 'dist path',
                    // buildDist:'build path',
                    // releaseDist: 'release path',
                    // depolyDist: 'depoly path'
                    module:'development-assert-js',
                    // also can add pipe works for module tasks here.
                    pipe(stream, ctx, dist, gulp){ ... }
                    pipes: Pipe[] | (ctx, dist, gulp)=> Pipe[],
                    output: OutputPipe[] | (stream, ctx, dist, gulp)=> OutputPipe[]
                },
                json: 'src/**/*.json',
                css:'src/common/**/*.css',
                moduleBcss: ['src/moduleB/**/*.css'],
                moduleAcss: {
                    src: ['src/apath/**/*.css', 'src/bpath/**/*.css'],
                    dist:'dist path',
                    buildDist:'buildDist path',
                    releaseDist: 'release Distpath',
                    depolyDist: 'depoly Distpath'
                },
                ...
            },
            loader: 'development-tool-web'
        }
    ]
});
```


https://github.com/zhouhoujun/development-assert-js.git

## Documentation

Documentation is available on the
[development-assert-js docs site](https://github.com/zhouhoujun/development-assert-js).

## License

MIT © [Houjun](https://github.com/zhouhoujun/)