import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'
import Homepage from './pages/HomePage';
import AuthCallbackPage from './pages/AuthCallbackPage';
import UserProfilePage from './pages/UserProfilePage';
import ProtectedRoute from './auth/ProtectedRoute';
import { ManageRestaurantPage } from './pages/ManageRestaurantPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout showHero><Homepage/></Layout>} />
      <Route path='/auth-callback' element={<AuthCallbackPage/>}/>
    
      {/* Protected routes */}
      <Route element={<ProtectedRoute/>}>
        <Route path='/user-profile' element={<Layout><UserProfilePage/></Layout>} />
      </Route>
      <Route element={<ProtectedRoute/>}>
        <Route path='/manage-restaurant' element={<Layout><ManageRestaurantPage/></Layout>} />
      </Route>

      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App