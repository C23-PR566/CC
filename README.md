Endpoint : https://20230611t190130-dot-signabc-1.et.r.appspot.com/

1. Register
- URL          : /users
- Method       : POST
- Request Body :
username          		     -> required
email (E-mail)      		     -> unique; required; valid email
password (Password) 		     -> required
confPassword (Password confirmation) -> required; same as password

- Response 
-> successful 
{
    'error'  : false,
    'message : "Registered Succesfully!"
}

2. Login
- URL          : /login
- Method       : POST
- Request Body :
username (Username_  -> required
password (Password)  -> required

- Response 
-> successful (200)
{
    'error'   : false,
    'message' : "Login is Successful",
    'result'  : {
                'id_user'   : "1",
                'username'  : "Tasya",
		'email'	    : "tasya@upi.edu"
                'token'     : "xaskmxoijwoenjnedhehdicbowlmskalaksalmo2001"
    }
}

3. Logout
- URL          : /logout
- Method       : DELETE

- Response 
-> successful (200)
{
    'error'  : false,
    'message : "Logout successful!"
}

4. Get All User
- URL          : /users
- Parameters   : id, username, email, password, 
- Method       : GET

- Response 
-> successful (200)
{
    "status": true,
    "data": [
        {
            "id"	  : "1",
            "username"	  : "isyarat",
            "password"	  : "isyarat123",
            "refreshToken": "0709skdjmsowemjedwnwidhuefb2510sowkodenwdieurfb",
        }
}

5. History
- URL          : /history
- Parameters   : userId, classId, timestamp
- Method       : GET

- Response 
-> successful (200)
{
    "status": true,
    "data": [
        {
            "userId"	  : "1",
            "classId"	  : "edu",
            "timestamp"	  : "2023-06-06 13:05:36",
        }
    "message": "Kamu berhasil menyelesaikan: ${idCounter - 1} kelas."
}
