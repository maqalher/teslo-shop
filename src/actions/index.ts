
import { setUserAddress } from './address/set-user-address'
import { deleteUserAddress } from './address/delete-user-address'
import { getUserAddress } from './address/get-user-address'

import { getProductBySlug } from './products/get-product-by-slug'
import { getStockBySlug } from './products/get-stock-by-slug'
import { getPaginatedProductsWithImages } from './products/product-pagination'
import { createUpdateProduct } from './products/create-update-product'
import { deleteProductImage } from './products/delete-product-image'

import {authenticate} from './auth/login'
import {login} from './auth/login'
import {logout} from './auth/logout'
import {registerUser} from './auth/register'

import {getCountries} from './country/get-countries'

import {placeOrder} from './order/place-order'
import {getOrderById} from './order/get-order-by-id'
import {getOrdersByUser} from './order/get-orders-by-users'
import {getPaginatedOrders} from './order/get-paginated-orders'

import {setTransactionId} from './payments/set-transaction-id'
import {paypalCheckPayment} from './payments/paypal-check-payment'

import {getPaginatedUsers} from './user/get-paginated-users'
import {changeUserRole} from './user/change-user-role'

import {getCategories} from './category/get-categories'

export { 
    getPaginatedProductsWithImages, 
    getProductBySlug, 
    getStockBySlug,authenticate, 
    logout, 
    registerUser, 
    login, 
    getCountries, 
    setUserAddress, 
    deleteUserAddress,
    getUserAddress,
    placeOrder,
    getOrderById,
    getOrdersByUser,
    setTransactionId,
    paypalCheckPayment,
    getPaginatedOrders,
    getPaginatedUsers,
    changeUserRole,
    getCategories,
    createUpdateProduct,
    deleteProductImage    
}