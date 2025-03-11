import React, { useState } from "react";
import Barcode from "react-barcode";

const GenerateBarcode = () => {
  const [barcodeValue, setBarcodeValue] = useState("123456789");
  const [labelNumber, setLabelNumber] = useState("Label #001");

  return (
    <div className="flex flex-col items-center gap-4 p-5 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800">Barcode Generator</h2>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          value={barcodeValue}
          onChange={(e) => setBarcodeValue(e.target.value)}
          placeholder="Enter Barcode Text"
          className="p-2 border rounded-md w-72 text-center shadow-md"
        />
        <input
          type="text"
          value={labelNumber}
          onChange={(e) => setLabelNumber(e.target.value)}
          placeholder="Enter Label Number"
          className="p-2 border rounded-md w-72 text-center shadow-md"
        />
      </div>

      <div className="border p-5 bg-white shadow-md rounded-lg flex flex-col items-center">
        <p className="text-lg font-semibold text-gray-700">{labelNumber}</p>
        <Barcode
          value={barcodeValue}
          format="CODE128"
          width={2}
          height={100}
          fontSize={14}
        />
        {/* <p className="text-sm text-gray-600 mt-2">Barcode: {barcodeValue}</p> */}
      </div>
    </div>
  );
};

export default GenerateBarcode;
