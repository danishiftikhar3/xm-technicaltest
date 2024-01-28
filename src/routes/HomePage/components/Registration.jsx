import React, { useState } from "react";
import { Avatar, Button, Col, DatePicker, Form, Input, Row } from "antd";
import moment from "moment/moment";

import "./Registration.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const namePattern = /^[A-Za-z\s]+$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const isPasswordValid = (password) => {
  return (
    password &&
    password.length >= 8 &&
    password.length <= 15 &&
    /\d/.test(password) &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password)
  );
};

const validatePassword = (_, value) => {
  return isPasswordValid(value) ? Promise.resolve() : Promise.reject();
};

function Registration() {
  const [form] = Form.useForm();
  const [step, setStep] = useState(1);
  const [step1Validated, setStep1Validated] = useState(false);
  const [step2Validated, setStep2Validated] = useState(false);
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);

  const disabledDate = (current) => {
    // Can not select days after 18 years ago and before 60 years ago
    const eighteenYearsAgo = moment().subtract(18, "years");
    const sixtyYearsAgo = moment().subtract(60, "years");
    return current && (current > eighteenYearsAgo || current < sixtyYearsAgo);
  };

  const handleStep1Validator = (fullName, dob) => {
    const isFullNameValid = fullName && namePattern.test(fullName);
    setStep1Validated(isFullNameValid && dob);
  };

  const handleStep2Validator = (email, password) => {
    const isEmailPassword = email && emailPattern.test(email);

    setStep2Validated(isEmailPassword && isPasswordValid(password));
  };

  const handleValuesChange = (_, allValues) => {
    const fullName = allValues.fullName;
    const dob = allValues.dob;
    const email = allValues.email;
    const password = allValues.password;

    if (step === 1) {
      handleStep1Validator(fullName, dob);
    } else if (step === 2) {
      handleStep2Validator(email, password);
    }
  };

  const renderValidationItem = ({ condition, validationText }) => {
    const color = condition ? "#29A643" : "#959595";
    return (
      <div
        key={validationText}
        className="registration__form__password-validation-list__item"
      >
        <FontAwesomeIcon icon="fa-regular fa-circle-dot" style={{ color }} />
        <span style={{ color, paddingLeft: "15px" }}>{validationText}</span>
      </div>
    );
  };

  return (
    <div className="registration">
      <span className="registration__heading">- Register Here -</span>
      <span className="registration__event__desc">
        Join us to celebrate our biggest night of the year.
      </span>
      <Row justify="center">
        <Col
          className="registration__event__date"
          xxl={6}
          xl={6}
          lg={6}
          md={8}
          sm={8}
          xs={20}
        >
          <FontAwesomeIcon
            icon="fa-regular fa-calendar-check"
            style={{ color: "#fff", fontSize: 26 }}
          />
          <div className="registration__event__date__text">
            12 November 2022
          </div>
        </Col>
        <Col
          className="registration__event__time"
          xxl={4}
          xl={4}
          lg={4}
          md={6}
          sm={6}
          xs={24}
        >
          <FontAwesomeIcon
            icon="fa-regular fa-clock"
            style={{ color: "#fff", fontSize: 26 }}
          />
          <span className="registration__event__time__text">
            12 November 2022
          </span>
        </Col>
        <Col
          className="registration__event__loc"
          xxl={6}
          xl={6}
          lg={6}
          md={8}
          sm={8}
          xs={24}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-location-dot"
            style={{ color: "#fff", fontSize: 26, paddingTop: 33 }}
          />
          <span className="registration__event__loc__text">
            Centara Grand & Bangkok Convention Centre, Bangkok
          </span>
        </Col>
      </Row>

      <Form
        className="registration__form"
        form={form}
        layout="vertical"
        requiredMark={false}
        onValuesChange={handleValuesChange}
      >
        <Row
          gutter={32}
          justify={{ xs: "center" }}
          style={{ alignSelf: "center" }}
        >
          <Col
            className="registration__form__step"
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={step === 1 ? 24 : 0}
          >
            <div>
              <Avatar
                size="32"
                style={{
                  backgroundColor: "#32AA43",
                  color: '#FFF"',
                }}
              >
                1
              </Avatar>
              <span className="registration__form__step__text">Step 1</span>
            </div>
            <div
              className={`registration__form__step__progress ${
                step === 2
                  ? "progress100"
                  : step1Validated
                  ? "progress50"
                  : "progress0"
              }`}
            />
          </Col>
          <Col
            className="registration__form__step"
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={step === 2 ? 24 : 0}
          >
            <div>
              <Avatar
                size="32"
                style={{
                  backgroundColor: step === 2 ? "#32AA43" : "#DDD",
                  color: step === 2 ? "#FFF" : "#201D27",
                }}
              >
                2
              </Avatar>
              <span className="registration__form__step__text">Step 2</span>
            </div>
            <div
              className={`registration__form__step__progress ${
                registrationSuccessful
                  ? "progress100"
                  : step2Validated
                  ? "progress50"
                  : "progress0"
              } `}
            />
          </Col>
        </Row>
        <Row
          gutter={32}
          justify={{ xs: "center" }}
          style={{ alignSelf: "center", marginTop: "30px" }}
        >
          {step === 1 ? (
            <>
              <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={20}>
                <Form.Item
                  name="fullName"
                  label="Full Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your full name!",
                    },
                    {
                      pattern: namePattern,
                      message:
                        "Name should not contain numbers or special characters!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Full Name"
                    className="registration__form__input"
                  />
                </Form.Item>
              </Col>
              <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={20}>
                <Form.Item label="Date of Birth" name="dob">
                  <DatePicker
                    placeholder="dd/mm/yyyy"
                    className="registration__form__input"
                    format="DD/MM/YYYY"
                    disabledDate={disabledDate}
                  />
                </Form.Item>
              </Col>
            </>
          ) : step === 2 ? (
            <>
              <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={20}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email",
                    },
                    {
                      pattern: emailPattern,
                      message: "Please enter a valid email address",
                    },
                  ]}
                >
                  <Input
                    placeholder="email@email.com"
                    className="registration__form__input"
                  />
                </Form.Item>
              </Col>
              <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={20}>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ validator: validatePassword }]}
                >
                  <Input.Password
                    placeholder=""
                    className="registration__form__input"
                  />
                </Form.Item>
                {!registrationSuccessful && (
                  <Form.Item
                    shouldUpdate={(prevValues, currentValues) =>
                      prevValues.password !== currentValues.password
                    }
                  >
                    {({ getFieldValue }) => {
                      const password = getFieldValue("password") || "";
                      return (
                        <div className="registration__form__password-validation-list">
                          {renderValidationItem({
                            condition:
                              password.length >= 8 && password.length <= 15,
                            validationText: "8 - 15 characters",
                          })}

                          {renderValidationItem({
                            condition: /\d/.test(password),
                            validationText: "1 or more numbers",
                          })}

                          {renderValidationItem({
                            condition: /[a-z]/.test(password),
                            validationText: "1 or more lower case letters",
                          })}

                          {renderValidationItem({
                            condition: /[A-Z]/.test(password),
                            validationText: "1 or more upper case letters",
                          })}

                          {renderValidationItem({
                            condition: /[!@#$%^&*(),.?":{}|<>]/.test(password),
                            validationText: "1 or more special characters",
                          })}
                        </div>
                      );
                    }}
                  </Form.Item>
                )}
              </Col>
            </>
          ) : null}
        </Row>
        {!registrationSuccessful ? (
          <Row style={{ alignSelf: "center" }}>
            <Col span={10}>
              <Button
                disabled={
                  step === 1
                    ? !step1Validated
                    : step === 2
                    ? !step2Validated
                    : false
                }
                className="registration__form__btn"
                onClick={() => {
                  if (step === 1) {
                    setStep(2);
                  } else {
                    setRegistrationSuccessful(true);
                  }
                }}
              >
                {step === 1 ? "Continue" : "Register now"}
              </Button>
            </Col>
          </Row>
        ) : (
          <div className="registration__form__success">
            <div className="registration__form__success__heading">
              <FontAwesomeIcon
                icon="fa-solid fa-circle-check"
                style={{ color: "#29A643", paddingRight: "20px" }}
                size="lg"
              />
              Registration Successful
            </div>
            <div className="registration__form__success__desc">
              <FontAwesomeIcon
                icon="fa-solid fa-caret-right"
                style={{ color: "#29A643", paddingRight: "20px" }}
              />
              Thank you for registering for our event with XM. You will receive
              an email shortly with confirmation of your registration.
            </div>
          </div>
        )}
      </Form>
      <div className="registration__create-account">
        Don’t have an account?{" "}
        <span className="registration__create-account--red">
          Create one here
        </span>{" "}
        and register for the event
      </div>
      <div className="registration__tc">
        <span>
          Terms and Conditions apply*. To read the full T&Cs,{" "}
          <a className="registration__tc--red">click here</a>.
        </span>
      </div>
    </div>
  );
}

export default Registration;
