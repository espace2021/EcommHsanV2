import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios"
async function refreshAccessToken(token) {

try {
const response = await
axios.post('http://localhost:3001/api/users/refreshToken/', {
refreshToken:token.refreshToken
});
const refreshedTokens = await response.data
if (!response.ok) {
throw refreshedTokens
}

token.token = refreshedTokens.token;
token.refreshToken = refreshedTokens.refreshToken

return {
...token
}
} catch (error) {
console.log(error)
return {
...token,
error: "RefreshAccessTokenError",
}
}
}
export const authOptions = {
providers: [
CredentialsProvider({
  name: "Credentials",
  credentials: {
   email: { label: "email", type: "text"},
   password: { label: "Password", type: "password" },
 },

async authorize(credentials, req) {

    const {email, password} = credentials;
     console.log(email, password)
  
     const res = await axios.post('http://127.0.0.1:3001/api/users/login',{
       email:email, 
       password:password
         })
     



const user = await res.data

console.log(user)
if (user) {
return user;
} else {
return null;
}
},
}),],
callbacks: {
async jwt({ token, user, account }) {
// console.log({ account });
if (account && user) {
return { ...token, ...user };
}
console.log("il reste",Date.now() - token.expiresIn)
// Return previous token if the access token has not expired yet
if (Date.now() < token.expiresIn) {
return { ...token, ...user };
}
// Access token has expired, try to update it
return refreshAccessToken(token)
},
async session({ session, token, user }) {
session.user = token ;
session.error = token.error
console.log("SESSION",session)
return session;
},

},








};
export default NextAuth(authOptions);