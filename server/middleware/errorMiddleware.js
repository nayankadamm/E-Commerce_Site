const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(400);
    next(error);
    }
 const errorHandler = (err, req, res, next) => {
    let statuscode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if(err.name === "CastError"  && err.kind === "ObjectId"){
        message = "Resource Not Found"; 
        statuscode = 400;
       
    }
    res.status(statuscode).json({
        message: message,
        stack: process.env.NODE_ENV === "" ? null : err.stack,
    });
   
 }; 
 export {notFound,errorHandler};