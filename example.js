const cow = require('./')

const foo = "foo"
const bar = "bar"
const baz = { baz: [1, 1, 2, 3, 5, 8, 13]}
const qux = { yes: true, no: false }

cow.log`
my values: ${{ foo, bar, baz, qux }}

Isn't this the coolest? <3 <3 <3

1 + 2  = ${1+2}
`
