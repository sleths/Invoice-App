import React from "react";
import {
	Route,
	Routes,
} from "react-router-dom";

import InvoicePage from "../../../pages/InvoicePage";

const InvoiceRoutes: React.FC = () => (
	<Routes>
		<Route path="invoices" element={<InvoicePage/>}/>
	</Routes>
);

export default InvoiceRoutes;