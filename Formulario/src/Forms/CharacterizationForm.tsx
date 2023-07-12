import { useState } from 'react';
import { InputTable } from "../Components/InputTable";
import { Textarea } from "../Components/Textarea";
// import {useForm} from "react-hook-form";

export const CharacterizationForm = () => {
  const [inputs, setInputs] = useState([{ id: 1 }]);

  const handleAddInput = () => {
    const newInput = { id: inputs.length + 1 };
    setInputs([...inputs, newInput]);
  };

  const handleRemoveInput = () => {
    if (inputs.length > 1) {
      const updatedInputs = inputs.slice(0, -1);
      setInputs(updatedInputs);
    }
  };

  // const validationSchema = {
  //   input: {
  //     required: "Este campo es obligatorio",
  //   },

  //   Textarea:{
  //     required: "Este campo es obligatorio",
  //   },

  //   select:{
  //     required: "Este campo es obligatorio",
  //   },

  //   data:{
  //     required: "Este campo es obligatorio",
  //   }
  // }

  // const { 
  //   register,
  //   handleSubmit,
  // } = useForm({
  //   validationSchema
  // });

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <>
      <div>
        <h2 className="text-xl sm:text-3xl  font-bold text-blue-800 text-center mt-9">
          Formulario Caracterización
        </h2>
        <div>
          <form  className="p-10 bg-white rounded-lg display: block;">
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
              <div className="w-full">
                <label className="block font-serif text-gray-500">Fecha</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="border border-gray-300 text-gray-900 rounded w-full pt-1"
                />
              </div>
              <div className="w-full ">
                <label className="block font-serif text-gray-500">
                  Dirección
                </label>
                <input type="text" name="2" id="inputCargo" className="border border-gray-300 text-gray-900 rounded w-full p-1"/>
              </div>
              <div className="w-full">
                <label className="block font-serif text-gray-500">
                  Proceso afectado
                </label>
                <input type="text" name="2" id="inputCargo" className="border border-gray-300 text-gray-900 rounded w-full p-1"/>
              </div>
            </div>
            <h2 className="mt-4 font-bold text-xl text-slate-400">
              Equipo de trabajo
            </h2>
            <div className="flex card border border-gray-200 mt-5 ml-1 mb-5 rounded w-[28rem] sm:w-[87rem] ">
              <div className="flex bg-white sm:mr-10 rounded mt-4 ml-2 sm:ml-3  w-[99%]">
                <table className="table-auto sm:w-full">
                  <thead>
                    <tr className='bg-slate-200'>
                      <th className="px-4 py-3">Nombre Funcionario</th>
                      <th className="px-4 py-3">Cargo</th>
                      <th className="px-4 py-3">Correo</th>
                    </tr>
                  </thead>
                  <tbody id="tbody">
                    {inputs.map((input) => (
                      <tr key={input.id}>
                        <td>
                          <InputTable />
                        </td>
                        <td>
                          <InputTable />
                        </td>
                        <td>
                          <InputTable />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col gap-1 items-end mr-3 mb-2 mt-4 w-[1%]">
                <button
                  className="bg-blue-900 text-white sm:w-11 w-9 sm:h-12  rounded mb-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddInput();
                  }}
                >
                  <i className="fa-sharp fa-solid fa-plus"></i>
                </button>
                <button
                  className="bg-red-600 text-white sm:w-11 w-9 sm:h-10 rounded"
                  onClick={handleRemoveInput}
                >
                  <i className="fa-sharp fa-solid fa-minus"></i>
                </button>
              </div>
            </div>

            <h2 className="mt-4 font-bold text-xl text-slate-400">
              Caracterización del problema u oportunidad de mejora
            </h2>
            <div className="flex flex-col">
              <div className="flex flex-col sm:flex-row justify-center sm:gap-5">
                <div className="w-full sm:w-1/2">
                  <label className="block mb-2 text-start font-serif text-gray-500 mt-2">
                    Describa brevemente el problema u oportunidad de mejora
                  </label>
                  <Textarea />
                </div>

                <div className="w-full sm:w-1/2">
                  <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
                    ¿En qué parte del proceso se encuentra el problema u
                    oportunidad de mejora?
                  </label>
                  <Textarea />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row ">
                <div className="sm:w-1/3">
                  <div>
                    <label className="block mt-2 font-serif text-start text-gray-500">
                      ¿Por qué motivo se presenta el problema?
                    </label>
                    <select className="border py-2 w-full mt-3 rounded-lg">
                      <option></option>
                      <option>Ausencia de herramientas tecnológicas</option>
                      <option>Infraestructura tecnológica deficiente</option>
                      <option>Falta de capacidad operativa</option>
                      <option>Otros</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="text-center">
                    <label className="block mb-2 text-start font-serif text-gray-500 mt-3 sm:ml-20">
                      ¿Cuál?
                    </label>
                    <textarea
                      id="message"
                      className="block w-full px-2 text-sm text-gray-900 bg-white rounded-lg border sm:ml-20"
                    ></textarea>
                  </div>
                </div>
                <div className="sm:w-1/3">
                  <label className="block mt-2 font-serif text-start text-gray-500 sm:ml-32">
                    ¿Qué tipo de impacto genera el problema?
                  </label>
                  <select className="border py-2 w-full mt-3 rounded-lg sm:ml-32">
                    <option></option>
                    <option>Incumplimiento de los tiempos establecidos</option>
                    <option>Vulneración de la seguridad</option>
                    <option>Aumento de costos</option>
                    <option>Deterioro de la calidad</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center sm:gap-5">
                <div className="w-full sm:w-1/2">
                  <label className="block mb-2 text-start font-serif text-gray-500 mt-2">
                    ¿Cual?
                  </label>
                  <Textarea />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
                    Describa el funcionanmiento ideal del proceso afectado
                  </label>
                  <Textarea />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};


