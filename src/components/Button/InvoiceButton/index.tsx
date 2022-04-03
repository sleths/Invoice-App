import Button from "antd/lib/button";
import { ButtonProps } from "antd/lib/button/button";
import React from "react";

import cm from "./style.module.scss";

export interface InvoiceButtonProps extends ButtonProps{}

const InvoiceButton: React.FC<InvoiceButtonProps> = ({
  children,
  className,
  ...buttonProps
}) => (
  <Button className={cm.btn} {...buttonProps}>
    {children}
  </Button>
);

export default InvoiceButton;
