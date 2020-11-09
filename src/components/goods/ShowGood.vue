<template>
  <el-container>
    <el-aside width="400px">
      <el-image :src="form.image" style="height: 450px;width: 350px; "></el-image>
    </el-aside>
    <el-main style="text-align:left;background-color: #fff">
      <h1 style="font-size: xx-large">{{form.name}}</h1>
      <p>{{form.description}}</p>
      <el-button type="primary" @click="purchase(form)">购 买</el-button>
    </el-main>
  </el-container>
</template>

<script>
import store from '../../store/'

export default {
  name: 'ShowGood',
  data () {
    return {
      dialogFormVisible: false,
      form: [],
      formLabelWidth: '120px'
    }
  },
  mounted: function () {
    this.detail()
  },
  methods: {
    detail () {
      const _this = this
      this.$axios.get('/goods/detail?id=' + this.$route.query.id).then(resp => {
        if (resp && resp.status === 200) {
          _this.form = resp.data
        }
      })
    },
    purchase (form) {
      const _this = this
      this.$axios
        .post('/purchase?goodsId=' + form.id + '&buyerName=' + store.state.user.username + '&sellerName=' + form.user.username)
        .then(resp => {
          if (resp && resp.status === 200) {
            _this.$alert('购买成功', '提示', {
              confirmButtonText: '确定'
            })
          } else {
            _this.$alert(resp.data.message, '错误', {
              confirmButtonText: '确定'
            })
          }
        })
        .catch(() => {
        })
    }
  }
}
</script>

<style scoped>

</style>
