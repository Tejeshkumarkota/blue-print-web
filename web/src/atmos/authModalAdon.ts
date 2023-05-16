import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'


const localStorage: any = typeof window !== `undefined` ? window.localStorage : null

const { persistAtom } = recoilPersist({
    key: 'recoil-persist', // configuration stay the same too
    storage: localStorage
})
export interface AuthModalStates {
    open: boolean,
    view: "Login" | "Sign Up" | "resetPassword" | "lang";
}

const defaultModalState: AuthModalStates = {
    open: false,
    view: 'Login'
}

export const authModalState = atom<AuthModalStates>({
    key: "authModalState",
    default: defaultModalState,
})

export const authState = atom({
    key: "authState",
    default: { loggedIn: false, username: "", data: [] },
    effects_UNSTABLE: [persistAtom]
})
export interface langModalStates {
    lang: String
}
const defaultLangState: langModalStates = {
    lang: 'en',
}
export const langState = atom<langModalStates>({
    key: "langState",
    default: defaultLangState,
    effects_UNSTABLE: [persistAtom]
})