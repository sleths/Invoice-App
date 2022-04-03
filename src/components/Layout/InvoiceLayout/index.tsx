import Layout, { Content } from "antd/lib/layout/layout";
import React from "react";

import InvoiceRoutes from "../../Routes/InvoiceRoutes";
import cm from "./style.module.scss";

export interface InvoiceLayoutProps {
}

const InvoiceLayout: React.FC<InvoiceLayoutProps> = ({
  children,
}) => (
  <Layout className={cm.main}>
      <Content>
<InvoiceRoutes />
      </Content>
    </Layout>
);

export default InvoiceLayout;
