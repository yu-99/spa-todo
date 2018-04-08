<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="form-group">
                    <router-link :to="{name: 'createTask'}" class="btn btn-success">Create new Task</router-link>
                </div>
                <table class="table table-striped">
                    <tbody>
                    <tr v-for="task, index in tasks">
                        <td>{{ task.name }}</td>
                        <td style="width: 50px;">
                            <router-link :to="{name: 'editTask', params: {id: task.id}}" class="btn btn-xs btn-default">
                                Edit
                            </router-link>
                        </td>
                        <td style="width: 50px;">
                            <a href="#" class="btn btn-xs btn-danger" v-on:click="deleteEntry(task.id, index)" style="background-color: #fff; color: #dc3545; border-color: #dc3545;">
                                Delete
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                tasks: []
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/v1/tasks')
                .then(function (resp) {
                    app.tasks = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load tasks");
                });
        },
        methods: {
            deleteEntry(id, index) {
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('/api/v1/tasks/' + id)
                        .then(function (resp) {
                            app.tasks.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("Could not delete task");
                        });
                }
            }
        }
    }
</script>
