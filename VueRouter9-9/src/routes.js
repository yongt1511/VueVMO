// define routes to component
import Home from "@/components/Home/Home";
import NgoyProduct from "@/components/Product/NgoyProduct";
import ProductStart from "@/components/Product/NgoyListProduct";
import NgoyProductDetail from "@/components/Product/NgoyProductDetail";
import NgoyProductEdit from "@/components/Product/NgoyProductEdit";


export const routes = [
    {path: '/', name: 'homepage', component: Home},
    {path: '/Product', name: 'product', component: NgoyProduct, children: [
            {path: '', name: 'index', component: ProductStart},
            {path: ':id', name: 'productdetail', component: NgoyProductDetail},
            {path: ':id/edit', name: 'productedit', component: NgoyProductEdit },
        ]
    },
    // {path: '/ListProduct', name: 'listproduct', component: NgoyListProduct},
    // {path: '/Product/:id', name: 'productdetail', component: NgoyProductDetail},
    // {path: '/Product/:id', name: 'productdetail2', component: NgoyProductDetail2}
]