import axios from 'axios';
import cogoToast from 'cogo-toast';




var baseURL = "https://dummyjson.com"

var productList = ()=>
{
    return axios.get(baseURL+'/products').then
    (
        (res)=>
        {
            if(res.status===200)
            {
                return res.data;
            }
            else
            {
                cogoToast.warn("something is wrong.Can not display the product list.");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}





var productDetailById = (id)=>
{
    return axios.get(baseURL+'/products/'+id).then
    (
        (res)=>
        {
            if(res.status===200)
            {
                return res.data;
            }
            else
            {
                cogoToast.warn("can not show the product detail");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}

var updateProduct = (name,price,id)=>
{
    var data = {
        title:name,
        price:price
    }

    return axios.put(baseURL+'/products/'+id,data).then
    (
        (res)=>
        {
            if(res.status===200)
            {
                return true
            }
            else
            {
                cogoToast.warn("can not update product");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}


export {productList,updateProduct,productDetailById}