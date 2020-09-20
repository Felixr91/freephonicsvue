<template>
  <div class="navigation">
    <div class="container">

        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <router-link to="/">
                    <h1 style=" color: #fdfd9e;
                            mix-blend-mode: overlay;
                            
                            font-weight: 700;">Freephonics</h1>
                </router-link>
            </div>
        </div>
        
        <div class="row" style="margin-top: 100px;">
            <ul class="d-flex justify-content-around" style="width:100%;">
                <li>
                    <a class="nav-link">
                        <h6>Alphabet</h6>
                    </a>
                </li>
                <li>
                    <a class="nav-link">
                        <router-link to="/digraphs">
                            <h6>Digraphs</h6>
                        </router-link>
                    </a>
                </li>
                <li>
                    <a class="nav-link">
                        <router-link to="/trigraphs">
                            <h6>Trigraphs</h6>
                        </router-link>
                    </a>
                </li>
                <li>
                    <a class="nav-link">
                        <h6>Blends</h6>
                    </a>
                </li>
                <li>
                    <a class="nav-link">
                        <h6>Diphtongs</h6>
                    </a>
                </li>
                <li>
                    <a class="nav-link">
                        <h6>Vowel Pairs</h6>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navigation',
    data() {
      return {
      }
    },
    computed: {},
    methods: {
    //   goHome() {
    //     this.$store.dispatch("goHome");
    //   },
    //   goTrigraphs() {
    //     this.$store.dispatch("goTrigraphs");
    //   }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
    list-style: none;
}

li a h6{
    color: black;
}
</style>
