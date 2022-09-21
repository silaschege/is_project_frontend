import React  from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./containers/general/logged_out/about";
import DeliveryRegisterPage from "./containers/general/logged_out/delivery_register";
import FarmerRegisterPage from "./containers/general/logged_out/farmer_register";
import HomePage from "./containers/general/logged_out/homepage";
import LoginPage from "./containers/general/logged_out/login";
import ManufacturerRegisterPage from "./containers/general/logged_out/manufacturer_register";
import { ErrorPage } from "./containers/general/logged_out/error";
import { InstallmentsPage } from "./containers/farmer/installments/installments";
import { AddNewPlantPage } from "./containers/farmer/addNewPlant/add_new_plant";
import { ShippingPage } from "./containers/farmer/shipping/shipping";
import { ManufacturerListViewPage } from "./containers/manufacturer/manufacturerListView";
import { DeliveriesPage } from "./containers/delivery/deliveries";

const BaseRouter = () => (
    <div>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/farmerRegister" element={<FarmerRegisterPage/>}/>
        <Route path="/deliveryRegister" element={<DeliveryRegisterPage/>}/>
        <Route path="/manufacturerRegister" element={<ManufacturerRegisterPage/>}/>

        <Route path="/farmer_installments" element={<InstallmentsPage/>}/>
        <Route path="/farmer_add_new_plant" element={<AddNewPlantPage/>}/>
        <Route path="/farmer_shipping" element={<ShippingPage/>}/>

        <Route path="/manufacturer" element={<ManufacturerListViewPage/>}/>
        <Route path="/delivery" element={<DeliveriesPage/>}/>

        </Routes>
        
    </div>
)

export default BaseRouter