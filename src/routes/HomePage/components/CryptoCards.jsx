import React from "react";
import { Col, Row } from "antd";
import CryptoCard from "../../../components/CryptoCard";
import useFetchCrypto from "../../../hooks/useFetchCrypto";

const cryptosToShowList = ["BTC", "ETH", "XRP", "LTC", "BCH"];

function CryptoCards() {
  const { data, isLoading } = useFetchCrypto();
  const cryptoData = !isLoading
    ? data.filter((crypto) => cryptosToShowList.includes(crypto.symbol))
    : [];
  //   console.log(cryptoData);

  return (
    <Row
      justify="center"
      gutter={{
        xxl: 32,
        xl: 32,
        lg: 32,
        md: 8,
        sm: 8,
        xs: 8,
      }}
    >
      {cryptosToShowList.map((cryptoSymbol) => {
        const crypto = cryptoData.find(
          (crypto) => crypto.symbol === cryptoSymbol
        );
        return (
          <Col key={cryptoSymbol} xxl={4} xl={4} lg={4} md={7} sm={7} xs={20}>
            <CryptoCard crypto={crypto || {}} isLoading={isLoading} />
          </Col>
        );
      })}
    </Row>
  );
}

export default CryptoCards;
