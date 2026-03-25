export async function logger(req, res, next) {
    console.log(`
Incoming request:
> Method: ${req.method}    
> URL: ${req.originalUrl}`)

    next()
}   