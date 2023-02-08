import { useRouter } from "next/router";
import React from "react";

function brandId() {
  const router = useRouter();
  const params = router.query;
  const { brandId } = params;

  return <div>{brandId}</div>;
}

export default brandId;
