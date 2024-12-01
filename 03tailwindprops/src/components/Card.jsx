import React from 'react'

function Card(props) {
    return (
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img
    class="w-24 h-24 md:w-48 md:h-auto md:rounded-none mx-auto mb-2"
    src="https://media.istockphoto.com/id/1288842246/photo/cute-indian-child-showing-smart-phone-with-thumps-up-in-car-window.jpg?b=1&s=612x612&w=0&k=20&c=QbQDXFtBh9mhBCQiUW-b8Cuo20-sS-MONLsDTBbAnDE="
    alt=""
    width="384"
    height="512"
  />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale on large teams.
        It’s easy to customize, adapts to any design, and the build size is
        tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>

    )
}

export default Card
