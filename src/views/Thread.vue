<template>
    <div>
        <ul>
            <li v-for="thread in threads" :key="thread.pid">{{thread.pid}}{{ thread.content }}</li>
        </ul>
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
        fetch('/read.php', { tid: this.$route.params.id }).then(
            result => {
                // eslint-disable-next-line
                console.log(result)
                // this.threads = Array.from(result.data['__R'])
                this.threads = result.data['__R']
                console.log(this.threads)
            }
        )
    }
}
</script>


<style lang="scss" scoped>

</style>
