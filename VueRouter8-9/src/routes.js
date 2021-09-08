// define routes to component
import Home from "@/components/Home/Home";
import NgoyProduct from "@/components/Product/NgoyProduct";
import NgoyListProduct from "@/components/Product/NgoyListProduct";
import NgoyProductDetail from "@/components/Product/NgoyProductDetail";
import NgoyProductDetail2 from "@/components/Product/NgoyProductDetail2";

export const routes = [
    {path: '/', name: 'homepage', component: Home},
    {path: '/Product', name: 'product', component: NgoyProduct},
    {path: '/ListProduct', name: 'listproduct', component: NgoyListProduct},
    {path: '/Product/:id', name: 'productdetail', component: NgoyProductDetail},
    {path: '/Product/:id', name: 'productdetail2', component: NgoyProductDetail2}
]