import React from "react";

import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animation";

const FaqSection = () => {
  const [element, control] = useScroll();
  return (
    <Faq ref={element} variants={fade} initial="hidden" animate={control}>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
              provident.
            </p>
          </div>
        </Toggle>
        <Toggle title="How Do I Pay">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
              provident.
            </p>
          </div>
        </Toggle>
        <Toggle title="How do I Call">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
              provident.
            </p>
          </div>
        </Toggle>
        <Toggle title="Timing">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
              provident.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 00rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
