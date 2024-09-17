import React, { Suspense } from "react";
import CreateCharacter from "@/components/character/createCharacter/index";

export default function page() {
  return (
    <Suspense>
      <CreateCharacter />
    </Suspense>
  );
}
