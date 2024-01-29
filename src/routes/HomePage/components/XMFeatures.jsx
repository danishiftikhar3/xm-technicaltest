import React from "react";
import { Card, Col, Row } from "antd";
import PropTypes from "prop-types";

import "./XMFeatures.scss";

const XMFeaturesCard = ({
  headingText,
  imgName,
  desc,
  classAttribute = "",
}) => {
  return (
    <Card className="xmfeatures__card">
      <div className="xmfeatures__card__heading-row">
        <span className="xmfeatures__card__heading-row__text">
          {headingText}
        </span>
        <img
          alt={imgName}
          // eslint-disable-next-line no-undef
          src={require(`../../../assets/icons/${imgName}.png`)}
          className={`xmfeatures__card__heading-row__img${classAttribute}`}
        />
      </div>
      <div className="xmfeatures__divider" />
      <div className="xmfeatures__card__desc">
        <span className={`xmfeatures__card__desc${classAttribute}`}>
          {desc}
        </span>
      </div>
    </Card>
  );
};

XMFeaturesCard.propTypes = {
  headingText: PropTypes.string.isRequired,
  imgName: PropTypes.string.isRequired,
  desc: PropTypes.node.isRequired,
  classAttribute: PropTypes.string,
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
        <Col xxl={7} xl={7} lg={7} md={0} sm={0} xs={0}>
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
                alt="fast-execusion"
                // eslint-disable-next-line no-undef
                src={require(`../../../assets/icons/fast-execusion-icon.png`)}
                className={`xmfeatures__card__heading-row__img--vertical`}
              />
            </div>
          </Card>
        </Col>
        <Col xxl={0} xl={0} lg={0} md={22} sm={22} xs={22}>
          <XMFeaturesCard
            headingText="Superior Trade Execution"
            imgName="fast-execusion-icon"
            desc={
              <span>
                99% of trades are executed in <b>less than a second</b>, with no
                requotes or rejections.
              </span>
            }
          />
        </Col>
        <Col xxl={15} xl={15} lg={15} md={22} sm={22} xs={22}>
          <Row justify="center" gutter={24}>
            <Col span={24} className="xmfeatures__card--competitive">
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
                classAttribute="--competitive"
              />
            </Col>

            <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
              <XMFeaturesCard
                headingText="Advanced Technology"
                imgName="tech-icon"
                desc={
                  <span>
                    Trade on <b>MT4</b> or <b>MT5</b>, with expert tools, across
                    desktop, web and mobile.
                  </span>
                }
              />
            </Col>
            <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
              <XMFeaturesCard
                headingText="Start with $5"
                imgName="dollar-icon"
                desc={
                  <span>
                    Start trading your preferred instruments with as little as a{" "}
                    <b>$5 minimum deposit.</b>{" "}
                  </span>
                }
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default XMFeatures;
