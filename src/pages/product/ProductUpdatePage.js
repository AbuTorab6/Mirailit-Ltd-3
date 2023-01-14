import React,{Fragment} from 'react';

import SideNavigation from '../../components/MasterLayout/SideNavigation';
import ProductUpdate from '../../components/product/ProductUpdate';

const ProductUpdatePage = () => {
    return (
        <Fragment>
             <SideNavigation>
                <ProductUpdate/>
            </SideNavigation>
        </Fragment>
    );
};

export default ProductUpdatePage;