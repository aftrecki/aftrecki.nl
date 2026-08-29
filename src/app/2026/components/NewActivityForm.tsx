import React from "react";

export function NewActivityForm() {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe1EMc-qk3aKaWFCmiDpGA_Khb-n9HqWLM9RJBmqS7mcC6Arg/viewform?embedded=true"
        className="w-full h-full"
        style={{ width: "100%", height: "100%", minHeight: "80vh" }}
        title="Nieuwe activiteit voorstellen"
      >
        Laden…
      </iframe>
    </div>
  );
}
