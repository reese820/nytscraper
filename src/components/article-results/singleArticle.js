import React from "react";
import { Container, Row, Col } from "../Grid";

export const singleArticle = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.thumbnail || "https://placehold.it/300x300"} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <p>Articles: {props.article}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.href}>
            Go to article!
          </a>
        </Col>
      </Row>
    </Container>
  </li>
);
