"use client";

export default function DetailsButton() {
  return (
    <details
      className="cursor-pointer relative right-0 border rounded-md py-1 px-3 border-githubGray-150 bg-githubGray-250 hover:border-githubGray-200"
      id="filterDetails"
    >
      <summary className="select-none font-semibold text-sm text-githubGray-50 list-none flex items-center">
        <svg
          aria-hidden="true"
          className="octicon octicon-filter mr-2"
          data-view-component="true"
          fill="#768390"
          height="16"
          version="1.1"
          viewBox="0 0 16 16"
          width="16"
        >
          <path d="M.75 3h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5ZM3 7.75A.75.75 0 0 1 3.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 7.75Zm3 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
        </svg>
        Filter
      </summary>
      <div className="bg-githubDark-300 border absolute right-0 border-githubGray-150 rounded-md  w-[320px] h-[420px] ml-[-12px] py-2 mt-3">
        <div className="w-full text-xs border-b border-b-githubGray-150 flex justify-between items-center pl-4 pb-1.5 pr-1.5">
          <span className="text-githubGray-50">Feed filters</span>
          <button
            className="hover:bg-githubGray-150 rounded-full p-1"
            onClick={() => {
              const details = document.getElementById("filterDetails") as HTMLDetailsElement;

              if (details) {
                details.open = false;
              }
            }}
          >
            <svg
              aria-hidden="true"
              className="octicon octicon-x"
              data-view-component="true"
              fill="#768390"
              height="16"
              version="1.1"
              viewBox="0 0 16 16"
              width="16"
            >
              <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" />
            </svg>
          </button>
        </div>
      </div>
    </details>
  );
}
