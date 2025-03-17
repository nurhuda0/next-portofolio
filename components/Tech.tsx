"use client";

import React from "react";
import { companies } from "@/data"; // Assuming you still want to use the companies data

const Tech = () => {
  return (
    <section id="tech" className="py-32">
      <h1 className="heading">
        Skills and
        <span className="text-purple"> Technologies</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 py-20">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-8 max-lg:mt-10">
          {companies.map((company, index) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2 items-center">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <span className="md:text-lg text-sm">{company.name}</span>
              </div>
              {/* Check if the current index is the last item in a row of 5 */}
              {(index + 1) % 5 === 0 && <div className="w-full" />}{" "}
              {/* This creates a new row */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
