export default {
  template: `
    <button class="bg-gray-400 hover:bg-gray-300 px-5 py-2" :disabled="processing"><slot /></button>
    `,
  data() {
    return {
      processing: true,
    };
  },
};
