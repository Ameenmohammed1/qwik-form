import { component$, useStore, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const formData = useStore({
    fullname: "",
    startup: "",
    problem: "",
    solution: "",
    competitive: "",
    sector: "",
  });

  const handleSubmit = $(() => {
    console.log("Form Submitted:", formData);
    alert(`Form Submitted:\n${JSON.stringify(formData, null, 2)}`);
  });

  return (
    <div class="min-h-screen flex flex-col">
      {/* Header */}
      <header class="w-full bg-yellow-500 py-12 px-6 flex flex-col items-center text-center">
        <h1 class="text-2xl md:text-3xl font-semibold text-white leading-snug">
          Welcome Ameen, apply your pitch
        </h1>
        <p class="text-white/90 mt-2 text-sm md:text-base">
          Apply your pitch to join Navigator Show.
        </p>
      </header>

      {/* Form */}
      <main class="flex justify-center w-full sm:px-4 py-10">
        <form
          preventdefault:submit
          onSubmit$={handleSubmit}
          class="w-full max-w-2xl bg-white p-4 sm:p-8 rounded-xl shadow-lg space-y-6"
        >
          {/* Full Name */}
          <div class="flex flex-col">
            <label class="text-gray-700 font-medium mb-1">Full Name</label>
            <input
              required
              value={formData.fullname}
              onInput$={(e) =>
                (formData.fullname = (e.target as HTMLInputElement).value)
              }
              placeholder="Eg: Ameen"
              class="border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              type="text"
            />
          </div>

          {/* Startup Name */}
          <div class="flex flex-col">
            <label class="text-gray-700 font-medium mb-1">Startup Name</label>
            <input
              required
              value={formData.startup}
              onInput$={(e) =>
                (formData.startup = (e.target as HTMLInputElement).value)
              }
              placeholder="Eg: Zuvany"
              class="border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              type="text"
            />
          </div>

          {/* Problem */}
          <div class="flex flex-col">
            <label class="text-gray-700 font-medium mb-1">Problem</label>
            <textarea
              required
              value={formData.problem}
              onInput$={(e) =>
                (formData.problem = (e.target as HTMLInputElement).value)
              }
              rows={4}
              placeholder="Eg: Our problem is..."
              class="border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            />
          </div>

          {/* Solution */}
          <div class="flex flex-col">
            <label class="text-gray-700 font-medium mb-1">Solution</label>
            <textarea
              required
              value={formData.solution}
              onInput$={(e) =>
                (formData.solution = (e.target as HTMLInputElement).value)
              }
              rows={4}
              placeholder="Eg: Our solution is..."
              class="border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            />
          </div>

          {/* Competitive Advantage */}
          <div class="flex flex-col">
            <label class="text-gray-700 font-medium mb-1">
              Competitive Advantage
            </label>
            <textarea
              required
              value={formData.competitive}
              onInput$={(e) =>
                (formData.competitive = (e.target as HTMLInputElement).value)
              }
              rows={4}
              placeholder="Eg: Our competitive advantage is..."
              class="border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            />
          </div>

          {/* Startup Sector */}
          <div class="flex flex-col">
            <label class="text-gray-700 font-medium mb-1">Startup Sector</label>
            <select
              required
              value={formData.sector}
              onInput$={(e) =>
                (formData.sector = (e.target as HTMLSelectElement).value)
              }
              class="border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Select Sector</option>
              <option value="Fintech">Fintech</option>
              <option value="Edtech">Edtech</option>
              <option value="Healthtech">Healthtech</option>
              <option value="Agritech">Agritech</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Foodtech">Foodtech</option>
              <option value="Logistics">Logistics</option>
              <option value="Traveltech">Traveltech</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            class="w-full bg-yellow-500 hover:bg-yellow-600 transition-colors text-white font-semibold py-3 rounded-md shadow-md"
          >
            Submit Now
          </button>
        </form>
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to navigator show",
  meta: [
    {
      name: "description",
      content: "Apply your pitch to join Navigator Show.",
    },
  ],
};
