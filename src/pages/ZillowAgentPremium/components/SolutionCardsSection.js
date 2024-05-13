import React from "react";
import styled from "styled-components";
import SolutionCard from "./SolutionCard";

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export default function SolutionCardsSection() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl leading-9 font-extrabold text-zinc-900">
            Find the right real estate solution for you
          </h2>
          <p className="mt-4 text-lg leading-6 text-zinc-600">
            Whether you work independently or lead a large team of agents, we
            have tailored options to grow your real estate network.
          </p>
        </div>

        <div className="mt-10">
          <CardWrapper>
            <SolutionCard
              title="Agent solutions"
              description="Instantly connect with buyers and gain the tools and insights to help them find the right home faster."
            />
            <SolutionCard
              title="Team solutions"
              description="For teams and brokerages of up to 11 agents. Set your team up for success with leads and tools to track your agents' progress."
            />
            <SolutionCard
              title="Broker solutions"
              description="For brokerages of 11+. Fuel your brokerage with new leads, strengthen your conversion strategy and manage agents' performance."
            />
          </CardWrapper>
        </div>
      </div>
    </div>
  );
}
