import { useRouter } from "next/router";
import React from "react";

function insuranceId() {
  const router = useRouter();
  const params = router.query;
  const { insuranceId } = params;
  return <div>{insuranceId}</div>;
}

export default insuranceId;
