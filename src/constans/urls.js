const carsUrl = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'

const urls = {
    base: cars,
    byId:(id) => `${cars}/${id}`
}

export {
    carsUrl, urls
}