import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Formatter() {

  const [code, setCode] = useState([]);
  const [errord, setError] = useState(false);

  function setTextI(event) {
    setText(event.target.value);
  }

  const [text, setText] = useState("");


  function handleConvert() {
    try { setCode(JSON.stringify(JSON.parse(text), null, 2)); setError(false)} catch {
      setError(true);
    }
  }




  return (
    <div className="App">
      <div class="min-h-full">
        <nav class="bg-gray-800">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img class="h-12 w-12" src={logo} alt="Your Company" />
                </div>


                <a href="/getBasename" class="rounded-md mr-3 bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Get basename from path</a>
                <a href="/getBasename/formatter" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Formatter</a>
                <div class="hidden md:block"></div>
              </div>


              <div class="-mr-2 flex md:hidden">
                <button
                  type="button"
                  class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Open main menu</span>

                  <svg
                    class="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    class="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">


            <form>
              <div class="w-full mt-4 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <label for="comment" class="sr-only">
                    JSON Input
                  </label>
                  <textarea
                    value={text}
                    onChange={setTextI}
                    id="comment"
                    rows="4"
                    class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="JSON Input"
                    required
                  ></textarea>
                </div>
                <div class="flex items-center justify-left px-3 py-2 border-t dark:border-gray-600">
                  <button
                    onClick={handleConvert}
                    type="button"
                    class="inline-flex mr-3 items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                  >
                    Convert
                  </button>
                </div>
              </div>
            </form>
            <div class="relative mx-auto mt-24">
              <div class="bg-gray-700 text-white p-4 rounded-md">
                <div class="flex justify-between items-center mb-2">
                  <h2 class="text-lg">Output:</h2>
                  <button
                    class="code bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md"
                    onClick={() => {
                      navigator.clipboard.writeText(code);
                    }}
                  >
                    Copy
                  </button>
                </div>
                <div class="overflow-x-auto" style={{"text-align": "left"}}>
                  <pre id="code" class="text-gray-300">
                    <code>
                      <span class="block">{code}</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            {errord && (
              <p class=" mt-5 text-red-700 flex justify-left">
                Invalid Input Format
              </p>
            )}
            <footer class="bg-white rounded-lg shadow mt-4 dark:bg-gray-800">
              <div class="mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  Created 2024 by Julian P.
                </span>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Formatter;
