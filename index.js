const cow = require('cowsay')

const objectToPrettyString = (o) => JSON.stringify(o, null, 2)

module.exports = {
    log(strings, ...objects) {
        console.log(
            cow.think({
                text: strings
                    .reduce(
                        (outputs, str, i) => {
                            const hasObject = i < objects.length
                            return (str === '')
                                ? hasObject
                                    ? [...outputs, objectToPrettyString(objects[i])]
                                    : outputs
                                : hasObject
                                    ? [...outputs, str, objectToPrettyString(objects[i])]
                                    : [...outputs, str]
                        },
                        []
                    )
                    .join('')
            })
        )
    }
}
