import React, {Component} from 'react';
import {styled, alpha} from '@mui/material/styles';
import Navbar from "@components/Navbar";

export const Home: React.FC = () => {
    return (
        <>
            <Navbar/>
            <div>
                <h1>Home</h1>
                <h1></h1>
            </div>
        </>
    );
}