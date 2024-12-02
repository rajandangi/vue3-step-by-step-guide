export default {
    template: `
    <button
    :class="{'border rounded px-5 py-2':true,
    'bg-blue-400 hover:bg-blue-300': type === 'primary',
    'bg-gray-400 hover:bg-gray-300': type === 'muted',
    'bg-red-400 hover:bg-red-300': type === 'danger',
    'is-loading': processing
    }"
    :disabled="processing"
    >
    <slot />
    </button>
    `,

    props: {
        type: {
            type: String,
            default: "primary",
        },
        processing: {
            type: Boolean,
            default: false,
        }
    }
};
