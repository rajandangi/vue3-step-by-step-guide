import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
        </section>
    `,

    data() {
        return {
            assignments: [
                { name: "Finish project", completed: false, id: 1 },
                { name: "Read chapter 4", completed: false, id: 2 },
                { name: "Turn in homework", completed: false, id: 3 },
            ],
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
};
