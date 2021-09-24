import Homepage from "@/components/Main/Homepage";
import DetailProduct from "@/components/Main/DetailProduct";
import ListProduct from "@/components/Main/ListProduct";
import SignIn from "@/components/User/SignIn";
import SignUp from "@/components/User/SignUp";

export const routes = [
    {path: '/', name: 'homepage', component: Homepage},
    {path: '/Product', name: 'product', component: ListProduct, children :[

        ]},
    {path: '/Product/:id', name: 'product', component: DetailProduct},
    {path: '/login', name: 'login', component: SignIn},
    {path: '/signup', name: 'signup', component: SignUp},

]