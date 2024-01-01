import React from "react";

const PopupComponent = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-end bg-gray-500 bg-opacity-50 z-50 ">
      <div className="bg-white p-8 rounded-lg md:w-[35%] relative overflow-hidden h-full">
        <button
          className="text-black py-2 px-4 rounded-full font-bold text-md absolute top-2 left-2"
          onClick={onClose}
        >
          Close
        </button>
        <div className="text-left pt-10">
          <p className="text-md mt-2 bg-gray-200 p-4 rounded-xl">
            Hi! This is kalu miah. I'm excited to talk with you. However, I'm
            just in the alpha stage now. Zaman will upgrade me soon. I'll be
            more intelligent then 😊
          </p>
        </div>
        <div className="absolute top-[95%] left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 py-2 rounded ml-4">
          <link
            rel="stylesheet"
            href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
          />

          <div class="max-w-4xl mx-auto">
            <form>
              <label for="chat" class="sr-only">
                Your message
              </label>
              <div class="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
                <button
                  type="button"
                  class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <input
                  type="text"
                  className="dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md"
                  placeholder="Your message..."
                />
                <button
                  type="submit"
                  class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                >
                  <svg
                    class="w-6 h-6 rotate-90"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </form>
            <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupComponent;
