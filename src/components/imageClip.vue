<template>
  <div class="image-clip-wrapper" @touchmove.prevent="touchMove" @touchstart.prevent="touchStart" @touchend.prevent="touchEnd" @touchcancel="touchCancel">
    <canvas class="bottom" ref="canvas"></canvas>
    <div class="mask"></div>
    <canvas class="top" ref="targetCanvas"></canvas>
  </div>
</template>


<script>

const lrDis = 20;

export default {
  props: {
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    image: {
      type: String,
    },
  },
  data() {
    return {
      touch: {},
    };
  },
  created() {
    this._width = this.width || window.innerWidth;
    this._height = this.height || window.innerHeight;
  },
  mounted() {
    this.$nextTick(() => {
      this._init();
    });
  },
  methods: {
    touchStart(e) {
      this.touch.x = e.touches[0].pageX;
      this.touch.y = e.touches[0].pageY;

      if (e.touches[1]) {
        this.touch.x1 = e.touches[1].pageX;
        this.touch.y1 = e.touches[1].pageY;
        this.touch.originDis = Math.floor(Math.sqrt(
          (this.touch.x - this.touch.x1) * (this.touch.x - this.touch.x1) +
          (this.touch.y - this.touch.y1) * (this.touch.y - this.touch.y1)));
      }
    },
    touchMove(e) {
      if (e.touches[1]) {
        this.scale(e);
      } else {
        this.moveImage(e);
      }
    },
    touchEnd(e) {
      // 设置图片的最终位置
      this.imgPosX = this.touch.endPosX;
      this.imgPosY = this.touch.endPosY;

      if (this.touch.imgWidth && this.touch.imgHeight) {
        // 设置图片的最终大小
        this.imgWidth = this.touch.imgWidth;
        this.imgHeight = this.touch.imgHeight;
        this.touch.imgWidth = null;
        this.touch.imgHeight = null;
      }

      // 防止在双指放大以后,一指松开导致图片出现位移的情况
      if (e.touches[0]) {
        this.touch.x = e.touches[0].pageX;
        this.touch.y = e.touches[0].pageY;
      }
    },
    touchCancel() {

    },
    moveImage(e) {
      const x = e.touches[0].pageX;
      const y = e.touches[0].pageY;
      this._draw(this.imgPosX + x - this.touch.x, this.imgPosY + y - this.touch.y,
        this.imgWidth, this.imgHeight);
    },
    scale(e) {
      const x = e.touches[0].pageX;
      const y = e.touches[0].pageY;
      const x1 = e.touches[1].pageX;
      const y1 = e.touches[1].pageY;

      let dis = (x - this.touch.x) * (x - this.touch.x) +
        (y - this.touch.y) * (y - this.touch.y);
      dis = Math.floor(Math.sqrt(dis));

      const moveDis = Math.floor(Math.sqrt(
        (x - x1) * (x - x1) +
        (y - y1) * (y - y1)));

      if (this.touch.originDis > moveDis) {
        dis = -dis;
      }
      this.drawImageByDis(dis);
    },
    drawImageByDis(dis) {
      // calcula image's width and height
      this.touch.imgWidth = this.imgWidth + dis * 2;
      this.touch.imgHeight = this.imgHeight + dis * 2;

      // calcula offset in canvas with image
      const dx = this.canvas.width / 2 - this.touch.imgWidth / 2;
      const dy = this.canvas.height / 2 - this.touch.imgHeight / 2;
      if (dx >= this.dridX || dy >= this.dridY) return;
      this._draw(dx, dy, this.touch.imgWidth, this.touch.imgHeight);
    },
    _init() {
      // 初始化底层canvas
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = this._width;
      this.canvas.height = this._height;

      // 计算网格大小以及坐标
      this.dridSize = Math.min(this._width, this._height) - lrDis * 2;
      this.dridX = lrDis;
      this.dridY = (this._height - this.dridSize) / 2;

      // 初始化目标canvas,即高亮部分
      this.targetCanvas = this.$refs.targetCanvas;
      this.targetCtx = this.targetCanvas.getContext('2d');
      this.targetCanvas.width = this.dridSize;
      this.targetCanvas.height = this.dridSize;
      this.$refs.targetCanvas.style.top = `${this.dridY}px`;
      this.$refs.targetCanvas.style.left = `${this.dridX}px`;

      // 设置图片
      this.img = new Image();
      this.img.src = this.image;
      // 等待图片进行加载
      this.img.onload = () => {
        // 这里所有操作都要等待图片加载完成才能执行
        const shortest = Math.min(this.img.width, this.img.height);
        const scale = this.dridSize / shortest;
        this.imgWidth = this.img.width * scale;
        this.imgHeight = this.img.height * scale;
        this._imgWidth = Math.floor(this.imgWidth);
        this._imgHeight = Math.floor(this.imgHeight);

        this.imgPosX = (this._width - this.imgWidth) / 2;
        this.imgPosY = (this._height - this.imgHeight) / 2;
        // 在imgPosX,imgPosY出绘制图片,默认图片居中显示
        this._draw(this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight);
      };
    },
    _draw(imgX, imgY, imgWidth, imgHeight) {
      imgX = Math.floor(imgX);
      imgY = Math.floor(imgY);
      imgWidth = Math.floor(imgWidth);
      imgHeight = Math.floor(imgHeight);

      if (imgX > this.dridX) {
        imgX = this.dridX;
      }
      if (imgY > this.dridY) {
        imgY = this.dridY;
      }
      if (imgWidth < this._imgWidth) {
        imgWidth = this._imgWidth;
        this.imgWidth = this._imgWidth;
      }
      if (imgHeight < this._imgHeight) {
        imgHeight = this._imgHeight;
        this.imgHeight = this._imgHeight;
      }
      if (imgX + imgWidth < this.dridX + this.dridSize) {
        imgX = this.dridX + this.dridSize - imgWidth;
      }
      if (imgY + imgHeight < this.dridY + this.dridSize) {
        imgY = this.dridY + this.dridSize - imgHeight;
      }

      this.touch.endPosX = imgX;
      this.touch.endPosY = imgY;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.targetCtx.clearRect(0, 0, this.targetCanvas.width, this.targetCanvas.height);
      this._drawImage(imgX, imgY, imgWidth, imgHeight);
      this._drawDrid(this.targetCtx, 0, 0);
    },
    _drawDrid(ctx, left, top) {
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1;
      ctx.strokeRect(left, top, this.dridSize, this.dridSize);

      const cellLen = Math.floor(this.dridSize / 3);
      for (let i = 1; i <= 2; i += 1) {
        const horizontal = i * cellLen + left;
        const vertical = i * cellLen + top;
        this._drawLine(ctx,
          { x: left, y: vertical }, { x: left + this.dridSize, y: vertical });

        this._drawLine(ctx,
          { x: horizontal, y: top }, { x: horizontal, y: top + this.dridSize });
      }
    },
    _drawLine(ctx, start, end, style = '#fff', lineWidth = 1) {
      if (!start || !end || !start.x && start.x !== 0 || !start.y && start.y !== 0 ||
        !end.x && end.x !== 0 || !end.y && end.y !== 0) {
        return;
      }
      ctx.beginPath();
      this.strokeStyle = style;
      this.lineWidth = lineWidth;
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
    },
    _drawImage(x, y, imgWidth, imgHeight) {
      this.ctx.drawImage(this.img, x, y, imgWidth, imgHeight);
      this.targetCtx.drawImage(this.canvas, this.dridX, this.dridY, this.dridSize, this.dridSize,
        0, 0, this.dridSize, this.dridSize);
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
.image-clip-wrapper {
  .bottom,
  .mask,
  .top {
    position: absolute;
  }
  .bottom {
    z-index: 10;
  }
  .mask {
    width: 100%;
    height: 100%;
    z-index: 20;
    background: rgba(0, 0, 0, 0.5);
  }
  .top {
    z-index: 30;
  }
}
</style>

