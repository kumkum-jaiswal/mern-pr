import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashboard from "./admin/AdminDashboard";
import InsertProduct from "./admin/InsertProduct";
import CardData from "./pages/CardData";
import ProductDetail from "./pages/ProductDetail";
import MenCollections from "./pages/MenCollections";
import WoMenCollections from "./pages/WoMenCollections";
import KidsCollections from "./pages/KidsCollections";
import Search from "./pages/Search";
import ShopProduct from "./pages/ShopProduct";
import CheckOut from "./pages/CheckOut";

const App=()=>{
  return(
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/> }/>  
            <Route path="home" element={<Home/> }/>     
            <Route path="carddata" element={<CardData/>}/>
            <Route path="prodetail/:proid" element={<ProductDetail/>}/>
            <Route path="men" element={<MenCollections/>} />
            <Route path="women" element={<WoMenCollections/>}/>
            <Route path="kids" element={<KidsCollections/>} />
            <Route path="search" element={<Search/>} />
            <Route path="shop" element={<ShopProduct/>}/>
            <Route path="checkout" element={<CheckOut/>} />
          </Route>
        </Routes>
        <Routes>
           <Route path="/admin" element={<AdminDashboard/>} >
             <Route path="insertpro" element={<InsertProduct/>}/>
             
           </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;