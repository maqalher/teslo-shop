
import { setUserAddress } from './address/set-user-address'
import { deleteUserAddress } from './address/delete-user-address'
import { getUserAddress } from './address/get-user-address'

import { getProductBySlug } from './products/get-product-by-slug'
import { getStockBySlug } from './products/get-stock-by-slug'
import { getPaginatedProductsWithImages } from './products/product-pagination'

import {authenticate} from './auth/login'
import {login} from './auth/login'
import {logout} from './auth/logout'
import {registerUser} from './auth/register'

import {getCountries} from './country/get-countries'

import {placeOrder} from './order/place-order'
import {getOrderById} from './order/get-order-by-id'
import {getOrdersByUser} from './order/get-orders-by-users'

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
    getOrdersByUser
}