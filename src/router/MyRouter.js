import React,{Fragment} from 'react';

import {Routes,Route,BrowserRouter} from 'react-router-dom'

import ProductListPage from '../pages/product/ProductListPage';
import ProductUpdatePage from '../pages/product/ProductUpdatePage';

const MyRouter = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ProductListPage/>}/>
                    <Route path='/productUpdate/:id' element={<ProductUpdatePage/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
};

export default MyRouter;