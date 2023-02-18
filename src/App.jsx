import React  from 'react';
import AdminPage from './pages/admin.jsx';
import { Routes, Route, useNavigate } from "react-router-dom";
import Detail from './pages/detail.jsx';
import NewPage from './pages/new.jsx';
import NoPage from './pages/noPage';
import EditPage from './pages/edit';
import LoginPage from './pages/login';

function App() {
    const navigate = useNavigate();
    return <div>
        <h1>Demo site test 123</h1>
        <button onClick={()=> {navigate('/new')}}>Create new</button>
        <hr />
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/new" element={<NewPage />} />
            <Route path="/edit/:id" element = {<EditPage />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </div>
}

export default App;