import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./main/App.jsx";
import Inbox from "./chat/Inbox.jsx";
import Chat from "./chat/Chat.jsx";
import Contact from "./contact/Contact.jsx";
import Login from "./login/Login.jsx";
import Register from "./login/Register.jsx";
import Perfil from "./perfil.jsx";

export default function Router() {
    return(
    <BrowserRouter>
        <Routes>
            <Route index element={<Login />} />
            <Route path="/app" element={<App />} />
            <Route path="/chat" element={<Inbox />} />
            <Route path="/chat/:id" element={<Chat />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/perfil" element={<Perfil />} />

        </Routes>
    </BrowserRouter>
    )
   
}