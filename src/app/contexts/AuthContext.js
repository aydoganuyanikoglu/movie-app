'use client'

import React, { useState, createContext, useContext, useEffect,useCallback } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const router = useRouter();

    const setUserLoggedInfalse = () => {
        setUserLoggedIn(false)
    }

    useEffect(() => {
        const storedUserLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
        setUserLoggedIn(storedUserLoggedIn);

        if (storedUserLoggedIn) {
            const user = JSON.parse(localStorage.getItem('currentUser')) || null;
            setUserData(user)
        }
        else {
            setUserData(null)
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.map((user) => {
            if (!user.LikedMovies) {
                user.LikedMovies = [];
            }
            if (!user.isLiked) {
                user.isLiked = {};
            }
            return user;
        });
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    }, []);

    const login = (user) => {
        setUserLoggedIn(true);
        setUserData(user);
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));
        router.push('/')
    };

    const logout = () => {
        setUserLoggedIn(false);
        localStorage.setItem('userLoggedIn', 'false');
        localStorage.removeItem('currentUser');
        router.push('/');
        setUserData(null);
    };

    const saveUserDataToLocalStorage = (updatedUser) => {
        setUserData(updatedUser);
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.map((user) =>
            user.email === updatedUser.email ? updatedUser : user
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    const addToLikedMovies = useCallback((movie) => {
        const updatedLikedMovies = [...(userData.LikedMovies || []), movie];
        const updatedIsLiked = { ...(userData.isLiked || {}), [movie.id]: true };
        const updatedUser = { ...userData, LikedMovies: updatedLikedMovies, isLiked: updatedIsLiked };
        saveUserDataToLocalStorage(updatedUser);
    }, [userData]);

    const removeFromLikedMovies = useCallback((movie) => {
        const updatedLikedMovies = userData.LikedMovies.filter((m) => m.id !== movie.id);
        const updatedIsLiked = { ...(userData.isLiked || {}), [movie.id]: false };
        const updatedUser = { ...userData, LikedMovies: updatedLikedMovies, isLiked: updatedIsLiked };
        saveUserDataToLocalStorage(updatedUser);
    }, [userData]);

    return (
        <AuthContext.Provider value={{ userLoggedIn, userData, login, logout,addToLikedMovies,removeFromLikedMovies,setUserLoggedInfalse }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useAuth };
export default AuthContext;
