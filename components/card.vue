<template>
    <v-row justify="center">


        <v-col v-for="(variant, i) in variants" :key="i" cols="12" md="6">
            <v-card :color="color" :variant="variant" class="mx-auto">
                <v-card-item>
                    <div>
                        <div class="text-overline mb-1">
                            Выбранное событие:
                        </div>
                        <div class="text-h6 mb-1">
                            {{ eventType }}
                        </div>
                        <div class="text-caption">Беру на себя ответственность за сие действие</div>
                    </div>
                </v-card-item>

                <v-card-actions>
                    <v-btn @click="postData">
                        Создать
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref } from 'vue'

const variants = ['elevated']
const color = ref('indigo')

const props = defineProps({
    eventType: String
})

function postData() {
    var payload = {
        "data": {
            "event_name": props.eventType.value
        }
    }

    postToBackend('/create', payload)
}

</script>