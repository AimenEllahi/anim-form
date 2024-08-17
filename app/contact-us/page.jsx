import ContactUs from "@/components/contactUs/index";
import React, { Suspense } from "react";

export default function page() {
  return (
    <Suspense>
      <ContactUs />
    </Suspense>
  );
}
