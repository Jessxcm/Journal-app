import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { ThemeProvider } from '@emotion/react';
import { AppTheme } from './theme/AppTheme';

const router = createBrowserRouter(AppRouter);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTheme>
    <RouterProvider router={router} />
    </AppTheme>
  </StrictMode>,
)
