import AssignmentList from "./AssignmentList.js";
import AsssignmentCreate from "./AsssignmentCreate.js";

export default {
    components: { AssignmentList, AsssignmentCreate },

    template: `
        <section class="space-y-6 flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress">
                <asssignment-create @create-assignment="add"></asssignment-create>
            </assignment-list>

            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
        </section>
    `,

    data() {
        return {
            assignments: [],
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

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(
                assignments => this.assignments = assignments
            );
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
