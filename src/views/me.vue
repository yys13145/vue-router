<template>
  <div class="about">
    <h1>个人中心</h1>
    <button @click="goAbout()">跳转</button>

    <div ref="imageWrapper">
      <div class="success">
        <div class="img">
          <p style="font-weight: 600; font-size: 18px">支付成功</p>
        </div>
      </div>
      <div class="success-detail">
        <el-row style="margin-top: 10px;">
          <el-col :span="5" class="col-left-suc">收款商家</el-col>
           
        </el-row>
        <el-row style="margin-top: 10px;">
          <el-col :span="5" class="col-left-suc">费用名称</el-col>
           
        </el-row>
        <el-row style="margin-top: 10px;">
          <el-col :span="5" class="col-left-suc">缴费金额</el-col>
          
        </el-row>
      </div>
    </div>
    <div class="button">
      <el-button style="width: 70%;" type="success" size="small" @click="toImage">生成截图</el-button>
    </div>


    <el-dialog
      title="我是截图"
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="handleClose">
      <img :src="imgUrl" style="width:100%;">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save()">下载截图</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

import html2canvas from "html2canvas"

export default {
  data(){
    return{
      dialogVisible: false,
      imgUrl:""
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    goAbout (){
      console.log(this);
      this.$router.push({
          path: 'about'
      })
    },
    save(){
      this.saveFile(this.imgUrl, new Date().toLocaleString());
    },
    saveFile(data, filename) {
      const save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
      save_link.href = data;
      save_link.download = filename;

      const event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      save_link.dispatchEvent(event);
    },
    toImage() {
      html2canvas(this.$refs.imageWrapper).then(canvas => {
        let dataURL = canvas.toDataURL("image/png");
        this.imgUrl = dataURL;
        if (this.imgUrl !== "") {
          this.dialogVisible = true;
        }
      });
    }
  }
}
</script>
