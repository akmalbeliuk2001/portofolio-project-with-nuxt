// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;800;900&family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap",
      },
    ],
  },
};
