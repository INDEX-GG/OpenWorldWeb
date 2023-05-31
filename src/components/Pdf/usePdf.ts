import { useEffect, useState } from "react";
import { ContentPdfModel } from "@/lib/models/DynamicContent/properties/ContentPdfModel";

export const usePdf = (
  autoOpen: Pick<ContentPdfModel, "autoOpen">["autoOpen"],
) => {
  const [isVisible, setIsVisible] = useState<boolean>(autoOpen);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChangeVisible = () => {
    setIsVisible((prevState) => !prevState);
  };

  return {
    isVisible,
    isMounted,
    handleChangeVisible,
  };
};