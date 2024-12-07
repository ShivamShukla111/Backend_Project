const asyncHandler = (requestHandler) => {
    return (req, re, next) => {
        Promise.resolve(requestHandler(req, re, next))
        .catch((error) => next(error))
    }
}

export {asyncHandler}