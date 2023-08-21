import jwt from "jsonwebtoken";

class Authorization {
    secretKey: jwt.Secret;

    constructor (secretKey: jwt.Secret) {
        this.secretKey = secretKey;
    }

    generateToken(payload : object) : string {
        return jwt.sign(payload, this.secretKey, {expiresIn: "30s", })
    }

    verify(token: string): jwt.JwtPayload | null {
        let payload: jwt.JwtPayload | null = null;
    
        jwt.verify(token, this.secretKey, (err, data) => {
            if (err) {
                payload = null;
            } else {
                payload = data as jwt.JwtPayload;
            }
        });
    
        return payload;
    }    

    // renewalToken (oldToken : string) : string {
    //     const payload : jwt.JwtPayload = this.verify(oldToken)      
    //     return payload ? this.generateToken(payload.data) : "";
    // }
};
export default Authorization;