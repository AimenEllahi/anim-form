import ContactUs from "@/components/contactUs/index";
import React, { Suspense } from "react";

export default function page({ dictionary }) {
  return (
    <Suspense>
      <ContactUs dictionary={dictionary} />
    </Suspense>
  );
}
