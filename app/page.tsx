"use client";

import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
//import Fullpage from "./components/Fullpage";

import SectionLayout from "./components/SectionLayout";
import Card from "./components/Card";
import { cards } from "./utils/cards";
import HorizontalWrapper from "./components/HorizontalWrapper";
import TextSection from "./TextSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <SectionLayout>
        <HorizontalWrapper height="40rem" direction={-1400}>
          <div className="absolute grid grid-cols-5 gap-16">
            {cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              );
            })}
          </div>
        </HorizontalWrapper>
      </SectionLayout>
      {/* <Fullpage /> */}
      <SectionLayout>
        <HorizontalWrapper height="40rem" direction={1400}>
          <div
            className="absolute grid grid-cols-5 gap-16"
            style={{ right: 0 }}
          >
            {cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              );
            })}
          </div>
        </HorizontalWrapper>
      </SectionLayout>
      <SectionLayout>
        <TextSection />
      </SectionLayout>
      <Footer />
    </main>
  );
}
