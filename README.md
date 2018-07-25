# cow-log

`cow-log` is a novelty logger that uses template strings and `cowsay`.

##  Usage

```sh
$ npm install @zachlysobey/cow-log
```

### Example

```js
const cow = require('@zachlysobey/cow-log')

const foo = "bar"
const baz = { arr: [1, 1, 2] }
const qux = { yes: true, no: false }

cow.log`
my values: ${{ foo, baz, qux }}

Isn't this the coolest? <3 <3 <3

1 + 2  = ${1+2}
`
```

Output would be:

```
 __________________________________
(                                  )
( my values: {                     )
(   "foo": "bar",                  )
(   "baz": {                       )
(     "arr": [                     )
(       1,                         )
(       1,                         )
(       2                          )
(     ]                            )
(   },                             )
(   "qux": {                       )
(     "yes": true,                 )
(     "no": false                  )
(   }                              )
( }                                )
(                                  )
( Isn't this the coolest? <3 <3 <3 )
(                                  )
( 1 + 2  = 3                       )
(                                  )
 ----------------------------------
        o   ^__^
         o  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
