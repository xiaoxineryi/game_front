<template>
    <el-table :data="tableData" style="width: 100%" ref="multipleTable">
        <el-table-column type="selection" width="200"></el-table-column>
        <el-table-column type="index" label="序号" width="200"></el-table-column>
        <el-table-column prop="goods[0].name" label="商品名称" width="200"></el-table-column>
<!--        <el-table-column prop="image" label="商品图片" width="250">-->
      <!--            <el-image src="image" style="width: 230px;height: 180px"></el-image>-->
      <!--        </el-table-column>-->
      <!--        <el-table-column prop="buyer_id" label="购买者id" width="100"></el-table-column>-->
      <!--        <el-table-column prop="buyer_name" label="购买者"></el-table-column>-->
      <!--        <el-table-column prop="seller_id" label="供货商id"></el-table-column>-->
<!--      <el-table-column prop="name" label="商品名称" width="200"></el-table-column>-->
      <el-table-column prop="sellerName" label="商家"></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
<!--        <template slot-scope="scope">-->
<!--          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
<!--          <el-button type="text" size="small">编辑</el-button>-->
<!--        </template>-->
      </el-table-column>
    </el-table>
</template>

<script>
import store from '../../store/'

export default {
  name: 'RecordPage',
  data () {
    return {
      tableData: []
    }
  },

  mounted () {
    this.loadRecord()
  },

  methods: {
    loadRecord () {
      const _this = this
      this.$axios.get('/record/' + store.state.user.username).then(resp => {
        if (resp && resp.status === 200) {
          // console.log(resp.data)
          _this.tableData = resp.data
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
