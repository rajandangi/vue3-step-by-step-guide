import Assignments from './Assignments.js';
import Panel from './Panel.js';

export default {
    components: { Assignments, Panel },
    template: `
        <Assignments></Assignments>

        <div class="grid gap-4">
            <panel>
                <template v-slot:heading>
                    Named Slots in Vue 3
                </template>
                Example Demonstrating named slots in Vue 3

                <template v-slot:footer>
                    This is for footer slot.
                </template>
            </panel>

            <panel theme="light">
                <template #heading>
                    Named Slots in Vue 3
                </template>
                Example Demonstrating named slots in Vue 3

                <template v-slot:footer>
                    This is for footer slot.
                </template>
            </panel>
        </div>
    `
};
