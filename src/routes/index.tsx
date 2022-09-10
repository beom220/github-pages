import {Routes, Route} from "react-router";
import {Navigate} from "react-router-dom";
import {
    Login,
    ErrorPage,
    AllianceList,
    AllianceService,
    AllianceInfo, AllianceOption, AllianceEditService, AllianceCreate
} from "@/pages";
import {memberState} from "@/app/member";
import {useRecoilValue} from "recoil";

// element={member ? <ProductCreate/> : <Navigate to="/"/>}

// 제휴사
export function PublicRoutes() {
    const member = useRecoilValue(memberState);
    const {shop} = member

    return (
        <Routes>
            {shop &&
                <>
                    <Route path="/alliance/option/:id"
                           element={<AllianceOption/>}
                    />
                    <Route path="/alliance/service/edit/:id"
                           element={<AllianceEditService/>}
                    />
                    <Route path="/alliance/service/:id"
                           element={<AllianceService/>}
                    />
                    <Route path="/alliance/info/:id"
                           element={<AllianceInfo/>}
                    />
                </>
            }

            <Route path="/login"
                   element={!shop ?
                       <Login/> :
                       <Navigate to={`/alliance/info/${shop}`}/>
                   }
            />

            <Route path="/"
                   element={!shop ?
                       <Navigate to="/login"/> :
                       <Navigate to={`/alliance/info/${shop}`}/>
                   }
            />
            <Route path="*"
                   element={<ErrorPage/>}
            />
        </Routes>
    )
}

// 관리자
export function PrivateRoutes() {
    const member = useRecoilValue(memberState);
    const {objectId} = member;
    return (
        <Routes>
            <Route path="/alliance/option/:id"
                   element={<AllianceOption/>}
            />
            <Route path="/alliance/service/edit/:id"
                   element={<AllianceEditService/>}
            />
            <Route path="/alliance/service/:id"
                   element={<AllianceService/>}
            />
            <Route path="/alliance/info/:id"
                   element={<AllianceInfo/>}
            />
            <Route path="/alliance/create"
                   element={<AllianceCreate/>}
            />

            <Route path="/alliance"
                   element={<AllianceList/>}
            />

            <Route path="/login"
                   element={!objectId ?
                       <Login/> :
                       <Navigate to="/alliance"/>
                   }
            />

            <Route path="/"
                   element={!objectId ?
                       <Navigate to="/login"/> :
                       <Navigate to="/alliance"/>
                   }
            />
            <Route path="*"
                   element={<ErrorPage/>}
            />
        </Routes>
    )
}

// export default function Router() {
//     const member = useRecoilValue(memberState);
//     const {objectId, shop} = member
//     return (
//         <Routes>
//             <Route path="/alliance/option/:id"
//                    element={<AllianceOption/>}
//             />
//             <Route path="/alliance/service/edit/:id"
//                    element={<AllianceEditService/>}
//             />
//             <Route path="/alliance/service/:id"
//                    element={<AllianceService/>}
//             />
//             <Route path="/alliance/info/:id"
//                    element={<AllianceInfo/>}
//             />
//             <Route path="/alliance/create"
//                    element={<AllianceCreate/>}
//             />
//             <Route path="/alliance"
//                    element={<AllianceList/>}
//             />
//
//             <Route path="/login"
//                    element={<Login/>}
//             />
//             <Route path="/"
//                    element={<Login/>}
//             />
//             <Route path="*"
//                    element={<ErrorPage/>}
//             />
//         </Routes>
//     )
// }
