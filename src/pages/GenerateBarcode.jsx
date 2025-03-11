import React, { useState } from "react";
import Barcode from "react-barcode";

const GenerateBarcode = () => {
  const [barcodeValue, setBarcodeValue] = useState("1A2B3C4D");

  return (
    <div className="flex flex-col items-center gap-4 p-5">
      <h2 className="text-2xl font-bold">Barcode Generator</h2>
      <input
        type="text"
        value={barcodeValue}
        onChange={(e) => setBarcodeValue(e.target.value)}
        placeholder="Enter Barcode Value"
        className="p-2 border rounded-md w-64 text-center"
      />
      <div className="border p-3 shadow-md bg-white">
        <Barcode value={barcodeValue} />
      </div>
    </div>
  );
};

export default GenerateBarcode;
