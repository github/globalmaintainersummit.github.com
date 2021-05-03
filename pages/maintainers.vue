<template>
  <section>
    <CommonGrid :items="maintainers" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      maintainers: [
        { name: 'Bartłomiej Płotka', project: 'Prometheus' },
        { name: 'Chrissy LeMaire', project: 'dbatools' },
        { name: 'Eileen Uchitelle', project: 'Ruby on Rails' },
        { name: 'Helen Hou-Sandí', project: 'WordPress' },
        { name: 'Ifiok Jr.', project: 'Remirror' },
        { name: 'Lorena Mesa', project: 'PyLadies' },
        { name: 'Mariatta Wijaya', project: 'Python' },
        { name: 'Mike McQuaid', project: 'Homebrew' },
        { name: 'Myles Borins', project: 'Node.js' },
        { name: 'Siân Griffin', project: 'Diesel' },
        { name: 'Quinten Kortum', project: 'HSBC' },
        { name: 'Ingo Schimpff', project: 'Hermès' },
      ],
    }
  },
}
</script>
