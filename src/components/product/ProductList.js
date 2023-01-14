import React,{Fragment,useEffect,useState} from 'react';


import Table from 'react-bootstrap/Table';
import { AiOutlineEdit,AiOutlineDelete } from "react-icons/ai";

import { Link } from 'react-router-dom';


import { productList } from '../../APIServices/productAPIServices';
import { setAllProductFunc } from '../../redux/stateSlice/productState';


import {useDispatch,useSelector} from 'react-redux';

const ProductList = () => 
{

    var dispatch = useDispatch();



    useEffect(()=>{

        productList().then
        (
            (res)=>
            {
                if(res!==false)
                {

                    dispatch(setAllProductFunc(res.products));
                    console.log(res.products)
                }
            }
        )

    },[])



    

    var allProduct = useSelector((state)=>state.productState.allProduct);
    if(allProduct.length===0)
    {
        var allProductArr = <h1>Loading . . . </h1>
    }
    else
    {
        var allProductArr = allProduct.map(
            function(p1,p2)
            {
                return(
                    <tr>
                        <td> {p2} </td>
                        <td>{p1.title}</td>
                        <td>{p1.price}</td>
                        <td> <img src={p1.thumbnail} /> </td>
                        <td>
                            <button  className='table-edit-btn me-2'><Link to={'/productUpdate/'+p1.id} className='table-edit-btn-link'  ><span ><AiOutlineEdit/></span></Link></button>
                        </td>
                    </tr>
                )
            }
        )
    }

    return (
        <Fragment>
            <section className='product-list-section'>
                <div className='table-content'>
                    <div className='my-table'>
                        <Table  hover >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allProductArr}
                            </tbody>
                        </Table>
                    </div>


                </div>
            </section>
        </Fragment>
    );
};

export default ProductList;