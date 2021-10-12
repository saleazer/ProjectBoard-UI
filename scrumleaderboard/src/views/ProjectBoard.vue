<template>
    <v-app>
        <v-main >
        <v-container>
                <div>
                    <h4 id="welcome">Welcome {user}, what will you accomplish today?</h4>
                </div>
                <v-row>
                <v-col cols="6">
                        <br>
                        <div>
                            <h5><i>Current Projects: {{this.allProjects.length}}</i></h5>
                        </div>
                        <br>
                        <div class="spacingTest" v-for="project in this.allProjects" :key="project.ID">
                            <router-link class="cleanText" :to="{path: 'projects/' + project.ID}">
                              <ProjectCard @board-update="getApiResult" v-bind:item="project"/>
                            </router-link>
                        </div>
                        <div id="buttonSpace">
                        </div>
                </v-col>
            </v-row>
            <br>
                                        <AddProject/>

        </v-container>
        </v-main>
    </v-app>
</template>


<style scoped>

/*  TODO: Rename styles    */
.spacingTest {
    min-height: 60px;
    padding-right: 20px;
}


.cleanText {
    text-decoration: none;
}

#buttonSpace {
    max-height: 35px;
    justify-self: left;
}

#welcome {
    padding-top: 10px;
    min-height: 45px;
    color: #265B5F;
}
</style>


<script>
import ProjectCard from '../components/ProjectCard'
import axios  from 'axios'
import AddProject from '../components/AddProject.vue'

export default {
  name: 'ProjectBoard',
  components: {
    ProjectCard,
    AddProject
    },
    
 data(){

    return {
        allProjects:[],
    }
  },

 mounted(){
    this.getApiResult()
  },

  methods: {
    getApiResult: function () {
            axios.get("https://localhost:44374/Project/all").then((response) => {
                console.log(response.data);
                this.allProjects=response.data;
            })
            .catch(error => {
                console.log(error.response)
            })
        },

    



    },



  
}
</script>
