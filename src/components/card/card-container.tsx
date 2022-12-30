import { useState } from "react";
import { DetailCard } from "./detail-card";
import { ImageCard } from "./image-card";

export const CardContainer =  () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      {showDetails ? <DetailCard /> : <ImageCard />}
    </div>
  )
}