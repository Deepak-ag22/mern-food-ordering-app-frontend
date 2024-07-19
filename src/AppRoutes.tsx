import { Routes , Route, Navigate} from "react-router-dom"
import Layout from "./layout/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManagerRestaurantPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout showHero><HomePage/></Layout>}/>
        <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
        <Route path="/search/:city" 
        element={<Layout showHero={false}><SearchPage /></Layout>}/>
        <Route path="/detail/:restaurantId" 
        element={<Layout showHero={false}><DetailPage /></Layout>}/>
        <Route element={<ProtectedRoute/>}>
        <Route path="/user-profile"
         element={<Layout><UserProfilePage/></Layout>}
         />
         <Route path="/manage-restaurant"
         element={<Layout><ManageRestaurantPage/></Layout>}/>
         </Route>
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes;