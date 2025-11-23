import React from 'react'
import { Navigate } from 'react-router';
import { useAuth } from '../AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return (
            <div className='flex justify-center items-center h-64'>
                <div>Loading...</div>
            </div>
        );
    }
    if (!isAuthenticated) {
        return (
            <Navigate to="/login" replace />
        );
    }
    return children;
}

export default ProtectedRoute
