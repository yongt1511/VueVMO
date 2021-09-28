import Homepage from "@/components/Main/Homepage";
import DetailProduct from "@/components/Main/DetailProduct";
import ListProduct from "@/components/Main/ListProduct";
import SignIn from "@/components/User/SignIn";
import SignUp from "@/components/User/SignUp";
import MeatProduct from "./components/Main/MeatProduct";
import FruidProduct from "./components/Main/FruidProduct";
import DrinkProduct from "./components/Main/DrinkProduct";

export const routes = [
    {path: '/', name: 'homepage', component: Homepage},
    {path: '/AllProduct', name: 'AllProduct', component: ListProduct },
    {path: '/MeatProduct', name: 'MeatProduct', component: MeatProduct },
    {path: '/FruidProduct', name: 'FruidProduct', component: FruidProduct },
    {path: '/DrinkProduct', name: 'DrinkProduct', component: DrinkProduct },
    {path: '/Product/:id', name: 'productDetail', component: DetailProduct},
    {path: '/login', name: 'login', component: SignIn},
    {path: '/signup', name: 'signup', component: SignUp},

]