import React,{Fragment,useEffect} from 'react';

import {useNavigate,useParams} from 'react-router-dom'
import cogoToast from 'cogo-toast';

import { productDetailById,updateProduct } from '../../APIServices/productAPIServices';

const ProductUpdate = () => 
{
    var navigate = useNavigate();
    var idFromUrl = useParams().id;



    useEffect(()=>{

        productDetailById(idFromUrl).then
        (
            (res)=>
            {
                if(res!=false)
                {
                    document.querySelector('.productName').value=res.title;
                    document.querySelector('.Price').value=res.price;
                }
            }
        )
        
    },[])


    var updateProductFunc = ()=>
    {
        var productName = document.querySelector('.productName').value
        var price = document.querySelector('.Price').value
        

        if(productName.length===0)
        {
            cogoToast.error("Please Provide product name");
        }
        else if (price.length===0)
        {
            cogoToast.error("Please Provide price");
        }
        else
        {
          
            updateProduct(productName,price,idFromUrl).then
            (
                (res)=>
                {
                    if(res===true)
                    {
                        cogoToast.success("product updated");

                        document.querySelector('.productName').value="";
                        document.querySelector('.Price').value="";

                        navigate('/')
                    }
                }
            )
            
        }
    }

    return (
        <Fragment>
            <div className='product-update-section'>

                <div className='form'>
                <h4>Update Product</h4>
                    <form>
                        <div className='product-form-grid'>
                            <div className='col'>
                                <label>Product Name</label>
                                <input className='productName' type="text" />
                            </div>
                            <div className='col'>
                                <label>Price</label>
                                <input className='Price' type="number" />
                            </div>
                        </div>
                        
                    </form>
                    <button className='product-save-btn' onClick={updateProductFunc}>Update Product</button>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductUpdate;