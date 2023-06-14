module.exports = (server)  =>  {

    require( 'dotenv').config();
    const port = process.env.PORT || 3000;
    
    server.listen(port, (err) => {
        console.log(`Server listening http://localhost:${port}`);    
    });
}


