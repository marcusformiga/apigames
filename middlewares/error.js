const errorHandler = (err, req, resp, next) =>{
    console.log(err.stack)
    resp.status(err.statusCode || 500).json({success: false, message: err.message || "Erro no servidor"})
}

module.exports = errorHandler