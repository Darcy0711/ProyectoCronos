export const AnalysisForm = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-blue-800 text-center mt-9">
          Formulario Análisis
        </h2>
        <form className="p-10 bg-white rounded-lg">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-center sm:gap-5">
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-start font-serif text-gray-500 mt-2">
                  Indicador meta proceso afectado
                </label>
                <textarea
                  id="message"
                  className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                ></textarea>
              </div>

              <div className="w-full sm:w-1/2">
                <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
                  Indicador real proceso afectado
                </label>
                <textarea
                  id="message"
                  className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
              GAP
            </label>
            <textarea
              id="message"
              className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            ></textarea>
          </div>

          <h2 className="mt-4 font-bold text-xl text-slate-400">
            Análisis problema u oportunidad
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-center sm:gap-5">
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-start font-serif text-gray-500 mt-2">
                  Problema puntual
                </label>
                <textarea
                  id="message"
                  className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                ></textarea>
              </div>

              <div className="w-full sm:w-1/2">
                <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
                  Puntualmente describe ¿Por qué pasa lo anterior?
                </label>
                <textarea
                  id="message"
                  className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center sm:gap-5">
              <div className="w-full sm:w-1/2">
                <label className="block mb-2 text-start font-serif text-gray-500 mt-2">
                  Problema puntual
                </label>
                <textarea
                  id="message"
                  className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                ></textarea>
              </div>

              <div className="w-full sm:w-1/2">
                <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
                  Puntualmente describe ¿Por qué pasa lo anterior?
                </label>
                <textarea
                  id="message"
                  className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                ></textarea>
              </div>
            </div>
            <div>
              <label className="block mb-2 font-serif text-start text-gray-500 mt-2">
                Puntualmente describe ¿Por qué pasa lo anterior?
              </label>
              <textarea
                id="message"
                className="block px-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
