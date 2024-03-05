import { GET_ARTICLES, SET_USER } from "./ActionType";
import db, { auth, provider, storage } from "../Firebase";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
});

export const getArticles = (payload) => ({
    type: GET_ARTICLES,
    payload: payload,
});

export function signInAPI() {
    return (dispatch) => {
        auth.signInWithPopup(provider).then((payload) => {
            dispatch(setUser(payload.user));
        })
            .catch((error) => alert(error.message));
    };
};

export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUser(user));
            }
        });
    };
};

export function signOutAPI() {
    return (dispatch) => {
        auth.signOut().then(() => {
            dispatch(setUser(null));
        })
            .catch((error) => alert(error.message));
    };
};

export function postArticalAPI(payload) {
    return (dispatch) => {

        if (payload.image !== "") {
            const upload = storage.ref(`images/${payload.image.name}`).put(payload.image);
            upload.on("state_changed", (snapshot) => {
                const progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

            }, error => console.log(error.code),
                async () => {
                    const downloadURL = await upload.snapshot.ref.getDownloadURL();
                    db.collection("articles").add({
                        actor: {
                            description: payload.user.email,
                            title: payload.user.displayName,
                            date: payload.timestamp,
                            image: payload.user.photoURL,
                        },
                        video: payload.video,
                        sharedImg: downloadURL,
                        comments: 0,
                        description: payload.description,
                    });
                }
            );
        } else if (payload.video !== "") {
            db.collection("articles").add({
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL,
                },
                video: payload.video,
                sharedImg: "",
                comments: 0,
                description: payload.description,
            });
        } else {
            db.collection("articles").add({
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL,
                },
                video: "",
                sharedImg: "",
                comments: 0,
                description: payload.description,
            });
        }
    };
}

export function getArticlesAPI() {
    return (dispatch) => {
        db.collection("articles").orderBy("actor.date", "desc").onSnapshot((snapshot) => {
            const payload = snapshot.docs.map((doc) => doc.data());
            dispatch(getArticles(payload));
        });
    };
}
