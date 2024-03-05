export default defineEventHandler((event) => {
    const name = getRouterParam(event, 'name')

    return {
        status: 200,
        body: {
            message: `Hello, ${name}!`
        }
    }
})