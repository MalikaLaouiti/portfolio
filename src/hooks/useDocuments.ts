
import { useState } from "react";
import { DocumentItem, DOCUMENTS } from "@/src/types/documents";

export const useDocuments = () => {
  const [selected, setSelected] = useState<DocumentItem>(DOCUMENTS[0]);
  const [showRequest, setShowRequest] = useState(false);

  const handleSelect = (doc: DocumentItem) => {
    setSelected(doc);
    setShowRequest(false);
  };

  const openRequest = () => setShowRequest(true);
  const closeRequest = () => setShowRequest(false);

  return {
    documents: DOCUMENTS,
    selected,
    showRequest,
    handleSelect,
    openRequest,
    closeRequest,
  };
};