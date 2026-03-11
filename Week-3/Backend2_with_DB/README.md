1.Generate package.json
2.Create express server
3.Install mongoose and connect to mongoDB server(npm i mongoose)
REST APT ---MongoDB native driver-->DB server
REST APT ---Mongoose OBM tool-->DB server
4.Build USER REST API
                 -Create User
                 -read all user
                 -read a user by ID
                 -Update a user by ID
                 -Delete a user by ID
5.Create Schema and model of the resource(user)
6.Define routes
-->Handling unavailable resources
-->Validators during update
-->Hasing password(hello->vsdjvhjs2rjcsfnjs  It is irreversible ){module name:bcryptjs}
-->Unique fields
-->Refined version of error handling middleware
-->Status codes:
200-successful completion of any operation except create
201-representing creation operation success
All 400 series represents client side error
400-bad request
401-Unauthorized
404-not found
All 500 series represents server side errors
500-Server error
Date:07-03-2026
### User Authentication(Login)
-Submit credentials and get token
-

req-------->Public routes (By anyone)
req------>middleware(verification mechanism)--->Protected routes(By authenticated users only)
xss and csrf
