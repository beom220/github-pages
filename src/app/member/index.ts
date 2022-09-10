import {atom, selector} from "recoil";
import {GetSession} from "@/hooks/useSession";
import {MemberType} from "@/types/member";

export const memberState = atom({
    key: 'memberState',
    default : {
        objectId: null,
        admin_id: null,
        auth_level: null,
        email: null,
        shop: null,
    } as MemberType
})