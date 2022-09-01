import React  from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/general/logged_out/about";
import DeliveryRegisterPage from "./components/general/logged_out/delivery_register";
import FarmerRegisterPage from "./components/general/logged_out/farmer_register";
import HomePage from "./components/general/logged_out/homepage";
import LoginPage from "./components/general/logged_out/login";
import ManufacturerRegisterPage from "./components/general/logged_out/manufacturer_register";
import { ErrorPage } from "./components/general/logged_out/error";
import { InstallmentsPage } from "./components/farmer/installments";
import { AddNewPlantPage } from "./components/farmer/add_new_plant";
import { ShippingPage } from "./components/farmer/shipping";
import { ManufacturerPage } from "./components/manufacturer/manufacturer";
import { DeliveriesPage } from "./components/delivery/deliveries";

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

        <Route path="/manufacturer" element={<ManufacturerPage/>}/>
        <Route path="/delivery" element={<DeliveriesPage/>}/>

        </Routes>
        
    </div>
)

export default BaseRouter