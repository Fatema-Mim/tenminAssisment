import React from "react";
import SectionTitle from "./ui/SectionTitle";
import CardWrapper from "./CardWrapper";
import { Section } from "@/interface/interface";

interface PaymentProps {
  payment: Section | null;
 }

export default function Payment({payment}:PaymentProps) {
  return (
    <div className="mb-7">
      <SectionTitle>{payment?.name}</SectionTitle>
      <CardWrapper>
        <p>
          কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{/* */}{" "}
          <span role="button" className="underline cursor-pointer text-green-600">
            এই ভিডিওটি দেখুন
          </span>
         
        </p>
      </CardWrapper>
    </div>
  );
}
