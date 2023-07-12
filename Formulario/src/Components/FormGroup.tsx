
import { useState } from "react";
import { CharacterizationForm } from "../Forms/CharacterizationForm";
import { AnalysisForm } from "../Forms/AnalysisForm";
import { ProcessForm } from "../Forms/ProcessForm";

export const FormGroup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  
  return (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mt-4 sm:text-left ml-5">
        Tarjeta Oportunidad
      </h2>

      {/* Pasos Step */}
      <div className="flex card border border-gray-200 mt-4">
        <div className="bg-slate-200 w-32 sm:w-56 shadow-xl flex flex-col">
          <button className={`mt-20 ml-10 text-white border-2 border-blue-950 w-5 h-5 rounded-full ${
                currentStep === 1 ? "text-blue-950 font-bold " : "text-gray-400 bg-blue-950"
              }`}>
            <p
              className={`text-sm ml-6 ${
                currentStep === 1 ? "text-blue-950 font-bold " : "text-gray-400 "
              }`}
            >
              Caracterización
            </p>
          </button>
          <div
            className={`mt-20 ml-10 text-white border-2 border-blue-950 w-5 h-5 rounded-full ${
              currentStep === 1 ? "text-blue-950 font-bold " : "text-gray-400 bg-blue-950"
            }`}
            style={{
              width: "2px",
              background: "gray",
              height: "10%",
              marginLeft: "26%",
              marginTop: "3%",
              marginBottom: "3%",
            }}
          ></div>

          <button 
          className={` ml-10 text-white border-2 border-blue-950 w-5 h-5 rounded-full  ${
                (currentStep === 2 ? "text-blue-950 font-bold bg-gray-200" : 
                  currentStep === 3 ? "text-gray-400 bg-blue-950" : "")
              }`}
          >
            <p
              className={`text-sm ml-6 ${
                currentStep === 2 ? "text-blue-950 font-bold" : "text-gray-400 "
              }`}
            >
              Análisis
            </p>
          </button>
          <div
           className={` ml-10 text-white border-2 border-blue-950 w-5 h-5 rounded-full  ${
            (currentStep === 2 ? "text-blue-950 font-bold bg-gray-200" : 
              currentStep === 3 ? "text-gray-400 bg-blue-950" : "")
          }`}
            style={{
              width: "2px",
              background: "gray",
              height: "10%",
              marginLeft: "26%",
              marginTop: "3%",
              marginBottom: "3%",
            }}
          ></div>

          <button className="ml-10 text-white border-2 border-blue-950 w-5 h-5 rounded-full">
            <p
              className={`text-sm ml-6 ${
                currentStep === 3 ? "text-blue-950 font-bold" : "text-gray-400 "
              }`}
            >
              Proceso
            </p>
          </button>

          {currentStep === 2 && (
            <button
              onClick={handlePrevStep}
              className="border border-blue-950 text-blue-950  bg-slate-300 w-32 h-10 rounded  mt-[20rem] ml-[2rem]"
            >
              Regresar
            </button>
          )}

          {currentStep === 3 && (
            <button
              onClick={handlePrevStep}
              className="border border-blue-950 text-blue-950 bg-slate-300 w-32 h-10 rounded mt-[20rem] ml-[2rem]"
            >
              Regresar
            </button>
          )}
        </div>
        <div className="card border border-gray-200 mt-4 ml-9 mb-4 rounded w-full mx-5">
          {currentStep === 1 && <CharacterizationForm />}
          {currentStep === 2 && <AnalysisForm />}
          {currentStep === 3 && <ProcessForm />}
          <div className="flex justify-end mt-3 mb-5 gap-5">
            {currentStep === 1 && (
              <button 
                className="border border-blue-800 text-blue-900 bg-white w-32 h-10 rounded">
                Limpiar
              </button>
            )}

            {currentStep === 1 && (
              <button
                onClick={handleNextStep}
                className="border border-blue-800 text-white rounded bg-blue-900 w-32 h-10 mr-5"
              >
                Siguiente
              </button>
            )}

            {currentStep === 2 && (
              <button className="border border-blue-800 text-blue-900 bg-white w-32 h-10 rounded">
                Limpiar
              </button>
            )}

            {currentStep === 2 && (
              <button
                onClick={handleNextStep}
                className="border border-blue-800 text-white rounded bg-blue-900 w-32 h-10 mr-5"
              >
                Siguiente
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
