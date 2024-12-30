"use client";
import React, { useState } from "react";
import CustomRadioButton from "@/components/ui/custom-radio-button";
import Cards from "@/components/pricing/cardsSection/cards";

export default function index({ stripe, dictionary }) {
  const options = {
    Monthly: dictionary.monthly,
    "Semi-Annually": dictionary.semiannually,
    Annually: dictionary.annually,
  };

  const [selectedPlan, setSelectedPlan] = useState("Monthly");

  const subscriptionPlans = [
    {
      title: "ADVENTURER",
      price: {
        monthly: "9,99€",
        semiannually: "9,99€",
        annually: "9,99€",
      },
      discountedPrice: {
        monthly: null,
        semiannually: "8,99€",
        annually: "7,67€",
      },
      productIds: {
        monthly: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_ADVENTURER_PRODUCT_ID,
        semiannually:
          process.env.NEXT_PUBLIC_STRIPE_SEMI_ANNUALLY_ADVENTURER_PRODUCT_ID,
        annually: process.env.NEXT_PUBLIC_STRIPE_ANNUALLY_ADVENTURER_PRODUCT_ID,
      },
      priceIds: {
        monthly: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_ADVENTURER_PRICE_ID,
        semiannually:
          process.env.NEXT_PUBLIC_STRIPE_SEMI_ANNUALLY_ADVENTURER_PRICE_ID,
        annually: process.env.NEXT_PUBLIC_STRIPE_ANNUALLY_ADVENTURER_PRICE_ID,
      },
      yellowCredits: {
        monthly: 30,
        semiannually: 170,
        annually: 340,
      },
      blueCredits: {
        monthly: 1500,
        semiannually: 9000,
        annually: 18000,
      },
      benefits: {
        monthly: dictionary.adventurer.monthly,
        semiannually: dictionary.adventurer.semiannually,
        annually: dictionary.adventurer.annually,
      },
    },
    {
      title: "CHAMPION",
      price: {
        monthly: "14,99€",
        semiannually: "14,99€",
        annually: "14,99€",
      },
      discountedPrice: {
        monthly: null,
        semiannually: "12,99€",
        annually: "11,67€",
      },
      productIds: {
        monthly: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_CHAMPION_PRODUCT_ID,
        semiannually:
          process.env.NEXT_PUBLIC_STRIPE_SEMI_ANNUALLY_CHAMPION_PRODUCT_ID,
        annually: process.env.NEXT_PUBLIC_STRIPE_ANNUALLY_CHAMPION_PRODUCT_ID,
      },
      priceIds: {
        monthly: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_CHAMPION_PRICE_ID,
        semiannually:
          process.env.NEXT_PUBLIC_STRIPE_SEMI_ANNUALLY_CHAMPION_PRICE_ID,
        annually: process.env.NEXT_PUBLIC_STRIPE_ANNUALLY_CHAMPION_PRICE_ID,
      },
      yellowCredits: {
        monthly: 45,
        semiannually: 270,
        annually: 540,
      },
      blueCredits: {
        monthly: 2400,
        semiannually: 14500,
        annually: 29000,
      },
      benefits: {
        monthly: dictionary.champion.monthly,
        semiannually: dictionary.champion.semiannually,
        annually: dictionary.champion.annually,
      },
    },
    {
      title: "MYTHIC",
      price: {
        monthly: "29,99€",
        semiannually: "29,99€",
        annually: "29,99€",
      },
      discountedPrice: {
        monthly: null,
        semiannually: "25,99€",
        annually: "22,67€",
      },
      isPopular: true,
      productIds: {
        monthly: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_MYTHIC_PRODUCT_ID,
        semiannually:
          process.env.NEXT_PUBLIC_STRIPE_SEMI_ANNUALLY_MYTHIC_PRODUCT_ID,
        annually: process.env.NEXT_PUBLIC_STRIPE_ANNUALLY_MYTHIC_PRODUCT_ID,
      },
      priceIds: {
        monthly: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_MYTHIC_PRICE_ID,
        semiannually:
          process.env.NEXT_PUBLIC_STRIPE_SEMI_ANNUALLY_MYTHIC_PRICE_ID,
        annually: process.env.NEXT_PUBLIC_STRIPE_ANNUALLY_MYTHIC_PRICE_ID,
      },
      yellowCredits: {
        monthly: 100,
        semiannually: 600,
        annually: 1200,
      },
      blueCredits: {
        monthly: 5300,
        semiannually: 32000,
        annually: 64000,
      },
      benefits: {
        monthly: dictionary.mythic.monthly,
        semiannually: dictionary.mythic.semiannually,
        annually: dictionary.mythic.annually,
      },
    },
    {
      title: "LEGEND",
      price: {
        monthly: "49,99€",
        semiannually: "49,99€",
        annually: "49,99€",
      },
      discountedPrice: {
        monthly: null,
        semiannually: "44,99€",
        annually: "39,67€",
      },
      productIds: {
        monthly: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_LEGEND_PRODUCT_ID,
        semiannually:
          process.env.NEXT_PUBLIC_STRIPE_SEMI_ANNUALLY_LEGEND_PRODUCT_ID,
        annually: process.env.NEXT_PUBLIC_STRIPE_ANNUALLY_LEGEND_PRODUCT_ID,
      },
      priceIds: {
        monthly: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_LEGEND_PRICE_ID,
        semiannually:
          process.env.NEXT_PUBLIC_STRIPE_SEMI_ANNUALLY_LEGEND_PRICE_ID,
        annually: process.env.NEXT_PUBLIC_STRIPE_ANNUALLY_LEGEND_PRICE_ID,
      },
      yellowCredits: {
        monthly: 200,
        semiannually: 1200,
        annually: 2400,
      },
      blueCredits: {
        monthly: 10500,
        semiannually: 64000,
        annually: 120000,
      },
      benefits: {
        monthly: dictionary.legend.monthly,
        semiannually: dictionary.legend.semiannually,
        annually: dictionary.legend.annually,
      },
    },
  ];

  return (
    <div className='z-10  w-full h-full flex flex-col md:gap-5 gap-10 md:flex-col text-white justify-center items-center'>
      <CustomRadioButton
        options={
          Object.entries(options).map(([key, value], index) => value) || []
        }
        selectedOption={options[selectedPlan]}
        className={
          "flex flex-col justify-center items-center  sm:flex-row flex-wrap "
        }
        onChange={(option) =>
          setSelectedPlan(
            Object.keys(options).find((key) => options[key] === option)
          )
        }
      />
      <div className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
        {subscriptionPlans.map((plan, i) => (
          <Cards
            key={i}
            dictionary={dictionary}
            plan={plan}
            selectedPlan={selectedPlan}
            stripe={stripe}
          />
        ))}
      </div>
    </div>
  );
}
