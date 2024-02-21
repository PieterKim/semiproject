<template>
<v-container>
    <v-row no-gutters>
        <v-col sm="10" class="pa-4 mx-auto">
            <v-card class="pa-2">
                <v-img :src="`/${posts.image}`"></v-img>
            <v-card-actions class="pb-0">
                <v-row class="mt-1 mx-1">
                    <v-col sm="2">
                        <v-btn small outlined color="primary">{{ posts.category }}</v-btn>
                    </v-col>
                    <v-col sm="10" class="d-flex justify-end">
                        <v-btn color="success">Edit</v-btn>
                        <v-btn color="red">Delete</v-btn>
                    </v-col>
                </v-row>
            </v-card-actions>
            <v-card-subtitle class="headline">
                <h3>{{ posts.title }}</h3>
            </v-card-subtitle>
            <v-card-text>
                <p>{{ posts.content }}</p>
                <p>{{ posts.created }}</p>
            </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>
<script>
import { defineComponent } from 'vue';

// Components
import API from '../api';

export default {
  data() {
    return {
      posts: {},
    };
  },
  async created() {
    this.response = await API.getPostByID(this.$route.params.id);
    this.posts = this.response;
    },
};
</script>
