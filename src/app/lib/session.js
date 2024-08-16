import * as jose from "jose"
import { cookies } from "next/dist/client/components/headers"
const secret = new TextEncoder().encode(process.env.JOSE_SESSION_KEY)
const issuer = 'urn:jerfio:issuer'
const audience = 'urn:jerfio:audience'


export const encodeUserSession = async (userId) => {
    const expiresAt = '5000s'
    const jwt = await new jose.EncryptJWT({ 'user': userId })
        .setProtectedHeader({ alg: 'dir', enc: 'A128CBC-HS256' })
        .setIssuedAt()
        .setIssuer(issuer)
        .setAudience(audience)
        .setExpirationTime(expiresAt)
        .encrypt(secret)

    console.log(jwt)
    return jwt
}

export const decodeUserSession = async (jwt) => {
    try {
        const { payload } = await jose.jwtDecrypt(jwt, secret, {
            issuer: issuer,
            audience: audience,
        })
        const { user } = payload
        // console.log("user Payload ", user);
        return user
    } catch (error) {

    }

    return null
}

// async function verifySession(){
//     const userId = '1'
//     const jwtToken = await encodeUserSession(userId)
//     const user = await decodeUserSession(`${jwtToken}`)
//     console.log(user, userId === user);

// }

// verifySession().then(x=>console.log("Verify")).catch(err=> console.log(err))

export const setSessionUser = async (userId) => {
    const newSessionValue = await encodeUserSession(userId)

    //call in route.js

    cookies().set("session_id", newSessionValue)
}

export const getSessionUser = async () => {

    const cookiesSessionvalue = cookies().get("session_id")
    if (!cookiesSessionvalue) {
        return null
    }

    const extractedUserId = await decodeUserSession(cookiesSessionvalue.value)
    // console.log("Extracted : ",extractedUserId)
    if (!extractedUserId) {
        return null
    }
    return extractedUserId
}

export const endSessionForUser = async ()=>{

    cookies().delete("session_id")

}