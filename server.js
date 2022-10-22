// const express = require('express');
// const cors = require('cors');
// const app = express();

// //add cors as the middleware
// app.use(cors());

// //listen to a specific route using app.use
// //path the application will listen to - first argument
// //callback function that will run when the app serves the path - second argument
// //req contains the request data
// //res handles the result
// //a handler for the /login path. call res.send with js object containing a token
// app.use('/login', (req, res)=>{
//     res.send({
//         token: 'steve'
//     });
// });
// //run the server on port 8080
// app.listen(8080, ()=> console.log('Server running on port 8080'))