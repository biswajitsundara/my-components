import React from "react";
import styled from 'styled-components'
import PropTypes from "prop-types";

const JumbotronContainer = styled.div`
  background-color: #f8f9fa;
  padding: 50px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Jumbotron = (props) => {
  const { title, text, button } = props;

  return (
    <JumbotronContainer>
      <Heading>{title}</Heading>
      <Paragraph>{text}</Paragraph>
      <Button>{button}</Button>
    </JumbotronContainer>
  );
};

export default Jumbotron;

Jumbotron.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
};
