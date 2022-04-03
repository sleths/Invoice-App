import Typography from "antd/lib/typography";
import { TextProps } from "antd/lib/typography/Text";
import cc from "classcat";
import React from "react";

import cm from "./style.module.scss";

export interface InvoiceTextProps extends TextProps {
  size?: "s" | "md" | "lg" | "xl" | "xxl";
  weight?: "light" | "regular" | "medium" | "bold";
  family?: "spartan";
}

const InvoiceText: React.FC<InvoiceTextProps> = ({
  children,
  size = "s",
  weight = "regular",
  family = "spartan",
  className,
  ...textProps
}) => {
  const { Text } = Typography;
  return (
    <Text
      {...textProps}
      className={cc([
        cm[`font-${size}`],
        cm[`font-${weight}`],
        cm[`font-${family}`],
        className || "",
      ])}
    >
      {children}
    </Text>
  );
};

export default InvoiceText;
