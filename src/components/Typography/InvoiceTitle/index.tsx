import Typography from "antd/lib/typography";
import { TitleProps } from "antd/lib/typography/Title";
import cc from "classcat";
import React from "react";

export interface InvoiceTitleProps extends TitleProps {}

const InvoiceTitle: React.FC<InvoiceTitleProps> = ({
  level = 4,
  children,
  className,
  ...titleProps
}) => {
  const { Title } = Typography;
  return (
    <Title
      level={level}
      className={cc(["title", className || ""])}
      {...titleProps}
    >
      {children}
    </Title>
  );
};

export default InvoiceTitle;
