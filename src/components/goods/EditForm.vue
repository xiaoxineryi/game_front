<template>
    <div>
        <i class="el-icon-circle-plus-outline"  @click="dialogFormVisible = true"></i>
        <el-dialog
                title="添加/修改商品"
                :visible.sync="dialogFormVisible"
                @close="clear">
            <el-form v-model="form" style="text-align: left" ref="dataForm">
                <el-form-item label="商品名" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="form.name" autocomplete="off" placeholder="不加《》"></el-input>
                </el-form-item>
                <el-form-item label="商品图片" :label-width="formLabelWidth" prop="cover">
                    <el-input v-model="form.image" autocomplete="off" placeholder="图片 URL"></el-input>
                    <UploadImg @onUpload="uploadImg" ref="imgUpload"></UploadImg>
                </el-form-item>
                <el-form-item label="简介" :label-width="formLabelWidth" prop="description">
                    <el-input type="textarea" v-model="form.description" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="分类" :label-width="formLabelWidth" prop="category">
                    <el-select v-model="form.category" placeholder="请选择分类">
                        <el-option label="文学" value="1"></el-option>
                        <el-option label="流行" value="2"></el-option>
                        <el-option label="文化" value="3"></el-option>
                        <el-option label="生活" value="4"></el-option>
                        <el-option label="经管" value="5"></el-option>
                        <el-option label="科技" value="6"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="id" style="height: 0">
                    <el-input type="hidden" v-model="form.id" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="onSubmit">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import UploadImg from '../common/UploadImg'
import store from '../../store/'

export default {
  name: 'EditForm',
  components: {UploadImg},
  data () {
    return {
      dialogFormVisible: false,
      form: {
        id: '',
        name: '',
        image: '',
        description: '',
        category: '',
        uid: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    clear () {
      this.form = {
        id: '',
        name: '',
        image: '',
        description: '',
        category: '',
        uid: ''
      }
    },
    uploadImg () {
      this.form.image = this.$refs.imgUpload.url
    },
    onSubmit () {
      this.$axios
        .post('/goods?username=' + store.state.user.username, {
          id: this.form.id,
          name: this.form.name,
          image: this.form.image,
          description: this.form.description,
          category: this.form.category,
          uid: this.form.uid
        }).then(resp => {
          if (resp && resp.status === 200) {
            this.dialogFormVisible = false
            this.$emit('onSubmit')
          }
        })
    }
  }
}
</script>

<style scoped>
    .el-icon-circle-plus-outline {
        margin: 50px 0 0 20px;
        font-size: 100px;
        float: left;
        cursor: pointer;
    }
</style>
