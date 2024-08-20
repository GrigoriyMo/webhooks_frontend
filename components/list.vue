<template>
    <v-card class="mx-auto" max-width="500">
        <v-list :items="items"></v-list>
    </v-card>
</template>

<script setup>

const { data } = await useApi('/get');



const items = computed(() => {
    var result = [];
    var array = data.value;
    var defaultData = { type: 'subheader', title: 'Список созданных вебхуков' };
    result.push(defaultData);
    
    if (array) {
        for (var i = 0; i < array.length; i++) {
            result.push({
                title: array[i].event_name + "_id: " + array[i].id + " " + array[i].created_at,
                value: array[i].id + 1
            })
        }
    }
    return result;

})

</script>
