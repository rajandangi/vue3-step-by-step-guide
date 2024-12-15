export default {
    template: `
            <form @submit.prevent="add">
                <div class="border border-gray-600 text-black flex">
                    <input type="text" placeholder="New Assignment" class="p-2 flex-auto" v-model="newAssignment" />
                    <button type="submit" class="bg-white p-2 border-l flex-auto">Add</button>
                </div>
            </form>
    `,

    data() {
        return {
            newAssignment: "",
        }
    },

    methods: {
        add() {
            this.$emit("create-assignment", this.newAssignment);
            this.newAssignment = "";
        }
    }
}