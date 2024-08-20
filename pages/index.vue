<template>
    <div class="d-flex justify-space-around">
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                    Выбрать событие
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                    <v-list-item-title @click="selected = item.title">{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>


    </div>
    <div class="flex">

        <Card :eventType="selected" />
    </div>
    <div class="flex">

        <List :payload="selected" />
    </div>
</template>
<script>
export default {

    data: () => ({
        
        selected: null,
        items: [
            { title: 'CREATE' },
            { title: 'CANCEL' },
            { title: 'RESTART' },
            { title: 'SHUTDOWN' },
        ],
    }),
}
</script>
<style scoped>
.flex {
    text-align: center;
    padding: 15px;
    ;
}
</style>