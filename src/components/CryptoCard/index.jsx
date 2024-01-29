import React from "react";
import { Card, Row, Col, Divider } from "antd";
import PropTypes from "prop-types";
import "./CryptoCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CryptoCard({ crypto, isLoading, error }) {
  const { name, symbol, percent_change_24h, price_usd } = crypto;
  return (
    <Card size="small" className="crypto-card" loading={isLoading}>
      {error ? (
        <div style={{ color: "#fff" }}>{`Failed to fetch crypto :-(`}</div>
      ) : Object.keys(crypto).length === 0 ? (
        <></>
      ) : (
        <>
          <Row>
            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={4}>
              <img
                className="crypto-card__crypto-logo"
                alt="XM Logo"
                // eslint-disable-next-line no-undef
                src={require(`../../assets/icons/${symbol}.png`)}
              />
            </Col>
            <Col
              xxl={6}
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={4}
              className="crypto-card__crypto-symbol"
            >
              {symbol}
            </Col>
            <Col
              xxl={7}
              xl={7}
              lg={7}
              md={7}
              sm={7}
              xs={5}
              className="crypto-card__crypto-name"
            >
              {name}
            </Col>
          </Row>
          <Divider className="crypto-card__divider" />
          <span className="crypto-card__crypto-price">
            ${parseFloat(price_usd).toFixed(2)}
          </span>
          <div className="crypto-card__crypto-percentage-change">
            {percent_change_24h >= 0 ? (
              <div className="crypto-card__crypto-percentage-change--positive">
                <FontAwesomeIcon
                  icon="fa-solid fa-circle-chevron-up"
                  style={{ color: "#B1FFC2", marginRight: "5px" }}
                />
                {parseFloat(percent_change_24h).toFixed(2)} %
              </div>
            ) : (
              <div className="crypto-card__crypto-percentage-change--negative">
                <FontAwesomeIcon
                  icon="fa-solid fa-circle-chevron-down"
                  style={{ color: "#FFA3A6", marginRight: "5px" }}
                />
                {Math.abs(parseFloat(percent_change_24h)).toFixed(2)} %
              </div>
            )}
          </div>
        </>
      )}
    </Card>
  );
}

CryptoCard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  crypto: PropTypes.shape({
    name: PropTypes.string,
    nameid: PropTypes.string,
    percent_change_1h: PropTypes.string,
    percent_change_7d: PropTypes.string,
    percent_change_24h: PropTypes.string,
    price_btc: PropTypes.string,
    price_usd: PropTypes.string,
    rank: PropTypes.number,
    symbol: PropTypes.string,
  }).isRequired,
};

export default CryptoCard;
