import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate, } from 'react-router-dom';
import { Provider } from "react-redux";
import './index.css';
import { BookPage } from './pages/book';
import { Layout } from './components/-layout/layout';
import { LayoutPage } from './components/layout-page/layout-page';
import { CardComponent } from './components/card-component/card-component';
import { Terms } from './components/terms-of-use/terms';
import { Contract } from './components/contract-offer/contract';
import { BurgerProvider } from './context/burger-provider';
import { store } from './redux-saga/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Provider store={store}>
      <BurgerProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<LayoutPage />}>
              <Route path="/" element={<Navigate to="/books/all" />} />
              <Route path="/:books/:category" element={<CardComponent />} />
              <Route path="/terms" element={<Terms contentView="terms" />} />
              <Route path="/contract" element={<Contract contentView="contract" />} />
            </Route>
            <Route path="/books/:category/:bookId" element={<BookPage />} />
            {/* <Route path="/profile" element={<ProfilePage />} />  */}
          </Route>
        </Routes>
      </BurgerProvider>
    </Provider>
  </HashRouter>
);
