<template>
  <div class="patients-page">
    <div class="patients-container">
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Sympthoms</th>
                    <th>First PCR result</th>
                    <th>Second PCR result</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="patient in patients" :key="patient.name">
                    <td>{{patient.name}}</td>
                    <td>{{patient.age}}</td>
                    <td>{{patient.sympthoms}}</td>
                    <td>{{patient.firstPcrResult}}</td>
                    <td>{{patient.secondPcrResult}}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            patients: []
        }
    },
    created() {
        fetch(`http://localhost:3100/patients`).then((res => res.json())).then(res => this.patients = res);
    }
};
</script>
<style lang="scss">
.patients-page {
  .patients-container {
    padding: 50px;
  }
}
</style>