import AssignmentList from "./AssignmentList.js";
import AsssignmentCreate from "./AsssignmentCreate.js";

export default {
    components: { AssignmentList, AsssignmentCreate },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

            <asssignment-create @create-assignment="add"></asssignment-create>
        </section>
    `,

    data() {
        return {
            assignments: [
                { name: "Finish project", completed: false, id: 1, tag: "math" },
                { name: "Read chapter 4", completed: false, id: 2, tag: "science" },
                { name: "Turn in homework", completed: false, id: 3, tag: "computer" },
            ],

            newAssignment: "",
        };
    },

    // Results are cached based on dependencies
    // Only re-evaluate when dependencies change
    computed: {
        filters() {
            return {
                completed: this.assignments.filter(assignment => assignment.completed),
                inProgress: this.assignments.filter(assignment => !assignment.completed),
            }
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1,
            })
        }
    }
};
