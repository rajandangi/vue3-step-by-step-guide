export default {
    template: `
        <div :class="{
            'p-4 border rounded-lg': true,
            'bg-gray-700 border-gray-600 text-white': theme === 'dark',
            'bg-white border-gray-300 text-black': theme === 'light'
            }">

            <h2 v-if="$slots.heading" class="font-bold mb-2">
                <slot name="heading"/>
            </h2>

            <slot/>

            <footer v-if="$slots.footer" class="mt-4 text-sm text-gray-600 border-t border-gray-600 pt-4">
                <slot name="footer"/>
            </footer>
        </div>
    `,
    props: {
        theme: {
            type: String,
            default: 'dark'
        }
    }
}