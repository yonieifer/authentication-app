import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Layout/>}>
                        <Route path="/sign-up" element={<SignUpPage />} />
                        <Route path="/log-in" element={<LoginPage />} />
                        <Route path="/user-profile/:email" element={<UserProfilePage/>}/>
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
