<template>
    <div>
        <ol>
            <li v-for="thread in threads" :key="thread.tid">
                <router-link :to="'/thread/' + thread.tid">{{ thread.subject }}</router-link>
            </li>
        </ol>
    </div>
</template>

<script>
import { fetch } from '../api'

export default {
    data() {
        return {
            threads: null
        }
    },
  // TODO: route change
    mounted() {
        fetch('/thread.php', { fid: this.$route.params.id }).then(
            result => {
                // eslint-disable-next-line
                console.log(result)
                this.threads = result.data['__T']
            }
        )
    }
}
</script>


<style lang="scss" scoped>

</style>
