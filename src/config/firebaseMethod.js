import {getDatabase, push, ref, set} from 'firebase/database'
import { app } from './firebaseConfig'

const db = getDatabase(app)

const FBAdd = (nodeName , body) => {
    return new Promise((resolve, reject) => {
        const studentId = push(ref(db , `${nodeName}/`)).key
        body.id = studentId
        const reference = ref(db , `${nodeName}/${body.id}`)
        set(reference , body)
        .then((res) => {
            resolve(body)
        })
        .catch((err) => {
            reject(err.message)
        })
    })
}

export {FBAdd}