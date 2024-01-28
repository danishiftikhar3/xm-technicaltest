import React from "react";
import { Card, Col, Row } from "antd";
import PropTypes from "prop-types";

import "./XMFeatures.scss";

const XMFeaturesCard = ({ headingText, imgName, desc, size }) => {
  return (
    <Card className="xmfeatures__card">
      <div className="xmfeatures__card__heading-row">
        <span className="xmfeatures__card__heading-row__text">
          {headingText}
        </span>
        <img
          // eslint-disable-next-line no-undef
          src={require(`../../../assets/icons/${imgName}.png`)}
          className={`xmfeatures__card__heading-row__img--${size}`}
        />
      </div>
      <div className="xmfeatures__divider" />
      <div className="xmfeatures__card__desc">
        <span className={`xmfeatures__card__desc--${size}`}>{desc}</span>
      </div>
    </Card>
  );
};

XMFeaturesCard.propTypes = {
  headingText: PropTypes.string.isRequired,
  imgName: PropTypes.string.isRequired,
  desc: PropTypes.node.isRequired,
  size: PropTypes.string.isRequired,
};

function XMFeatures() {
  return (
    <div className="xmfeatures">
      <span className="xmfeatures__question">
        Why <b>Trade</b> with XM?
      </span>
      <div className="xmfeatures__divider" />

      <span className="xmfeatures__answer">
        We have been providing traders around the world with the same{" "}
        <b>premium experience</b> for over a decade. As an{" "}
        <b>industry-leader</b>, we know what the modern trader needs to be{" "}
        <b>successful</b> in the markets.
      </span>
      <Row justify="center" gutter={24}>
        <Col span={7}>
          <Card className="xmfeatures__card">
            <div className="xmfeatures__card__heading-row">
              <span className="xmfeatures__card__heading-row__text">
                Superior Trade Execution
              </span>
            </div>
            <div className="xmfeatures__divider" />
            <div className="xmfeatures__card__desc">
              <span className={`xmfeatures__card__desc--large`}>
                99% of trades are executed in <b>less than a second</b>, with no
                requotes or rejections.
              </span>
            </div>
            <div>
              <img
                // eslint-disable-next-line no-undef
                src={require(`../../../assets/icons/fast-execusion-icon.png`)}
                className={`xmfeatures__card__heading-row__img--vertical`}
              />
            </div>
          </Card>
        </Col>
        <Col span={15}>
          <Row style={{ marginBottom: "30px" }}>
            <Col span={24} justify="center" gutter={16}>
              <XMFeaturesCard
                headingText="Competitive Pricing"
                imgName="competitive-pricing-icon"
                desc={
                  <span>
                    We offer some of the <b>lowest spreads</b> and we don’t
                    charge commissions.
                  </span>
                }
                size="large"
              />
            </Col>
          </Row>
          <Row justify="center" gutter={16}>
            <Col span={12}>
              <XMFeaturesCard
                headingText="Advanced Technology"
                imgName="tech-icon"
                desc={
                  <span>
                    Trade on <b>MT4</b> or <b>MT5</b>, with expert tools, across
                    desktop, web and mobile.
                  </span>
                }
                size="small"
              />
            </Col>
            <Col span={12}>
              <XMFeaturesCard
                headingText="Start with $5"
                imgName="dollar-icon"
                desc={
                  <span>
                    Start trading your preferred instruments with as little as a{" "}
                    <b>$5 minimum deposit.</b>{" "}
                  </span>
                }
                size="small"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default XMFeatures;
